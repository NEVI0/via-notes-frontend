import Signin from '.';
import { render, screen, userEvent } from '../../../test';

import { RouteComponentProps } from 'react-router-dom';

const SCREEN_PROPS = {} as RouteComponentProps;

describe('Signin Screen', () => {

	test('Should start inputs with no value', () => {
		render(<Signin { ...SCREEN_PROPS } />);

		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		expect(emailInput).toHaveTextContent('');
		expect(passwordInput).toHaveTextContent('');
	});

	test('Should show alert modal when inputs are empty', () => {
		render(<Signin { ...SCREEN_PROPS } />);

		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');

		expect(emailInput).toHaveTextContent('');
		expect(passwordInput).toHaveTextContent('');

		const signinButton = screen.getByTestId('signin-button');
		userEvent.click(signinButton);
		
		const alertModal = screen.getByTestId('alert-modal');
		expect(alertModal).toBeInTheDocument();
	});

});
