import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameControlsResets from '@/components/game/controls/gameControlsResets';
import { UseGameContext } from '@/store/GameContext';

jest.mock('../../../store/GameContext');

const mockClearGame = jest.fn();
const mockClearAll = jest.fn();

const mockContextValue = {
    state: {
        result: { label: '' },
        games: { total: 0 },
    },
    clearGame: mockClearGame,
    clearAll: mockClearAll,
};

describe('GameControlsResets', () => {
    beforeEach(() => {
        (UseGameContext as jest.Mock).mockReturnValue(mockContextValue);
    });

    it('renders correctly with default state', () => {
        render(<GameControlsResets />);

        expect(screen.queryByLabelText('clear game')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('clear all')).not.toBeInTheDocument();
    });

    it('renders buttons when there is a result or games', () => {
        mockContextValue.state.result.label = 'Game Over';
        mockContextValue.state.games.total = 1;

        render(<GameControlsResets />);

        expect(screen.getByLabelText('clear game')).toBeInTheDocument();
        expect(screen.getByLabelText('clear all')).toBeInTheDocument();
    });

    it('calls clearGame when New Game button is clicked', () => {
        mockContextValue.state.result.label = 'Game Over';
        mockContextValue.state.games.total = 1;

        render(<GameControlsResets />);

        fireEvent.click(screen.getByLabelText('clear game'));
        expect(mockClearGame).toHaveBeenCalled();
    });

    it('calls clearAll when Clear All button is clicked', () => {
        mockContextValue.state.result.label = 'Game Over';
        mockContextValue.state.games.total = 1;

        render(<GameControlsResets />);
        fireEvent.click(screen.getByLabelText('clear all'));
        expect(mockClearAll).toHaveBeenCalled();
    });
});
