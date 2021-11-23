import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Close from '@material-ui/icons/Close'
import Menu from '@material-ui/icons/Menu'
import SocialList from 'components/SocialList/SocialList'
import { useState } from 'react'
import { ReactComponent as Logo } from './LogoV2.svg'
import styles from './styles'

const useStyles = makeStyles(styles)

type HeaderProps = { links?: React.ReactNode }

const Header = ({ links }: HeaderProps) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const isScrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })
    const classes = useStyles({ isScrollTrigger })

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <AppBar className={`${classes.header}`}>
            <Toolbar className={classes.container}>
                <Button href="/">
                    <Logo className="_h-32px _h-48px-sm _mgr-24px" />
                </Button>

                <Hidden smDown implementation="js">
                    <SocialList />
                    <div className={classes.collapse}>{links}</div>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        className={classes.iconButton}
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>

            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor={'right'}
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    PaperProps={{
                        className: ' _ovfy-at _ovfx-hd _dp-f',
                        style: {
                            backgroundColor: 'var(--sidebar-background-color',
                            backdropFilter: 'var(--sidebar-backdrop-filter)',
                        },
                    }}
                    onClose={handleDrawerToggle}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.closeButtonDrawer}
                    >
                        <Close />
                    </IconButton>
                    <div className={classes.appResponsive}>{links}</div>
                    <div className="_f-1">{/* <Sidebar /> */}</div>
                    <SocialList className="_w-100pct _dp-f _fw-w _alit-ct _jtfct-ct _mgbt-12px" />
                </Drawer>
            </Hidden>
        </AppBar>
    )
}

export default Header
