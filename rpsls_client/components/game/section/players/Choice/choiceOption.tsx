"use client"
import setDecisionUser from "@/actions/decisionUser";
import { UseGameContext } from "@/store/GameContext";
import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";

interface Props {
    id: number;
    name: string;
}

export default function ChoiceOption(props: Props) {
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
        <Tooltip title={`Choose ${props.name}`}>
            <IconButton onClick={() => {
                // onChoiceClick(props.id, props.name);
            }}>
                <Image src={`/assets/${props.name}.svg`} fill alt={`${props.name} choice`}></Image>
            </IconButton>
        </Tooltip>
    );
}