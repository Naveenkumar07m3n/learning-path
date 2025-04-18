import React, { createContext, useState } from 'react';
import Hookscontext from '../Hookscontext';

export const AuthContext = createContext();

export const AuthProvider = () => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Hookscontext />
    </AuthContext.Provider>
  );
};
