"use client"
import { ChoiceState } from "@/models/choiceState";
import { useState } from "react";
import { Alert, Button, Stack } from "@mui/material";
import { getRandomChoice } from "@/agent/agent";
import ChoiceOption from "./choiceOption";


export function RandomChoice() {
    const [error, setError] = useState<boolean>(false);
    const [randomChoice, setRandomChoice] = useState<ChoiceState | null>(null)

    async function handleGenerateRandomChoice() {
        try {
            const randomChoice = await getRandomChoice();

            setRandomChoice(randomChoice);
        } catch (error) {
            setError(true)
        }
    }

    function onChoiceClick(id: number, name: string) {

    }

    return (
        <Stack direction="row" display="flex" gap="1em">
            {error && <Alert
                sx={{
                    position: "absolute",
                    bottom: "1em",
                    right: "1em"
                }} variant="filled" severity="error"
                onClose={() => { setError(false) }}
            >Something went wrong</Alert>}
            <Button color="warning" onClick={handleGenerateRandomChoice}>
                Generate choice
            </Button>

            {randomChoice && (
                <ChoiceOption id={randomChoice.id} name={randomChoice.name} handleChoiceClick={() => { }}></ChoiceOption>
            )}
        </Stack>
    );
}