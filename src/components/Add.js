import {makeStyles} from "@mui/styles";
import {Container, Fab, Modal, TextField, Tooltip} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";
import {useState} from "react";
import {ModalElements} from "./ModalElements";

export const Add = () => {
    const [elemArr, setArr] = useState([

        {
            textField: [
                {
                    id: "standard-basic",
                    variant: "standard",
                    label: "Title",
                    style: 'width: 100%',
                    size: "small",
                },
                {
                    id: "outlined-multiline-static",
                    label: "Describe yourself",
                    multiline: true,
                    rows: 4,
                    style: 'width: 100%',
                    defaultValue: "Please Write"
                },
            ],
            formControl: [
                {
                    value: 'EveryBody',
                    label: 'EveryBody'
                },
                {
                    value: 'My Friends',
                    label: 'My Friends'
                },
                {
                    value: 'Nobody',
                    label: 'Nobody'
                },
                {
                    value: 'Custom (Premium)',
                    label: 'Custom (Premium)'
                },

            ]

        }
    ])
    const {fab, container} = useStyles()
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color='primary' className={fab}>
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={container}>
                    {
                        elemArr.map((item, i) => (
                            <ModalElements
                                item={item}
                                key={i}
                                setOpen={item => setOpen(item)}
                            />)
                        )
                    }
                </Container>
            </Modal>
        </>
    )
}
const useStyles = makeStyles((theme) => ({

    // [theme.breakpoints.down('sm')]
    fab: {
        position: "fixed !important",
        bottom: 20,
        right: 20,
    },
    container: {
        position: 'absolute',
        top: 0,
        backgroundColor: '#eee',
        bottom: 0,
        left: 0,
        right: 0,
        width: "500px !important",
        height: 600,
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            borderRadius: 20,
        },
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            height: '100vh',
        }

    }
}))
