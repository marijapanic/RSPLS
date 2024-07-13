"use client"
import { UseGameContext } from "@/store/GameContext";
import { Stack } from "@mui/material";

export default function GameResults()
{
    const gameContext = UseGameContext();
    return (
        <Stack direction="row" maxWidth="small" 
        sx= {{borderWidth: "1px",
        borderRadius: "0.5em",
        borderStyle: "solid",
        justifyContent: "center",
        borderColor: "#fff",
        minHeight: "120px",
        p: "1em"
        }}>
            <Stack p="4">
                <h2>Computer</h2>
                <p>{gameContext.state.games.computer}</p>
            </Stack>
            <Stack p="4">
                <h2>Games:</h2>
                <p>{gameContext.state.games.total}</p>
            </Stack>
            <Stack p="4">
                <h2>User:</h2>
                <p>{gameContext.state.games.user}</p>
            </Stack>
        </Stack>
    );
}