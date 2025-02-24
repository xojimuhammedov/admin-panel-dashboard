import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { request } from '../services/request';
import config from '../config';

const defaultProvider = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve()
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultProvider.user);
    const [loading, setLoading] = useState(defaultProvider.loading);

    const handleLogin = (params, errorCallback) => {
        setLoading(false);
        request
            .post(`${config.API_URL}/auth/signin`, params)
            .then((response) => {
                window.localStorage.setItem('userToken', response.data?.data.tokens.accessToken.token);
                setUser({ ...response.data.user });
                window.location.reload()
                window.localStorage.setItem('userData', JSON.stringify(response.data?.data.user));
                toast.success('Siz muvaffaqiyatli kirdingiz!');
            })
            .catch((err) => {
                console.log(err);
                if (errorCallback) errorCallback(err);
            })
            .finally(() => {
                setLoading(true);
            });
    };


    const values = {
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
    };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
