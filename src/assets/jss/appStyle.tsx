import { createStyles } from '@material-ui/core/styles'

export type APP_STYLE_PROPS = {
    pageName?: string
}

const appStyle = () =>
    createStyles({
        main: {
            position: 'relative',
            minHeight: '100vh !important',
            background: ({ pageName }: APP_STYLE_PROPS) =>
                `var(--${pageName}-page-background, var(--page-background))`,
            backgroundPosition: 'top center',
            backgroundColor: ({ pageName }: APP_STYLE_PROPS) =>
                `var(--${pageName}-page-background-color, var(--page-background-color))`,
            backgroundSize: '100% auto !important',
        },
        container: {
            paddingLeft:
                'calc(var(--main-padding-left) + var(--sidebar-width))',
            paddingTop: 'calc(var(--main-padding-top) + var(--header-height))',
            paddingRight: 'calc(var(--main-padding-right))',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1,
            overflow: ({ pageName }: APP_STYLE_PROPS) =>
                pageName &&
                ['home', 'stake', 'funding', 'farm-v2'].includes(pageName)
                    ? 'hidden'
                    : undefined,
            position: ({ pageName }: APP_STYLE_PROPS) =>
                pageName === 'home' ? 'relative' : undefined,
        },
        children: {
            width: '100%',
            maxWidth: 'var(--main-max-width)',
            minHeight: '77vh',
        },
    })

export default appStyle
