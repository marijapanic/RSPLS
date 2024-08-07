"use client"
import { UseGameContext } from "@/store/gameContext";
import { Box } from "@mui/material";

export default function GameResultHeader() {
    const gameContext = UseGameContext()
    return (
        <Box display="flex" alignItems="center" sx={{ color: "#fff", fontSize: "0.7em" }}>
            <h2 >
                {gameContext.state.result.label || 'Awaiting Play'}
            </h2>
        </Box>
    );
}