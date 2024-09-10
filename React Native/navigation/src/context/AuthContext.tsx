import React, { createContext } from 'react';

/* Se define una interfaz llamada AuthState que define los datos de autenticación que se
utilizarán en la aplicación */
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

/* Se define un objeto authInitialState que representa el estado inicial de la aplicación de autenticación.
En este caso, el estado inicial es que el usuario no ha iniciado sesión. */
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

/* Se define una interfaz llamada AuthContextProps que define el contexto que se proporcionará
a los componentes secundarios. */
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
}

/* Se crea un contexto utilizando la función createContext de React.
Se inicializa el contexto con un objeto vacío utilizando la sintaxis {} as AuthContextProps para que
TypeScript sepa que el objeto vacío se ajustará a la forma de AuthContextProps. */
export const AuthContext = createContext({} as AuthContextProps);

/* Por último, se define un componente de proveedor de autenticación llamado AuthProvider que envuelve
los componentes secundarios en el contexto de autenticación */
export const Authprovider = ({ children }: any) => {
    return (
        <AuthContext.Provider value={{
             authState: authInitialState,
             signIn: () => {},
        }}>
            {children}
        </AuthContext.Provider>
    );
}