import React, { useState, useEffect, createContext } from 'react';

import server from '../services/server';
import { HttpResponse, UserType } from '../utils/types';

export interface UserContextType {
	user: UserType;
	userContextError: string;

	signin(email: string, password: string): Promise<UserType>;
	signup(name: string, email: string, password: string, conf_password: string): Promise<UserType>;
	deleteAccount(): Promise<HttpResponse>;
	signout(): void;

	createUserContextError(err: any): void;
	clearUserContextError(): void;
}

const UserContext: React.Context<UserContextType | any> = createContext({});

export const UserProvider: React.FC = ({ children }) => {
	
	const [ user, setUser ] = useState<UserType | any>(null);
	const [ userContextError, setUserContextError ] = useState<string>('');

	useEffect(() => {
		(async () => {
			try {				
				const storagedUser = localStorage.getItem('@USER');
				
				if (storagedUser) {
					const formatedUser: UserType = JSON.parse(storagedUser);
					const resp = await server.post('/validate', { token: formatedUser.token });

					if (resp.data.valid) {
						saveUser(formatedUser);
					} else {
						signout();
					}
				}
			} catch (err) {
				createUserContextError(err);
			}
		})();
	}, []);

	const signin = async (email: string, password: string) => {
		try {
			const resp = await server.post('/signin', { email, password });
			saveUser(resp.data);
			return resp.data;
		} catch (err) {
			createUserContextError(err);
		}
	}

	const signup = async (name: string, email: string, password: string, conf_password: string) => {
		try {
			const resp = await server.post('/signup', { name, email, password, conf_password });
			saveUser(resp.data);
			return resp.data;
		} catch (err) {
			createUserContextError(err);
		}
	}

	const signout = () => {
		server.defaults.baseURL = 'http://localhost:4500/open-api';
		setUser(null);
		localStorage.removeItem('@USER');
	}

	const saveUser = (user: UserType) => {
		server.defaults.baseURL = 'http://localhost:4500/api';
		server.defaults.headers = { authorization: user.token };

		setUser(user);
		localStorage.setItem('@USER', JSON.stringify(user));
	}

	const deleteAccount = async () => {
		try {
			const resp = await server.delete(`/user/${user.id_user}`);
			signout();
			return resp.data;
		} catch (err) {
			createUserContextError(err);
		}
	}

	const createUserContextError = (err: any) => {
		if (typeof err == 'string') {
			setUserContextError(err);
		} else {
			if (err.response.data) {
				setUserContextError(err.response.data.message);
			} else if (err.message) {
				setUserContextError(err.message);
			} else {
				setUserContextError('Não foi possível identificar o problema com o processamento do site! Tente novamente.');
			}
		}
	}

	const clearUserContextError = () => setUserContextError('');

	return (
		<UserContext.Provider
			value={{ 
				user,
				userContextError,

				signin,
				signup,
				signout,
				deleteAccount,

				createUserContextError,
				clearUserContextError
			}}
		>
			{ children }
		</UserContext.Provider>
	);

}

export default UserContext;
