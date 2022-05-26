import {Container, ImageList, ImageListItem, AvatarGroup, Avatar, Typography, Link, Divider} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useState} from "react";

export const Rightbar = () => {
    const [image, setImg] = useState([
        {
            alt: 'Remy Sharp',
            src: 'https://mui.com//static/images/avatar/1.jpg'
        }, {
            alt: 'Travis Howard',
            src: 'https://mui.com//static/images/avatar/2.jpg'
        }, {
            alt: 'Cindy Baker',
            src: 'https://mui.com//static/images/avatar/3.jpg'
        }, {
            alt: 'Agnes Walker',
            src: 'https://mui.com//static/images/avatar/4.jpg'
        }, {
            alt: 'Trevor Henderson',
            src: 'https://mui.com//static/images/avatar/5.jpg'
        },
    ])
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];
    const {
        container, title, imageList, avatarGrp, link
    } = useStyles()
    return (
        <Container className={container}>
            <Typography variant="h6" gutterBottom className={title}>Online Friends</Typography>
            <AvatarGroup max={6} className={avatarGrp}>
                {
                    image.map((img, i) => (
                        <Avatar key={i} src={img.src} alt={img.alt}/>
                    ))
                }
            </AvatarGroup>
            <Typography variant="h6" gutterBottom className={title}>Gallery</Typography>
            <ImageList rowHeight={100} className={imageList} cols={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Typography className={title} gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={link} variant="body2">
                Sport
            </Link>
            <Link href="#" className={link} variant="body2">
                Food
            </Link>
            <Link href="#" className={link} variant="body2">
                Music
            </Link>
            <Divider flexItem style={{marginBottom: 5}}/>
            <Link href="#" className={link} variant="body2">
                Movies
            </Link>
            <Link href="#" className={link} variant="body2">
                Science
            </Link>
            <Link href="#" className={link} variant="body2">
                Life
            </Link>
        </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0
    },
    title: {
        fontSize: 16,
        fontWeight: 500, color: '#555'
    },
    imageList: {
        overflowY: "hidden !important"
    },
    avatarGrp: {
        justifyContent: "start",
        marginBottom: theme.spacing(3),
    },
    link: {
        marginRight: "10px !important",
        color: "#555",
        fontSize: 16,
    }
}))
