import React, { useState,  createContext } from 'react';
import { NoteType, HttpResponse } from '../utils/types';

import server from '../services/server';

export interface NoteContextType {
	notesArray: Array<NoteType>;

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
}

const NoteContext: React.Context<NoteContextType | any> = createContext({});

export const NoteProvider: React.FC = ({ children }) => {
	
	const [ notesArray, setNotesArray ] = useState<Array<NoteType>>([]);

	const getNotes = async (id_user: number, id_status: string) => {
		try {
			
			let url = `/note/${id_user}?id_status=`;
			if (id_status != 'none') url += id_status;

			const resp = await server.get(url);
			setNotesArray(resp.data.notes);

			return resp.data.notes;

		} catch (err) {
			alert(err);
		}
	}

	const createNote = async (id_user: number, id_status: number, description: string) => {
		try {
			const resp = await server.post('/note', { id_user, id_status, description });
			return resp.data.message;
		} catch (err) {
			alert(err);
		}
	}

	const updateNote = async (id_note: number, id_status: number, description: string) => {
		try {
			const resp = await server.put(`/note/${id_note}`, { id_status, description });
			return resp.data.message;
		} catch (err) {
			alert(err);
		}
	}

	const deleteNote = async (id_note: number) => {
		try {
			const resp = await server.delete(`/note/${id_note}`);
			return resp.data.message;
		} catch (err) {
			alert(err);
		}
	}

	return (
		<NoteContext.Provider
			value={{
				notesArray,

				getNotes,
				createNote,
				updateNote,
				deleteNote
			}}
		>
			{ children }
		</NoteContext.Provider>
	);

}

export default NoteContext;
