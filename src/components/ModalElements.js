import {makeStyles} from "@mui/styles";
import sound from '../Sound/ting.mp3'
import {
    FormLabel,
    Alert,
    Snackbar,
    RadioGroup,
    FormControlLabel,
    MenuItem,
    TextField,
    Radio,
    Button,
} from "@mui/material";
import {useState} from "react";

export const ModalElements = ({item, setOpen}) => {
    const [val, setVal] = useState("Public")
    const [radio, setRadio] = useState("My Friends")
    const [open, setSnackBar] = useState(false)
    const {form, btn, items} = useStyles()
    const setMenuItem = (Str) => {
        const c = console.log.bind()
        setVal(Str)
        c('menu', Str)
    }
    const setRadioItem = (Str) => {
        const c = console.log.bind()
        setRadio(Str)
        c('Radio', Str)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBar(false);
    };
    const create = () => {
        const c = console.log.bind()
        const audio = new Audio(sound)
        if (!audio) return
        else audio.play()
        c(audio)
        setSnackBar(true)
    }

    return (
        <>
            <form className={form} autoComplete="off">
                {
                    item.textField.map((el, i) => {
                        return <div key={i} className={items}>
                            <TextField
                                id={el.id}
                                variant={el.variant}
                                label={el.label}
                                size={el.size}
                                style={{width: '100%'}}
                                rows={el.rows}
                                defaultValue={el.defaultValue}
                                multiline={el.multiline}
                            />
                        </div>
                    })
                }

                <div className={items}>
                    <TextField select value={val}>
                        <MenuItem value="Public" onClick={() => setMenuItem('Public')}>Public</MenuItem>
                        <MenuItem value="Private" onClick={() => setMenuItem('Private')}>Private</MenuItem>
                        <MenuItem value="Unlisted" onClick={() => setMenuItem('Unlisted')}>Unlisted</MenuItem>
                    </TextField>
                </div>
                <div className={items}>
                    <FormLabel id="demo-radio-buttons-group-label">Who Can Comment
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={radio}
                        name="radio-buttons-group"
                    >
                        {
                            item.formControl.map((el, i) => (
                                <FormControlLabel
                                    key={i}
                                    onChange={() => setRadioItem(el.value)}
                                    control={<Radio/>}
                                    value={el.value}
                                    label={el.label}
                                />
                            ))
                        }
                    </RadioGroup>
                </div>
                <div className={items}>
                    <Button
                        className={btn}
                        onClick={create}
                        variant="outlined"
                        color="primary">Create</Button>
                    <Button
                        variant="outlined"
                        onClick={() => setOpen(false)}
                        color="secondary">Cancel</Button>
                </div>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message="This is a Success Message"
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            >
                <Alert severity="success">This is a success message!</Alert>
            </Snackbar>
        </>
    )
}
const useStyles = makeStyles((theme) => ({

    // [theme.breakpoints.down('sm')]
    items: {
        marginTop: theme.spacing(2)
    },
    btn: {
        marginRight: '10px !important'
    }
}))
