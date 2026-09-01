import { trpc } from "@/providers/trpc";
import { useCallback, useMemo } from "react";

export type UnifiedUser = {
  id: number;
  name: string;
  email?: string;
  role: string;
  authType: "local";
};

export function useAuth() {
  const {
    data: localUser,
    isLoading: localLoading,
  } = trpc.localAuth.me.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const user: UnifiedUser | null = useMemo(() => {
    if (localUser) {
      return {
        id: localUser.id,
        name: localUser.name || localUser.username,
        email: localUser.email || undefined,
        role: localUser.role,
        authType: "local" as const,
      };
    }
    return null;
  }, [localUser]);

  const isAdmin = user?.role === "admin";

  const logout = useCallback(() => {
    localStorage.removeItem("local_auth_token");
    window.location.reload();
  }, []);

  return useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isAdmin,
      isLoading: localLoading,
      logout,
    }),
    [user, isAdmin, localLoading, logout],
  );
}
