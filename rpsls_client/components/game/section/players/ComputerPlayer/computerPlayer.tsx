"use client"
import PlayerContainer from "../PlayerContainer";
import { UseGameContext } from "@/store/GameContext";

export default function ComputerPlayer() {
    const gameContext = UseGameContext();
    return (
        <PlayerContainer userChoice="Computer's choice">
            <p>{gameContext.state.decision.computer}</p>
        </PlayerContainer>
    );
}