import ChoiceOption from "./choiceOption";
import styles from "./choiceGrid.module.css";
import { Stack } from "@mui/material";
import { ChoiceState } from "@/models/choiceState";

interface Props {
    choices: Array<ChoiceState>
}

export default function ChoicesGrid(props: Props) {
    const { choices } = props;
    return (
        <Stack direction="row" spacing={4}>
            {choices.map(choice =>
            (
                <ChoiceOption id={choice.id} key={choice.id} name={choice.name}></ChoiceOption>
                )
            )}
        </Stack>
    );
}