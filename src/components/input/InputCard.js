import React from 'react'
import {makeStyles, Paper,InputBase,Button,IconButton} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'

const useStyle = makeStyles((theme) => ({
    card:{
     paddingBotom: theme.spacing(4),
        margin:theme.spacing(0,1,1,1),
        padding:theme.spacing(1,1,1,0),
    },
    input:{
    margin:theme.spacing(1),
 },
 btnConfirm:{
 background:'green',
 color:'#fff'
 },
 confirm:{
 margin:theme.spacing(0,1,1,1),
 }
}))
export default function InputCard({setOpen}) {
const classes = useStyle()
    return (
        <div>
            <div>
                <Paper className = {classes.card}>
                    <InputBase multiline fullWidth
                     inputProps={{className:classes.input}}
                      placeholder='Enter a title of this card..'
                      onBlur={()=> setOpen(false)}/>
                </Paper>
            </div>
            <div className = {classes.confirm}>
                <Button className = {classes.btnConfirm} onClick={() => setOpen(false)}>Add Card</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon/>
                </IconButton>
            </div>

        </div>
    )
}