import { createTheme } from '@material-ui/core/styles'
import 'assets/fontawesome-pro-5.15.3/css/all.min.css'
import 'assets/scss/themes/all.scss'
import { ThemeName } from 'components/ThemeProvider/ThemeProvider'

declare module '@material-ui/core/styles/createPalette' {
    interface TypeBackground {
        page: string
        default: string
        paper: string
        primary: string
        secondary: string
        extra: string
        dark: string
        paused: string
        retired: string
        hover: string
        border: string
    }
}

// TODO: move ternary codition of theme to separate file that easy to config for MUI
const theme = (themeName: ThemeName) => {
    return createTheme({
        palette: {
            background: {
                page: 'var(--background-color-page)',

                // to be calculated in <SnackBar />
                default:
                    themeName === 'light'
                        ? '#d32f2f' // affect clear fillter
                        : themeName === 'dark'
                        ? '#d32f2f'
                        : '#d32f2f',
                paper: 'var(--mui-background-paper)',
                primary: 'var(--color-base-200)',
                secondary: '#d32f2f',
                extra: '#d32f2f',
                dark: 'var(--color-primary-500)',
                paused: '#FCE57E',
                retired: '#e57373',
                hover: '#EFE6DC',
                border: 'var(--color-base-300)',
            },
            primary: {
                // NOTE: effect popover select bgcl, input focus color
                main:
                    themeName === 'light'
                        ? 'hsl(231, 48%, 48%)'
                        : themeName === 'dark'
                        ? 'hsl(187, 100%, 42%)'
                        : '#1fa',
            },
            secondary: {
                main: '#F8F2EC',
            },
            text: {
                primary:
                    themeName === 'light'
                        ? '#000'
                        : themeName === 'dark'
                        ? '#fff'
                        : '#1fa',
                secondary:
                    themeName === 'light'
                        ? '#000'
                        : themeName === 'dark'
                        ? '#fff'
                        : '#1fa',
            },
        },
        overrides: {
            MuiAccordionActions: {
                root: {
                    paddingLeft: 0,
                    paddingRight: 0,
                },
            },
        },
    })
}

export default theme
