import React from 'react'
import {makeStyles, Paper} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root:{
        width:'200px',
        backgroundColor:'#EBECF0',
        margin: theme.spacing(1),
    },
}))
export default function Card({card}) {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Paper>{card.content}</Paper>
        </div>
    )
}