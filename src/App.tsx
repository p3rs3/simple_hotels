import { useEffect } from 'react';
import { AppRouter } from './components/AppRouter';
import { useActions } from './hooks/useActions';

export const App = () => {
    const { setIsAuth } = useActions();

    useEffect(() => {
        if (localStorage.getItem('isAuth') === 'true') {
            setIsAuth(true);
        }
    }, []);

    return (
        <AppRouter />
    );
}