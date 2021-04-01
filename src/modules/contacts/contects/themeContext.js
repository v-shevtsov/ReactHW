import { createContext, useCallback, useMemo, useState } from "react";

export const themeContext = createContext({});

export default function ContactProvider({children}) {
    const [theme, setTheme] = useState('teal')
    ContactProvider.displayName = 'ContactContext';

    const changeTheme = useCallback(
        (theme) => {
            theme === 'teal'
                ? setTheme('telegram')
                : setTheme('teal')
        },
        [],
    );


    const contextValue = useMemo(
        () => ({
            theme,
            changeTheme
        }), [theme, changeTheme])

    return (
        <themeContext.Provider value={contextValue}>
            {children}
        </themeContext.Provider>
    );
}