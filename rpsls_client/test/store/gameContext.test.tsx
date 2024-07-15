import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameContextProvider, UseGameContext, defaultState } from '@/store/GameContext';;

const TestComponent = () => {
    const { state, clearGame, clearAll, updateState } = UseGameContext();

    return (
        <div>
            <div data-testid="state">{JSON.stringify(state)}</div>
            <button onClick={clearGame} data-testid="clear-game">Clear Game</button>
            <button onClick={clearAll} data-testid="clear-all">Clear All</button>
            <button
                onClick={() => updateState(
                    { judgement: 'win', computer: 0, user: 1, computersChoice: 2 },
                    { computer: 'rock', user: 'paper' }
                )}
                data-testid="update-state"
            >
                Update State
            </button>
        </div>
    );
};

describe('GameContextProvider', () => {
    it('provides the default state', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const stateDiv = getByTestId('state');

        expect(stateDiv).toHaveTextContent(JSON.stringify(defaultState));
    });

    it('clearGame resets decision and result', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const clearGameButton = getByTestId('clear-game');

        act(() => {
            fireEvent.click(clearGameButton);
        });

        const stateDiv = getByTestId('state');
        expect(stateDiv).toHaveTextContent(JSON.stringify({
            ...defaultState,
            games: defaultState.games,
        }));
    });

    it('clearAll resets the entire state', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const clearAllButton = getByTestId('clear-all');

        act(() => {
            fireEvent.click(clearAllButton);
        });

        const stateDiv = getByTestId('state');
        expect(stateDiv).toHaveTextContent(JSON.stringify(defaultState));
    });

    it('updateState updates the state correctly', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const updateStateButton = getByTestId('update-state');

        act(() => {
            fireEvent.click(updateStateButton);
        });

        const stateDiv = getByTestId('state');
        expect(stateDiv).toHaveTextContent(JSON.stringify({
            ...defaultState,
            decision: {
                computer: 'rock',
                user: 'paper',
            },
            games: {
                total: 1,
                computer: 0,
                user: 1,
            },
            result: {
                label: 'win',
                computer: false,
                user: true,
            }
        }));
    });

    it('handles multiple state updates correctly', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const updateStateButton = getByTestId('update-state');

        act(() => {
            fireEvent.click(updateStateButton);
        });

        act(() => {
            fireEvent.click(updateStateButton);
        });

        const stateDiv = getByTestId('state');
        expect(stateDiv).toHaveTextContent(JSON.stringify({
            ...defaultState,
            decision: {
                computer: 'rock',
                user: 'paper',
            },
            games: {
                total: 2,
                computer: 0,
                user: 2,
            },
            result: {
                label: 'win',
                computer: false,
                user: true,
            }
        }));
    });

    it('resets state correctly after clearGame and updateState', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const clearGameButton = getByTestId('clear-game');
        const updateStateButton = getByTestId('update-state');

        act(() => {
            fireEvent.click(updateStateButton);
        });

        act(() => {
            fireEvent.click(clearGameButton);
        });

        const stateDiv = getByTestId('state');
        expect(stateDiv).toHaveTextContent(JSON.stringify({
            ...defaultState,
            games: {
                total: 1,
                computer: 0,
                user: 1,
            },
        }));
    });

    it('resets state correctly after clearAll and updateState', () => {
        const { getByTestId } = render(
            <GameContextProvider>
                <TestComponent />
            </GameContextProvider>
        );

        const clearAllButton = getByTestId('clear-all');
        const updateStateButton = getByTestId('update-state');

        act(() => {
            fireEvent.click(updateStateButton);
        });

        act(() => {
            fireEvent.click(clearAllButton);
        });

        const stateDiv = getByTestId('state');
        expect(stateDiv).toHaveTextContent(JSON.stringify(defaultState));
    });
});
