import { ChoiceState, GameResult } from "@/models/choiceState";

export async function getPlayerChoices(): Promise<Array<ChoiceState>> {
    try {
        const optionsResponse = await fetch(`${process.env.NEXT_PUBLIC_CHOICES_DOMAIN}/api/choices`);

        return await optionsResponse.json();
    } catch (error) {
        console.warn(error);
        return [];
    }
}

export async function getGameResult(userDecision: number): Promise<GameResult> {
    try {
        const optionsResponse = await fetch(`${process.env.NEXT_PUBLIC_CHOICES_DOMAIN}/api/play`, {
            method: 'POST',
            body: JSON.stringify({
                player: userDecision
            })
        });

        return await optionsResponse.json();
    } catch (error) {
        console.warn(error);
        throw error;
    }
}