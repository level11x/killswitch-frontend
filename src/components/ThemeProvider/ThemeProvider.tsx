import React, { createContext, useContext, useState } from 'react'

export enum ThemeName {
    'light' = 'light',
    'dark' = 'dark',
}

const DEFAULT_THEME = ThemeName.dark

interface IThemeContext {
    themeName: ThemeName
    setThemeName: (themeName: ThemeName) => void
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

interface ThemeProviderProps {}

export const ThemeProvider = ({
    children,
}: React.PropsWithChildren<ThemeProviderProps>) => {
    // const key = 'theme'

    // const t: ThemeName = DEFAULT_THEME
    // if (localStorage) {
    //     try {
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //         t = (localStorage.getItem(key) || DEFAULT_THEME) as ThemeName
    //     } catch (e) {}
    // }
    const [themeName, setThemeName] = useState(DEFAULT_THEME)

    // useEffect(() => {
    //     try {
    //         localStorage.setItem(key, themeName || DEFAULT_THEME)
    //         document.body.dataset.theme = themeName
    //     } catch (e) {}
    // }, [themeName])

    return (
        <ThemeContext.Provider
            value={{
                themeName,
                setThemeName,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useSwitchTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useSwitchTheme must be used within a ThemeProvider')
    }
    return context
}

export default ThemeProvider
