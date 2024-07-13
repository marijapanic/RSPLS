export interface Decision {
    computer: string;
    user: string;
};

export interface GameResults {
    computer: number;
    total: number;
    user: number;
}

export interface GameResult {
    label: string;
    computer: boolean;
    user: boolean;
}

export interface State {
    decision: Decision;
    games: GameResults;
    result: GameResult;
}