'use client';

import { ReactNode, createContext, useContext } from 'react';

type AuthContextType = {
  isSignedIn: boolean;
  user: {
    avatarUrl?: string;
  };
};

export interface LocaleProviderProps {
  children: ReactNode;
  auth: AuthContextType;
}

export const AuthContext = createContext<AuthContextType>({
  isSignedIn: false,
  user: {},
});

export function AuthProvider({ children, auth }: LocaleProviderProps) {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const auth = useContext(AuthContext);

  if (auth === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return auth;
}
