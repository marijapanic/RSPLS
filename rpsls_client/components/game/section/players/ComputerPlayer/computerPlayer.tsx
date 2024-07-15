"use client"
import { Typography } from "@mui/material";
import PlayerContainer from "../playerContainer";
import { UseGameContext } from "@/store/gameContext";

export default function ComputerPlayer() {
    const gameContext = UseGameContext();
    return (
        <PlayerContainer userChoice="Computer's choice">
            <Typography>{gameContext.state.decision.computer}</Typography>
        </PlayerContainer>
    );
}