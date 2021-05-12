export interface StatusType {
	id_status: number;
	name: string;
}

export interface NoteType {
	id_note: number;
	description: string;
	id_user: number;
	id_status: number;
	status: string;
	created_at: Date;
}

export interface UserType {
	id: number;
	created_at: Date;
}

export interface HttpResponse {
	message: string;
}
