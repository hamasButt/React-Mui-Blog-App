import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Post} from "./Post";

export const Feed = () => {
    const item = [{}, {}, {}, {}, {}, {},]
    const {
        container
    } = useStyles()
    return (
        <Container className={container}>
            <div>
                {
                    item.map((el, i) => <Post key={i}/>)
                }
            </div>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    }
}))
