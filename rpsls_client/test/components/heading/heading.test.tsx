import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';
import Heading from '@/components/heading/heading';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('Heading', () => {
    beforeEach(() => {
        (usePathname as jest.Mock).mockReturnValue('/');
    });

    test('renders the Heading component with correct content', () => {
        render(<Heading />);

        const logoLink = screen.getByRole('link', { name: /The bing bang theory/i });

        expect(logoLink).toBeInTheDocument();

        expect(logoLink).toHaveAttribute('href', '/');


        const playGameLink = screen.getByRole('link', { name: /Play a game/i });

        expect(playGameLink).toBeInTheDocument();

        expect(playGameLink).toHaveAttribute('href', '/game');


        const aboutGameLink = screen.getByRole('link', { name: /About the game/i });

        expect(aboutGameLink).toBeInTheDocument();

        expect(aboutGameLink).toHaveAttribute('href', '/game/info');
    });
});
