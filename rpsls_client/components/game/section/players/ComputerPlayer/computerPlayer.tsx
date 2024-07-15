"use client"
import { Typography } from "@mui/material";
import PlayerContainer from "../PlayerContainer";
import { UseGameContext } from "@/store/gameContext";

export default function ComputerPlayer() {
    const gameContext = UseGameContext();
    return (
        <PlayerContainer userChoice="Computer's choice">
            <Typography>{gameContext.state.decision.computer}</Typography>
        </PlayerContainer>
    );
}