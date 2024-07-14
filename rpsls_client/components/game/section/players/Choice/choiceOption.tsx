import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";

interface Props {
    id: number;
    name: string;
    handleChoiceClick: (id: number, name: string) => void
}

export default function ChoiceOption(props: Props) {
    return (
        <Tooltip title={`Choose ${props.name}`}>
            <IconButton onClick={() => {
                props.handleChoiceClick(props.id, props.name);
            }}>
                <Image src={`/assets/${props.name}.svg`} fill alt={`${props.name} choice`}></Image>
            </IconButton>
        </Tooltip>
    );
}