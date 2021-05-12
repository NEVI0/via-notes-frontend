import React, { useState, useEffect, createContext } from 'react';
import { UserType } from '../utils/types';

export interface AppContextType {
	user: UserType;
	isDarkMode: boolean;
	getUser(): void;
	changeTheme(): void;
}

const AppContext: React.Context<AppContextType | any> = createContext({});

export const AppProvider: React.FC = ({ children }) => {
	
	const [ user, setUser ] = useState<UserType>();
	const [ isDarkMode, setIsDarkMode ] = useState<boolean>(false);

	useEffect(() => {
		
		getUser();

		const storagedTheme = localStorage.getItem('@theme');
		const bodyEl = document.getElementById('body');

		if (storagedTheme) {
			if (storagedTheme == 'dark') {
				setIsDarkMode(true);
				bodyEl?.classList.replace('light', 'dark');
			} else {
				setIsDarkMode(false);
				bodyEl?.classList.replace('dark', 'light');
			}
		} else {
			setIsDarkMode(true);
			localStorage.setItem('@theme', 'light');
		}

	}, []);

	const getUser = () => {
		const storagedUser: any = localStorage.getItem('@user');

		if (!storagedUser) {
			
			const id = Math.floor(Math.random() * 10000);
			const created_at = new Date();

			localStorage.setItem('@user', JSON.stringify({ id, created_at }));
			setUser({ id, created_at });

		} else {
			setUser(JSON.parse(storagedUser));
		}
	}

	const changeTheme = () => {

		const storagedTheme = localStorage.getItem('@theme');
		const bodyEl = document.getElementById('body');

		if (storagedTheme) {
			if (storagedTheme == 'dark') {
				setIsDarkMode(false);
				localStorage.setItem('@theme', 'light');
				bodyEl?.classList.replace('dark', 'light');
			} else {
				setIsDarkMode(true);
				localStorage.setItem('@theme', 'dark');
				bodyEl?.classList.replace('light', 'dark');
			}
		} else {
			setIsDarkMode(false);
			localStorage.setItem('@theme', 'light');
		}

	}

	return (
		<AppContext.Provider value={{ user, isDarkMode, getUser, changeTheme }}>
			{ children }
		</AppContext.Provider>
	);

}

export default AppContext;
