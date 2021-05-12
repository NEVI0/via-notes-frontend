import React from 'react';
import { FiTrash2, FiEdit2, FiCalendar, FiBookmark } from 'react-icons/fi';

import { NoteType } from '../../utils/types';
import { formatDate } from '../../utils/functions';

import './styles.css';

interface NoteItem {
	note: NoteType;
	onEdit(): void;
	onDelete(): void;
}

const NoteItem: React.FC<NoteItem> = ({ note, onEdit, onDelete }) => {

	return (
		<div className={`NoteItem ${note.status.replace(' ', '-')}`}>
			<div className="info">
				<p>{ note.description }</p>
				
				<div className="rows">
					<div className="row">
						<FiBookmark size={ 18 } className="icon" />
						<p>{ note.status }</p>
					</div>
					<div className="row">
						<FiCalendar size={ 18 } className="icon" />
						<p>{ formatDate(note.created_at) }</p>
					</div>
				</div>
			</div>

			<div className="buttons">
				<button title="Editar" onClick={ onEdit }>
					<FiEdit2 size={ 18 } className="icon" />
				</button>

				<button title="Deletar" onClick={ onDelete }>
					<FiTrash2 size={ 18 } className="icon" />
				</button>
			</div>
		</div>
	);

}

export default NoteItem;
