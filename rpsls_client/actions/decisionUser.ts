import { getGameResult } from '@/agent/agent';
import { GameResult } from '@/models/choiceState';
import { useEffect } from 'react';
import getFinalResult from './result';
import { State } from '@/models/gameState';

interface Payload {
    decision: {
        id: number,
        name: string
    };
}

export default async function setDecisionUser(payload: Payload) {
    const { decision } = payload;
    const result: GameResult = await getGameResult(decision.id)

    return getFinalResult(result);
};