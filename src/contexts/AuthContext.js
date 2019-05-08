import React, { createContext } from 'react'

export const AuthContext = createContext(false);

export const { Provider, Consumer } = AuthContext;