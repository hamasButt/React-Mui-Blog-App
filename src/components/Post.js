import {Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

export const Post = () => {
    const {media, card} = useStyles()
    return (
        <Card className={card}>
            <CardActionArea>
                <CardMedia
                    className={media}
                    title="my Post"
                    image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Sasuke-Uchiha-Rinnegan-Users.jpg"/>
                <CardContent>
                    <Typography gutterBottom variant="h5">My First Post</Typography>
                    <Typography variant="body2">In Harry’s world fate works not only through powers and objects such as
                        prophecies, the Sorting Hat, wands, and the Goblet of Fire, but also through people. Repeatedly,
                        other characters decide Harry’s future for him, depriving him of freedom and choice. For
                        example, before his eleventh birthday, the Dursleys control Harry’s life, keeping from him
                        knowledge of his past and understanding of his identity (Sorcerer’s 49). In Harry Potter and the
                        Chamber of Secrets, Dobby repeatedly assumes control over events by intercepting Ron’s and
                        Hermione’s letters during the summer; by sealing the barrier to Platform 93⁄4, causing Harry to
                        miss the Hogwarts Express; and by sending a Bludger after Harry in a Quidditch match, breaking
                        his wrist. Yet again, in Harry Potter and the Prisoner of Azkaban, many adults intercede while
                        attempting to protect Harry from perceived danger, as Snape observes: “Everyone from the
                        Minister of Magic downward has been trying to keep famous Harry Potter safe from Sirius Black”
                        (284). All these characters, as enactors of fate, unknowingly drive Harry toward his destiny by
                        attempting to control or to direct his life, while themselves controlled and directed by
                        fate. </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}
const useStyles = makeStyles((theme) => ({

    // [theme.breakpoints.down('sm')]

    media: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
            height: 150
        }

    },
    card: {
        marginBottom: theme.spacing(10)
    }
}))
