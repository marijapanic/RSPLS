"use client"
import { Typography } from "@mui/material";
import PlayerContainer from "../PlayerContainer";
import { UseGameContext } from "@/store/GameContext";

export default function ComputerPlayer() {
    const gameContext = UseGameContext();
    return (
        <PlayerContainer userChoice="Computer's choice">
            <Typography>{gameContext.state.decision.computer}</Typography>
        </PlayerContainer>
    );
}