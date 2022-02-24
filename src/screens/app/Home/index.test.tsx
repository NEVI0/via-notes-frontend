import Home from '.';

import { NoteProvider } from '../../../contexts/NoteContext';
import { UserProvider } from '../../../contexts/UserContext';
import { StatusProvider } from '../../../contexts/StatusContext';

import { UserType, NoteType, StatusType } from '../../../utils/types';
import { render, screen, userEvent } from '../../../test';

const USER: UserType = {
	id_user: 1,
	name: 'Test User',
	email: 'test@user.com',
	created_at: new Date(),
	token: 'hdhifsdiuyhfisdbfbdsjf'
}

const STATUS: Array<StatusType> = [
	{
		id_status: 1,
		name: 'Importante'
	}
]

const NOTES: Array<NoteType> = [
	{
		id_note: 1,
		description: 'Note 1',
		id_user: 1,
		id_status: STATUS[0].id_status,
		status: STATUS[0].name,
		color: '#000',
		created_at: new Date()
	}
]

const HomeScreen = () => (
	<UserProvider initialUser={ USER }>
		<StatusProvider initialState={ STATUS }>
			<NoteProvider initialNotes={ NOTES }>
				<Home />
			</NoteProvider>
		</StatusProvider>
	</UserProvider>
);

describe('Home Screen', () => {

	test('Filter input should start filtering all', () => {
		render(<HomeScreen />);

		const filterInput = screen.getByTestId('filter-input');
		expect(filterInput).toHaveValue('none');
	});

	test('Should change filter input value when selected a diferent one', () => {
		render(<HomeScreen />);

		const filterInput = screen.getByTestId('filter-input');
		expect(filterInput).toHaveValue('none');

		userEvent.selectOptions(filterInput, STATUS[0].name);
		expect(filterInput).toHaveValue(STATUS[0].id_status.toString());
	});

	test('Should start with light theme', () => {
		render(<HomeScreen />);

		const homeContent = screen.getByTestId('home-content');
		expect(homeContent).not.toHaveStyle('background-color: #1c1c22');
	});

	test('Should show alert modal when user tries to delete account', () => {
		render(<HomeScreen />);

		const deleteAccountButton = screen.getByTestId('delete-account-button');
		userEvent.click(deleteAccountButton);

		const alertModal = screen.getByTestId('alert-modal');
		expect(alertModal).toBeInTheDocument();
	});

});
