import {AppBar, Toolbar, Typography, alpha, Badge, Avatar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Cancel, Mail, Notifications, Search} from "@mui/icons-material";
import {InputBase} from '@mui/material';
import {useState} from "react";


export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {
        logoLg,
        logoSm,
        toolBar,
        search,
        input,
        icons,
        badge,
        userImg,
        cancel,
        searchBtn
    } = useStyles({open})
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={toolBar}>
                    <Typography variant="h6" className={logoLg}>
                        Lama Dev
                    </Typography>
                    <Typography variant="h6" className={logoSm}>
                        LAMA
                    </Typography>
                    <div className={search}>
                        <Search/>
                        <InputBase placeholder='...search' className={input}/>
                        <span className={cancel}>
                            <Cancel onClick={() => setOpen(false)}/>
                        </span>
                    </div>
                    <div className={icons}>
                        <span className={searchBtn}>
                            <Search onClick={() => setOpen(true)}/>
                        </span>
                        <Badge badgeContent={4} color="secondary" className={badge}>
                            <Mail/>
                        </Badge> <Badge badgeContent={4} color="secondary" className={badge}>
                        <Notifications/>
                    </Badge>
                        <Avatar alt="hamas"
                                className={userImg}
                                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Sasuke-Uchiha-Rinnegan-Users.jpg"/>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
const useStyles = makeStyles((theme) => ({

    toolBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '50%',
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            display: ({open}) => open ? 'flex' : 'none',
            width: '70%',

        }
    },
    input: {
        color: '#fff',
        marginLeft: theme.spacing(1)
    },
    cancel: {
        fontSize:'10px',
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    searchBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        }
    },
    icons: {
        alignItems: 'center',
        display: ({open}) => (open ? 'none' : 'flex'),

    },
    badge: {marginRight: theme.spacing(2)},
    userImg: {},

}))
