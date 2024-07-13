import { GameResult } from "@/models/choiceState";
import { IGameResponse } from "@/store/GameContext";

enum ResponseBuilder {
    Win = "win",
    Lose = "lose",
    Tie = "tie"
}

export default function getFinalResult(payload: GameResult): IGameResponse {
    const { results } = payload;

    if (results == ResponseBuilder.Tie) {
        return {
            judgement: 'It’s a tie.',
            computer: 0,
            user: 0,
        };
    }

    if (results == ResponseBuilder.Lose) {
        return {
            judgement: 'Computer wins…',
            computer: 1,
            user: 0,
        };
    }

    return {
        judgement: 'You win!!!',
        computer: 0,
        user: 1,
    };
};