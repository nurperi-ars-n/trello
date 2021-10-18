import React, {useState} from "react";
import {InputBase, makeStyles, Typography} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
const useStyle = makeStyles((theme) => ({
    editableTitleContainer:{
            margin:theme.spacing(1),
            display: 'flex',

    },
    input:{
         margin:theme.spacing(1),
        '&:focus':{
             background:'#ddd',
        }
    },
    editableTitle:{
      flexGrow:1
    }
}))
export default function Title () {
    const [open,setOpen] = useState(false)
    const classes = useStyle()
    return (
        <div>
            {
                open ? (
                    <div>
                        <InputBase inputProps={{className:classes.input,}} fullWidth onBlur ={() => setOpen(!open)}  value='Todo'/>
                    </div>
                )
                    :(
                        <div className={classes.editableTitleContainer}>
                            <Typography className={classes.editableTitle} onClick={() => setOpen(!open)}>Todo</Typography>
                       <MoreHorizIcon/>
                        </div>
                    )
            }
        </div>
    )
}