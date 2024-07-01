import React from 'react'
import useFetch from './useFetch';

type User = {
    id: number;
    nome: string;
    idade: number;
    aulas: number;
    cursos: number;
    preferencias: {
      playback: number;
      volume: number;
      qualidade: "baixa" | "média" | "alta";
    }
  }

type IUserContext = {
    data: User | null;
    loading: boolean;
    error: string | null;
}

const UserContext = React.createContext<IUserContext | null>(null);

const USER_URL = 'https://data.origamid.dev/usuarios/1';

export const useUser = () => {
    const context = React.useContext(UserContext);
    if (!context) throw new Error('useContext deve estar dentro do Provider');
    return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
    const [data, setData] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const user = useFetch<User>(USER_URL);

    React.useEffect(() => {
        const { data, loading, error } = user;
        setData(data);
        setLoading(loading);
        setError(error);
    }, [user]);

    return (
        <UserContext.Provider
          value={{
            data,
            loading,
            error
          }}
        >
          {children}
        </UserContext.Provider>
      );
}
