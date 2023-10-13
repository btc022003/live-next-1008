'use client';
import React, { createContext } from 'react';

export const globalContext = createContext({
  appName: '这是全局数据',
});
function AppProvider({ children }: any) {
  return (
    <globalContext.Provider
      value={{
        appName: '这里真的是存的全局的数据',
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export default AppProvider;
