import { GameResult } from "@/models/choiceState";
import { IGameResponse } from "@/store/gameContext";

enum ResponseBuilder {
    Win = "win",
    Lose = "lose",
    Tie = "tie"
}

export default function getFinalResult(payload: GameResult): IGameResponse {
    const { results, computer } = payload;

    if (results == ResponseBuilder.Tie) {
        return {
            judgement: 'It’s a tie.',
            computer: 0,
            user: 0,
            computersChoice: computer
        };
    }

    if (results == ResponseBuilder.Lose) {
        return {
            judgement: 'Computer wins…',
            computer: 1,
            user: 0,
            computersChoice: computer
        };
    }

    return {
        judgement: 'You win!!!',
        computer: 0,
        user: 1,
        computersChoice: computer
    };
};
