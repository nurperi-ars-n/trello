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
            fontSize:'1,2rem',
            fontWeight:'bold'
        }
    },
    editableTitle:{
      flexGrow:1,
        fontSize:'1,2rem',
        fontWeight:'bold'
    }
}))
export default function Title ({title}) {
    const [open,setOpen] = useState(false)
    const classes = useStyle()
    return (
        <div>
            {
                open ? (
                    <div>
                        <InputBase autoFocus
                                   inputProps={{className:classes.input,}}
                                   fullWidth
                                   onBlur ={() => setOpen(!open)}
                                   value={title}/>
                    </div>
                )
                    :(
                        <div className={classes.editableTitleContainer}>
                            <Typography className={classes.editableTitle} onClick={() => setOpen(!open)}>{title}</Typography>
                       <MoreHorizIcon/>
                        </div>
                    )
            }
        </div>
    )
}