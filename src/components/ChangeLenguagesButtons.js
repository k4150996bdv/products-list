import React from "react"
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import i18n from "../i18n";




const ChangeLenguagesButtons = () => {

    return (
        <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
    >
        <Button
        type="submit"
        variant="contained"
        color="primary" 
        onClick={() => {
            i18n.changeLanguage("en");
        }}>
            En
        </Button>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
            i18n.changeLanguage("ua");
        }}>
            Ua
             </Button>
    </Grid>
    )
   
}

export default ChangeLenguagesButtons