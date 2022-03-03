import Home from '.';
import { render, screen, userEvent } from '../../../test';

describe('Home Screen', () => {

	test('Filter input should start filtering all', () => {
		render(<Home />);

		const filterInput = screen.getByTestId('filter-input');
		expect(filterInput).toHaveValue('none');
	});

	test('Should start with light theme', () => {
		render(<Home />);

		const homeContent = screen.getByTestId('home-content');
		expect(homeContent).not.toHaveStyle('background-color: #1c1c22');
	});

	test('Should show alert modal when user tries to delete account', () => {
		render(<Home />);

		const deleteAccountButton = screen.getByTestId('delete-account-button');
		userEvent.click(deleteAccountButton);

		const alertModalText = 'Tem certeza que deseja deletar a sua conta? Suas anotações seram deletadas também.';
		const alertModal = screen.getByText(alertModalText);
		expect(alertModal).toBeInTheDocument();
	});

});
