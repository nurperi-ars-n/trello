import React from "react";
import {CssBaseline, makeStyles, Paper, Typography} from "@material-ui/core";
import Title from "./Title";
import Card from "../../Card";
import InputContainer from "../input/inputContainer";

const useStyle = makeStyles((theme) => ({
    root:{
        width:'300px',
        backgroundColor:'#EBECF0',
        marginLeft: theme.spacing(1),
    },
}))
export default function List ({list}) {
    const classes = useStyle()
    return (
        <div>
           <Paper className={classes.root}>
               <CssBaseline/>
             <Title title={list.title}/>
               {
                   list.cards.map((card) =>{
                      return <Card key={card.id} card={card}/>
                   })
               }
            <InputContainer/>
           </Paper>
        </div>
    )
}