"use client"

import { State } from "@/models/gameState";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { createContext } from "react";

export const defaultState: State = {
    decision: {
        computer: '',
        user: '',
    },
    games: {
        computer: 0,
        user: 0,
        total: 0,
    },
    result: {
        computer: false,
        user: false,
        label: '',
    }
};

export interface IGameContext {
    state: State,
    setState: Dispatch<SetStateAction<State>>,
    clearGame: () => void,
    clearAll: () => void,
    updateState: (result: IGameResponse) => void
}

export interface IGameResponse {
    judgement: string,
    computer: number,
    user: number,
}

export const GameContext = createContext<IGameContext>({
    state: defaultState,
    setState: () => { },
    clearGame: () => { },
    clearAll: () => { },
    updateState: (result: IGameResponse) => {}
});

export function GameContextProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = React.useState<State>(defaultState);

    function clearGame() {
        setState((prevState: State) => ({
            ...prevState,
            decision: {
                ...defaultState.decision,
            },
            result: {
                ...defaultState.result,
            },
        }));
    }

    function clearAll() {
        setState(defaultState);
    }

    function updateState(result: IGameResponse)
    {
        setState((prevState: State) => ({
            ...prevState,
            decision: {
                ...prevState.decision,
                computer: "todo",
                user: "todo",
            },
            games: {
                total: prevState.games.total + 1,
                computer: prevState.games.computer + result.computer,
                user: prevState.games.user + result.user,
            },
            result: {
                label: result.judgement,
                computer: result.computer == 1,
                user: result.user == 1,
            },
        }));
    }
    return (<GameContext.Provider value={{
        state,
        setState,
        clearGame,
        clearAll,
        updateState
    }}>{children}</GameContext.Provider>)
}

export function UseGameContext() {
    return useContext(GameContext);
}