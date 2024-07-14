"use client"
import PlayerContainer from "../PlayerContainer";
import { UseGameContext } from "@/store/GameContext";
import setDecisionUser from "@/actions/decisionUser";
import { ChoiceState } from "@/models/choiceState";
import ChoicesGrid from "../Choice/choiceGrid";
import { useState } from "react";
import { Alert, Typography } from "@mui/material";

interface Props {
    choices: Array<ChoiceState>
}

export function UserPlayer(props: Props) {
    const [error, setError] = useState<boolean>(false);
    const gameContext = UseGameContext();

    async function onChoiceClick(id: number, name: string) {

        try {
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
        catch {
            setError(true);
        }
    }

    return (
        <PlayerContainer userChoice={`${gameContext.state.decision.user === '' ? 'Make y' : 'Y'}our choice`}>
            <>
                {error && <Alert
                    sx={{
                        position: "absolute",
                        bottom: "1em",
                        right: "1em"
                    }} variant="filled" severity="error"
                    onClose={() => { setError(false) }}
                >Something went wrong</Alert>}
                {gameContext.state.result.label === '' && gameContext.state.decision.user === '' &&
                    (
                        <ChoicesGrid choices={props.choices} handleChoiceClick={onChoiceClick}></ChoicesGrid>
                    )}
                {gameContext.state.decision.user !== '' && <Typography>{gameContext.state.decision.user}</Typography>}
            </>
        </PlayerContainer>
    );
}


