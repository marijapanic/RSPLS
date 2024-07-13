"use client"
import PlayerContainer from "../PlayerContainer";
import { Suspense } from "react";
import LoadingOptions from "../Choice/loadingOptions";
import ChoicesGrid from "../Choice/choiceGrid";
import { getPlayerChoices } from "@/agent/agent";
import { UseGameContext } from "@/store/GameContext";

export function UserPlayer() {
    const gameContext = UseGameContext()
    return (
        <PlayerContainer userChoice="`${state.decision.user === '' ? 'Make ' : ''}` your choice">
            <>
                {gameContext.state.result.label === '' && gameContext.state.decision.user === '' &&
                    (
                        <Suspense fallback={<LoadingOptions></LoadingOptions>}>
                            <ChoiceOptions></ChoiceOptions>
                        </Suspense>
                    )}
                {gameContext.state.decision.user !== '' && <p>{gameContext.state.decision.user}</p>}
            </>

        </PlayerContainer>
    );
}

async function ChoiceOptions() {
    const response = await getPlayerChoices();

    return <ChoicesGrid choices={response}></ChoicesGrid>
}