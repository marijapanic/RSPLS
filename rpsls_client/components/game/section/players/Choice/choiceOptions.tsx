import ChoicesGrid from "./choiceGrid";
import { usePlayerChoices } from "@/hooks/usePlayerChoices";

interface Props {
    handleChoiceClick: (id: number, name: string) => {};
}

export default function ChoiceOptions(props: Props) {
    const { choices, error, isLoading } = usePlayerChoices();

    if (error) {
        return <div>Error loading choices</div>;
    }

    if (isLoading) {
        throw new Promise(() => { }); // Keep suspending until choices are available
    }

    return <ChoicesGrid choices={choices} handleChoiceClick={props.handleChoiceClick}></ChoicesGrid>;
}
