import React, {useState} from 'react'
import {makeStyles, Paper, Typography, fade, Collapse} from "@material-ui/core";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
    root:{
      marginTop: theme.spacing(1),

    },
    addCard:{
     padding: theme.spacing(1,1,1,2),
        margin:theme.spacing(0,1,1,1),
        background:'#5AAC44',
        '&:hover' : {
         backgroundColor: fade('#5AAC44', 0,25),
        }
    }
}))
export default function InputContainer() {

    const [open,setOpen] = useState(false)
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen}/>
            </Collapse>
         <Collapse in={!open}>
             <Paper className={classes.addCard}
             elevation={0} onClick={() => setOpen(!open)}>
                 <Typography>
                     + Add A Card
                 </Typography>
             </Paper>
         </Collapse>

        </div>
    )
}