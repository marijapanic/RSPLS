"use client"
import PlayerContainer from "../PlayerContainer";
import { Suspense } from "react";
import LoadingOptions from "../Choice/loadingOptions";
import { UseGameContext } from "@/store/GameContext";
import setDecisionUser from "@/actions/decisionUser";
import ChoiceOptions from "./choiceOptions";

export function UserPlayer() {
    const gameContext = UseGameContext();

    async function onChoiceClick(id: number, name: string) {
        const finalResult = await setDecisionUser({
            decision: {
                id,
                name
            }
        });
        gameContext.updateState(finalResult);
    }
    
    return (
        <PlayerContainer userChoice={`${gameContext.state.decision.user === '' ? 'Make ' : ''} your choice`}>
            <>
                {gameContext.state.result.label === '' && gameContext.state.decision.user === '' &&
                    (
                        <Suspense fallback={<LoadingOptions></LoadingOptions>}>
                            <ChoiceOptions handleChoiceClick={onChoiceClick}/>
                        </Suspense>
                    )}
                {gameContext.state.decision.user !== '' && <p>{gameContext.state.decision.user}</p>}
            </>
        </PlayerContainer>
    );
}


