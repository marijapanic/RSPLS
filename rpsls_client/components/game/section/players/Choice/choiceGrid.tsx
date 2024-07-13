import ChoiceOption from "./choiceOption";
import { Stack } from "@mui/material";
import { ChoiceState } from "@/models/choiceState";

interface Props {
    choices: Array<ChoiceState>,
    handleChoiceClick: (id: number, name: string) => {}
}

export default function ChoicesGrid(props: Props) {
    const { choices, handleChoiceClick } = props;
    return (
        <Stack direction="row" spacing={4}>
            {choices.map(choice =>
            (
                <ChoiceOption id={choice.id} key={choice.id} name={choice.name} handleChoiceClick={handleChoiceClick}></ChoiceOption>
                )
            )}
        </Stack>
    );
}