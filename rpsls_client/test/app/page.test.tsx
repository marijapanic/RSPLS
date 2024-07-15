import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';

describe("Home page", () => {
  test('renders the Home component with correct content', () => {
    render(<Home />);

    const headerElement = screen.getByText(/Welcome to the RPSLS game/i);
    expect(headerElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Rock, Paper, Scissors, Lizard, Spock is a game of chance/i);
    expect(descriptionElement).toBeInTheDocument();

    const quoteElement = screen.getByText(/"Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors./i);
    expect(quoteElement).toBeInTheDocument();
  });
});
