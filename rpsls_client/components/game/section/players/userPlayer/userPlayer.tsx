"use client"
import PlayerContainer from "../PlayerContainer";
import { UseGameContext } from "@/store/GameContext";
import setDecisionUser from "@/actions/decisionUser";
import { ChoiceState } from "@/models/choiceState";
import ChoicesGrid from "../Choice/choiceGrid";
interface Props {
    choices: Array<ChoiceState>
}

export function UserPlayer(props: Props) {
    const gameContext = UseGameContext();

    async function onChoiceClick(id: number, name: string) {
        const finalResult = await setDecisionUser({
            decision: {
                id,
                name
            }
        });

        gameContext.updateState(finalResult, {
            user: name,
            computer: props.choices[finalResult.computersChoice].name
        });
    }
    
    return (
        <PlayerContainer userChoice={`${gameContext.state.decision.user === '' ? 'Make y' : 'Y'}our choice`}>
            <>
                {gameContext.state.result.label === '' && gameContext.state.decision.user === '' &&
                    (
                        <ChoicesGrid choices={props.choices} handleChoiceClick={onChoiceClick}></ChoicesGrid>
                    )}
                {gameContext.state.decision.user !== '' && <p>{gameContext.state.decision.user}</p>}
            </>
        </PlayerContainer>
    );
}


