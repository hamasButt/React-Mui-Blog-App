import {makeStyles} from "@mui/styles";
import {
    Container,
    Typography,
    IconButton,
} from "@mui/material";
import {
    Person,
    List,
    PhotoCamera,
    PlayCircleOutline,
    TabletMac,
    Bookmark,
    Storefront,
    Settings,
    ExitToApp, Home

} from "@mui/icons-material";
import {useState} from "react";

export const Leftbar = () => {
    const {
        item,
        container,
        icon,
        text,
    } = useStyles()
    const [icons, setIcon] = useState([
        {
            elem: Home,
            iconName: 'HomePage'
        },
        {
            elem: Person,
            iconName: 'Friends'
        },
        {
            elem: List,
            iconName: 'Lists'
        },
        {
            elem: PhotoCamera,
            iconName: 'Camera'
        },
        {
            elem: PlayCircleOutline,
            iconName: 'Videos'
        },
        {
            elem: TabletMac,
            iconName: 'Apps'
        },
        {
            elem: Bookmark,
            iconName: 'Collections'
        },
        {
            elem: Storefront,
            iconName: 'Martket Place'
        },
        {
            elem: Settings,
            iconName: 'Settings'
        },
        {
            elem: ExitToApp,
            iconName: 'HomePage'
        },
    ])
    return (
        <Container className={container}>
            {
                icons.map((el, i) => {
                    return <div className={item} key={i}>
                        <el.elem/>
                        <Typography className={text}>{el.iconName}</Typography>
                    </div>

                })
            }
            {/*<div className={item}>*/}
            {/*    <Person className={icon}/>*/}
            {/*    <Typography className={text}>Friends</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <List className={icon}/>*/}
            {/*    <Typography className={text}>Lists</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <PhotoCamera className={icon}/>*/}
            {/*    <Typography className={text}>Camera</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <PlayCircleOutline className={icon}/>*/}
            {/*    <Typography className={text}>Videos</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <TabletMac className={icon}/>*/}
            {/*    <Typography className={text}>Apps</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <Bookmark className={icon}/>*/}
            {/*    <Typography className={text}>Collections</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <Storefront className={icon}/>*/}
            {/*    <Typography className={text}>Market Place</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <Settings className={icon}/>*/}
            {/*    <Typography className={text}>Settings</Typography>*/}
            {/*</div>*/}
            {/*<div className={item}>*/}
            {/*    <ExitToApp className={icon}/>*/}
            {/*    <Typography className={text}>Logout</Typography>*/}
            {/*</div>*/}
        </Container>
    )
}


const useStyles = makeStyles((theme) =>
    ({
        container: {
            paddingTop: theme.spacing(10),
            height: '100vh',
            color: '#fff',
            position: 'sticky', top: '0',
            backgroundColor: theme.palette.primary.main,
            [theme.breakpoints.up('sm')]: {
                backgroundColor: '#FFF',
                color: '#555',
            }
        },
        item: {
            display: 'flex', alignItems: 'center',
            marginBottom: theme.spacing(4),
            up: {
                marginBottom: theme.spacing(3),
                cursor: 'pointer'
            }
        },
        text: {
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        },
        icon: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '18px'
            }
        }

    }))
