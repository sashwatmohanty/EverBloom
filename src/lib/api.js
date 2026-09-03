/**
 * Everbloom Café Client API Layer
 * Connects frontend components to the backend REST API
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";

export const getAdminToken = () => {
  return localStorage.getItem("everbloom_admin_token") || null;
};

export const setAdminToken = (token) => {
  if (token) {
    localStorage.setItem("everbloom_admin_token", token);
  } else {
    localStorage.removeItem("everbloom_admin_token");
  }
};

export const getAdminUser = () => {
  const userStr = localStorage.getItem("everbloom_admin_user");
  try {
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
};

export const setAdminUser = (user) => {
  if (user) {
    localStorage.setItem("everbloom_admin_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("everbloom_admin_user");
  }
};

/**
 * Generic API fetch wrapper with JSON parsing and error handling
 */
async function request(endpoint, options = {}) {
  const token = getAdminToken();
  const headers = { ...options.headers };

  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const isFormData = options.body instanceof FormData;
  if (!isFormData && !headers["Content-Type"] && options.method && options.method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      if (res.status === 401 && endpoint.includes("/admin/")) {
        setAdminToken(null);
        setAdminUser(null);
      }
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }

    return data;
  } catch (err) {
    console.warn(`API Error [${endpoint}]:`, err.message);
    throw err;
  }
}

// ─── Menu API ───
export const api = {
  // Public Menu
  getGroupedMenu: async () => {
    return request("/menu/grouped");
  },

  getAllMenuItems: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/menu${query ? `?${query}` : ""}`);
  },

  getMenuItem: async (id) => {
    return request(`/menu/${id}`);
  },

  // Admin Menu CRUD
  createMenuItem: async (itemData) => {
    if (itemData instanceof FormData) {
      return request("/menu", {
        method: "POST",
        body: itemData,
      });
    }
    return request("/menu", {
      method: "POST",
      body: JSON.stringify(itemData),
    });
  },

  updateMenuItem: async (id, itemData) => {
    if (itemData instanceof FormData) {
      return request(`/menu/${id}`, {
        method: "PUT",
        body: itemData,
      });
    }
    return request(`/menu/${id}`, {
      method: "PUT",
      body: JSON.stringify(itemData),
    });
  },

  updateItemPrice: async (id, price) => {
    return request(`/menu/${id}/price`, {
      method: "PATCH",
      body: JSON.stringify({ price: Number(price) }),
    });
  },

  toggleItemAvailability: async (id, isAvailable) => {
    return request(`/menu/${id}/availability`, {
      method: "PATCH",
      body: JSON.stringify({ isAvailable: Boolean(isAvailable) }),
    });
  },

  deleteMenuItem: async (id) => {
    return request(`/menu/${id}`, {
      method: "DELETE",
    });
  },

  seedDefaultMenu: async (force = false) => {
    return request("/menu/seed", {
      method: "POST",
      body: JSON.stringify({ force }),
    });
  },

  // Table Reservations
  createReservation: async (data) => {
    return request("/reservations", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getReservations: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/reservations${query ? `?${query}` : ""}`);
  },

  updateReservationStatus: async (id, status) => {
    return request(`/reservations/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  },

  deleteReservation: async (id) => {
    return request(`/reservations/${id}`, {
      method: "DELETE",
    });
  },

  // Contact Messages
  submitContact: async (data) => {
    return request("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getAllContacts: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/contact/admin/all${query ? `?${query}` : ""}`);
  },

  updateContactStatus: async (id, status) => {
    return request(`/contact/admin/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
  },

  deleteContact: async (id) => {
    return request(`/contact/admin/${id}`, {
      method: "DELETE",
    });
  },

  // Admin Authentication & Overview
  loginAdmin: async (email, password) => {
    const res = await request("/admin/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.accessToken) {
      setAdminToken(res.accessToken);
      setAdminUser(res.admin);
    }
    return res;
  },

  logoutAdmin: async () => {
    try {
      await request("/admin/logout", { method: "POST" });
    } catch {
      // Ignore errors on logout
    }
    setAdminToken(null);
    setAdminUser(null);
  },

  getAdminOverview: async () => {
    return request("/admin/dashboard/overview");
  },

  checkHealth: async () => {
    return request("/health");
  },
};

export default api;
