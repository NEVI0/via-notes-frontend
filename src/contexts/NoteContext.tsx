import React, { useState,  createContext } from 'react';
import { NoteType, HttpResponse } from '../utils/types';

import server from '../services/server';

interface NoteProviderProps {
	initialNotes?: Array<NoteType>;
}

export interface NoteContextType {
	notesArray: Array<NoteType>;
	noteContextError: string;

	getNotes(
		id_user: number,
		id_status: string
	): Promise<Array<NoteType>>;
	createNote(
		id_user: number,
		id_status: number,
		description: string
	): Promise<HttpResponse>;
	updateNote(
		id_note: number,
		id_status: number,
		description: string
	): Promise<HttpResponse>;
	deleteNote(
		id_note: number
	): Promise<HttpResponse>;

	createNoteContextError(err: any): void;
	clearNoteContextError(): void;
}

const NoteContext: React.Context<NoteContextType | any> = createContext({});

export const NoteProvider: React.FC<NoteProviderProps> = ({ initialNotes, children }) => {
	
	const [ notesArray, setNotesArray ] = useState<Array<NoteType>>(initialNotes || []);
	const [ noteContextError, setNoteContextError ] = useState<string>('');

	const getNotes = async (id_user: number, id_status: string) => {
		try {
			
			let url = `/note/${id_user}?id_status=`;
			if (!id_status || id_status != 'none') url += id_status;

			const resp = await server.get(url);
			setNotesArray(resp.data.notes);

			return resp.data.notes;

		} catch (err) {
			createNoteContextError(err);
		}
	}

	const createNote = async (id_user: number, id_status: number, description: string) => {
		try {
			const resp = await server.post('/note', { id_user, id_status, description });
			return resp.data.message;
		} catch (err) {
			createNoteContextError(err);
		}
	}

	const updateNote = async (id_note: number, id_status: number, description: string) => {
		try {
			const resp = await server.put(`/note/${id_note}`, { id_status, description });
			return resp.data.message;
		} catch (err) {
			createNoteContextError(err);
		}
	}

	const deleteNote = async (id_note: number) => {
		try {
			const resp = await server.delete(`/note/${id_note}`);
			return resp.data.message;
		} catch (err) {
			createNoteContextError(err);
		}
	}

	const createNoteContextError = (err: any) => {
		if (typeof err == 'string') {
			setNoteContextError(err);
		} else {
			if (err.response.data) {
				setNoteContextError(err.response.data.message);
			} else if (err.message) {
				setNoteContextError(err.message);
			} else {
				setNoteContextError('Não foi possível identificar o problema com o processamento do site! Tente novamente.');
			}
		}
	}

	const clearNoteContextError = () => setNoteContextError('');

	return (
		<NoteContext.Provider
			value={{
				notesArray,
				noteContextError,

				getNotes,
				createNote,
				updateNote,
				deleteNote,

				createNoteContextError,
				clearNoteContextError
			}}
		>
			{ children }
		</NoteContext.Provider>
	);

}

export default NoteContext;
