import React, { useState, useEffect, createContext } from 'react';

export interface AppContextType {
	isDarkMode: boolean;
	changeTheme(): void;
}

const AppContext: React.Context<AppContextType | any> = createContext({});

export const AppProvider: React.FC = ({ children }) => {
	
	const [ isDarkMode, setIsDarkMode ] = useState<boolean>(false);

	useEffect(() => {
		
		const storagedTheme = localStorage.getItem('@THEME');
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
			localStorage.setItem('@THEME', 'light');
		}

	}, []);

	const changeTheme = () => {

		const storagedTheme = localStorage.getItem('@THEME');
		const bodyEl = document.getElementById('body');

		if (storagedTheme) {
			if (storagedTheme == 'dark') {
				setIsDarkMode(false);
				localStorage.setItem('@THEME', 'light');
				bodyEl?.classList.replace('dark', 'light');
			} else {
				setIsDarkMode(true);
				localStorage.setItem('@THEME', 'dark');
				bodyEl?.classList.replace('light', 'dark');
			}
		} else {
			setIsDarkMode(false);
			localStorage.setItem('@THEME', 'light');
		}

	}

	return (
		<AppContext.Provider value={{ isDarkMode, changeTheme }}>
			{ children }
		</AppContext.Provider>
	);

}

export default AppContext;
