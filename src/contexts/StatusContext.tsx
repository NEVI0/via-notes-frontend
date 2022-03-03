import React, { useState,  createContext } from 'react';
import { StatusType } from '../utils/types';

import server from '../services/server';

export interface StatusContextType {
	statusArray: Array<StatusType>;
	statusContextError: string;

	getStatus(): Promise<Array<StatusType>>;
	
	createStatusContextError(err: any): void;
	clearStatusContextError(): void;
}

const StatusContext: React.Context<StatusContextType | any> = createContext({});

export const StatusProvider: React.FC = ({ children }) => {
	
	const [ statusArray, setStatusArray ] = useState<Array<StatusType>>([]);
	const [ statusContextError, setStatusContextError ] = useState<string>('');

	const getStatus = async () => {
		try {
			const resp = await server.get(`/status`);
			setStatusArray(resp.data.status);
			return resp.data.status;
		} catch (err) {
			console.log(err);
		}
	}

	const createStatusContextError = (err: any) => {
		if (typeof err == 'string') {
			setStatusContextError(err);
		} else {
			if (err.response.data) {
				setStatusContextError(err.response.data.message);
			} else if (err.message) {
				setStatusContextError(err.message);
			} else {
				setStatusContextError('Não foi possível identificar o problema com o processamento do site! Tente novamente.');
			}
		}
	}

	const clearStatusContextError = () => setStatusContextError('');

	return (
		<StatusContext.Provider
			value={{
				statusArray,
				statusContextError,

				getStatus,

				createStatusContextError,
				clearStatusContextError
			}}
		>
			{ children }
		</StatusContext.Provider>
	);

}

export default StatusContext;
