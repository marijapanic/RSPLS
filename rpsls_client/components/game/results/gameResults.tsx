"use client"
import { UseGameContext } from "@/store/gameContext";
import { Stack, Typography } from "@mui/material";
import styles from "./gameResults.module.css"

export default function GameResults() {
    const gameContext = UseGameContext();
    return (
        <Stack direction="row" width="fit-content"
            sx={{
                borderWidth: "1px",
                borderRadius: "0.5em",
                borderStyle: "solid",
                justifyContent: "center",
                borderColor: "#fff",
                p: "1em",
                maxHeight: "5em",
                alignItems: "center"
            }}>
            <Stack p="0 1em" display="flex" alignItems="center" className={styles.section}>
                <h2>Computer</h2>
                <Typography>{gameContext.state.games.computer}</Typography>
            </Stack>
            <Stack p="0 1em" display="flex" alignItems="center" className={styles.section}>
                <h2>Games:</h2>
                <Typography>{gameContext.state.games.total}</Typography>
            </Stack>
            <Stack p="0 1em" display="flex" alignItems="center" className={styles.section}>
                <h2>User:</h2>
                <Typography>{gameContext.state.games.user}</Typography>
            </Stack>
        </Stack>
    );
}