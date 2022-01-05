import {
    makeStyles,
    StylesProvider,
    ThemeProvider,
} from '@material-ui/core/styles'
import appStyle, { APP_STYLE_PROPS } from 'assets/jss/appStyle'
import createTheme from 'assets/jss/appTheme'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import HeaderLinks from 'components/HeaderLinks/HeaderLinks'
import { useSwitchTheme } from 'components/ThemeProvider/ThemeProvider'
import { initialize as initializeFirebase } from 'config/firebaseConfig'
import { initialize as initializeGTM } from 'config/googleTagManager'
import Home from 'pages/Home/Home'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'

const useStyles = makeStyles<null, APP_STYLE_PROPS>(appStyle)

function App() {
    const classes = useStyles({})
    const { themeName } = useSwitchTheme()
    const theme = createTheme(themeName)
    useEffect(() => {
        initializeGTM()
        initializeFirebase()
    }, [])
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <main className={classes.main}>
                    <Header links={<HeaderLinks />} />

                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>

                    <Footer />
                </main>
            </ThemeProvider>
        </StylesProvider>
    )
}

export default App
