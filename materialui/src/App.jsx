import React from "react";
import Pages from "./components/Pages";
import Notes from "./components/Notes";
import { Route, Routes } from "react-router-dom";
import {createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: "#C7D36F",
            light: "#FCF9C6",
            dark: "#9EB23B"
        },
        secondary: {
            main: "#BABD42",
            light: "#EFD345",
            dark: "#82954B"
        }
    }
});

function App() {
    return(
        <ThemeProvider theme={theme}>
            <Routes>
            <Route path='/' element={<Pages />}></Route>
            <Route path="/create" element={<Notes />}></Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App;