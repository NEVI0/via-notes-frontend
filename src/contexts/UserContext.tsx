import React, { useState, useEffect, createContext } from 'react';
import { UserType } from '../utils/types';

export interface UserContextType {
	user: UserType;
}

const UserContext: React.Context<UserContextType | any> = createContext({});

export const UserProvider: React.FC = ({ children }) => {
	
	const [ user, setUser ] = useState<UserType | any>(null);

	useEffect(() => {

	}, []);

	

	return (
		<UserContext.Provider value={{ user }}>
			{ children }
		</UserContext.Provider>
	);

}

export default UserContext;
