import React, { useState,  createContext } from 'react';
import { StatusType } from '../utils/types';

import server from '../services/server';

export interface StatusContextType {
	statusArray: Array<StatusType>;
	getStatus(): Promise<Array<StatusType>>;
}

const StatusContext: React.Context<StatusContextType | any> = createContext({});

export const StatusProvider: React.FC = ({ children }) => {
	
	const [ statusArray, setStatusArray ] = useState<Array<StatusType>>([]);

	const getStatus = async () => {
		try {
			const resp = await server.get(`/status`);
			setStatusArray(resp.data.status);
			return resp.data.status;
		} catch (err) {
			alert(err);
		}
	}

	return (
		<StatusContext.Provider value={{ statusArray, getStatus }}>
			{ children }
		</StatusContext.Provider>
	);

}

export default StatusContext;
