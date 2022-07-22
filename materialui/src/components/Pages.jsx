import React from "react";
import { Button, ButtonGroup, Typography, makeStyles, Container, TextField } from "@material-ui/core";
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: "violet"
    }
});

function Pages() {
    const classes = useStyles();
    return(
        <div>
            <Typography 
             variant="h1"
             color="primary"
             align="center"
            >
                Create a New Note
            </Typography>
            <Typography 
             color="secondary"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis saepe alias deleniti, aliquam eius inventore labore voluptatem cupiditate dolorem. Ut dicta assumenda veritatis tempore optio inventore quod, libero culpa.
            </Typography>

            <form>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                />
            </form>

            <Button color="primary" type="Submit" variant="contained">Submit</Button>
            <ButtonGroup color="primary" variant="contained">
                <Button className={classes.btn}>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
                <Button>Five</Button>
            </ButtonGroup>
            <PetsIcon />
            <Button className={classes.btn}>One</Button>

            <Container>

            </Container>
        </div>
    )
}

export default Pages;