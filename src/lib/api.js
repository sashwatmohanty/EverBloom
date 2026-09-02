// Everbloom Cafe API Client
const API_BASE = "";

// Helper to get auth header
export const getAuthHeaders = (isFormData = false) => {
  const token = localStorage.getItem("everbloom_admin_token");
  const headers = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  return headers;
};

// Authentication
export const authApi = {
  login: async (username, password) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    return res.json();
  },
  getMe: async () => {
    const res = await fetch(`${API_BASE}/api/auth/me`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },
  changePassword: async (currentPassword, newPassword) => {
    const res = await fetch(`${API_BASE}/api/auth/change-password`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    return res.json();
  },
};

// Photos (Patho)
export const photosApi = {
  getAll: async (category = "all") => {
    try {
      const url = category && category !== "all" 
        ? `${API_BASE}/api/photos?category=${encodeURIComponent(category)}` 
        : `${API_BASE}/api/photos`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch photos");
      return await res.json();
    } catch (err) {
      console.warn("API offline, falling back for photos:", err);
      return { success: false, data: [] };
    }
  },
  create: async (formData) => {
    const res = await fetch(`${API_BASE}/api/photos`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: formData,
    });
    return res.json();
  },
  update: async (id, formData) => {
    const res = await fetch(`${API_BASE}/api/photos/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(true),
      body: formData,
    });
    return res.json();
  },
  delete: async (id) => {
    const res = await fetch(`${API_BASE}/api/photos/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return res.json();
  },
};

// Contact Messages
export const contactApi = {
  submit: async (messageData) => {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageData),
    });
    return res.json();
  },
  getAll: async (status = "all") => {
    const url = status && status !== "all" 
      ? `${API_BASE}/api/contact?status=${encodeURIComponent(status)}` 
      : `${API_BASE}/api/contact`;
    const res = await fetch(url, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },
  updateStatus: async (id, status) => {
    const res = await fetch(`${API_BASE}/api/contact/${id}/status`, {
      method: "PATCH",
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    return res.json();
  },
  delete: async (id) => {
    const res = await fetch(`${API_BASE}/api/contact/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return res.json();
  },
};

// Promo Popup
export const popupApi = {
  getActive: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/popup/active`);
      if (!res.ok) throw new Error("Failed to fetch active popup");
      return await res.json();
    } catch (err) {
      console.warn("API offline for active popup:", err);
      return { success: false, data: null };
    }
  },
  getAll: async () => {
    const res = await fetch(`${API_BASE}/api/popup`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },
  create: async (formData) => {
    const res = await fetch(`${API_BASE}/api/popup`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: formData,
    });
    return res.json();
  },
  update: async (id, formData) => {
    const res = await fetch(`${API_BASE}/api/popup/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(true),
      body: formData,
    });
    return res.json();
  },
  toggleActive: async (id) => {
    const res = await fetch(`${API_BASE}/api/popup/${id}/toggle`, {
      method: "PATCH",
      headers: getAuthHeaders(),
    });
    return res.json();
  },
  delete: async (id) => {
    const res = await fetch(`${API_BASE}/api/popup/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return res.json();
  },
};

// Menu
export const menuApi = {
  getAll: async (category = "all") => {
    try {
      const url = category && category !== "all" 
        ? `${API_BASE}/api/menu?category=${encodeURIComponent(category)}` 
        : `${API_BASE}/api/menu`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch menu");
      return await res.json();
    } catch (err) {
      console.warn("API offline, falling back for menu:", err);
      return { success: false, data: [] };
    }
  },
  create: async (formData) => {
    const res = await fetch(`${API_BASE}/api/menu`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: formData,
    });
    return res.json();
  },
  update: async (id, formData) => {
    const res = await fetch(`${API_BASE}/api/menu/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(true),
      body: formData,
    });
    return res.json();
  },
  delete: async (id) => {
    const res = await fetch(`${API_BASE}/api/menu/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return res.json();
  },
};

// Stats
export const statsApi = {
  getStats: async () => {
    const res = await fetch(`${API_BASE}/api/stats`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },
};
