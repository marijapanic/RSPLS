import { ChoiceState, GameResult } from "@/models/choiceState";

const DOMAIN = process.env.CHOICES_DOMAIN ? process.env.CHOICES_DOMAIN : process.env.NEXT_PUBLIC_CHOICES_DOMAIN;

export async function getPlayerChoices(): Promise<Array<ChoiceState>> {
    try {
        const optionsResponse = await fetch(`${DOMAIN}/api/choices`);
        
        return await optionsResponse.json();
    } catch (error) {
        console.warn(error);
        return [];
    }
}

export async function getRandomChoice(): Promise<ChoiceState> {
    const optionsResponse = await fetch(`${DOMAIN}/api/choice`);

    return await optionsResponse.json();
}

export async function getGameResult(userDecision: number): Promise<GameResult> {
    const optionsResponse = await fetch(`${DOMAIN}/api/play`, {
        method: 'POST',
        body: JSON.stringify({
            player: userDecision
        })
    });

    return await optionsResponse.json();
}