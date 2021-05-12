import React from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';

import { NoteType } from '../../utils/types';
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
				<span># { note.status }</span>
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
