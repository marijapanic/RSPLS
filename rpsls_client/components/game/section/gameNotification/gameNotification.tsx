"use client"
import { UseGameContext } from "@/store/GameContext";
import { Box } from "@mui/material";

export default function GameHeader() {
    const gameContext = UseGameContext()
    return (
        <Box display="flex" alignItems="center" sx={{ color: "#fff", fontSize: "0.7em" }}>
            <h2 >
                {gameContext.state.result.label || 'Awaiting Play'}
            </h2>
        </Box>
    );
}