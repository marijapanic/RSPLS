import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/heading/navLink';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('NavLink', () => {
    beforeEach(() => {
        (usePathname as jest.Mock).mockReturnValue('/');
    });

    test('renders the NavLink component with correct content', () => {
        render(<NavLink href="/">Home</NavLink>);

        const linkElement = screen.getByRole('link', { name: /Home/i });

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });

    test('applies active class when href matches current path', () => {
        (usePathname as jest.Mock).mockReturnValue('/');

        render(<NavLink href="/">Home</NavLink>);

        const linkElement = screen.getByRole('link', { name: /Home/i });

        expect(linkElement).toHaveClass('active');
    });

    test('does not apply active class when href does not match current path', () => {
        (usePathname as jest.Mock).mockReturnValue('/different-path');

        render(<NavLink href="/">Home</NavLink>);

        const linkElement = screen.getByRole('link', { name: /Home/i });

        expect(linkElement).not.toHaveClass('active');
    });
});
