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
	color: string;
	created_at: Date;
}

export interface UserType {
	id_user: number;
	name: string;
	email: string;
	token: string;
	created_at: Date;
}

export interface HttpResponse {
	message: string;
}
