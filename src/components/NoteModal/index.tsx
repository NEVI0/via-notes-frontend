import React, { useState, useContext } from 'react';
import { FiBookmark, FiX } from 'react-icons/fi';

import AppContext, { AppContextType } from '../../contexts/AppContext';
import NoteContext, { NoteContextType } from '../../contexts/NoteContext';
import StatusContext, { StatusContextType } from '../../contexts/StatusContext';

import { NoteType } from '../../utils/types';
import './styles.css';

const NoteModal: React.FC<{ note: NoteType; onClose(): void; }> = ({ note, onClose }) => {

	const {
		user
	} = useContext<AppContextType>(AppContext);
	const {
		createNote,
		updateNote
	} = useContext<NoteContextType>(NoteContext);
	const {
		statusArray
	} = useContext<StatusContextType>(StatusContext);

	const [ selectedStatus, setSelectedStatus ] = useState<string>(note ? note.id_status.toString() : 'none');
	const [ description, setDescription ] = useState<string>(note ? note.description : '');

	const [ formError, setFormError ] = useState<string>('');

	const handleMainAction = () => {
		if (!description) {
			setFormError('Preencha o campo de anotação!');
			return;
		}
		if (selectedStatus == 'none') {
			setFormError('Selecione o status da sua anotação!');
			return;
		}
		
		if (note) {
			updateNote(note.id_note, parseInt(selectedStatus), description);
		} else {
			createNote(user.id, parseInt(selectedStatus), description)
		}

		handleCleanForm();
		onClose();
	}

	const handleCleanForm = () => {
		setFormError('');
		setDescription('');
		setSelectedStatus('none');
	}

	return (
		<div className="NoteModal">
			<div className="box">
				
				<div className="header">
					<h2>{ note ? 'Editar Nota' : 'Criar Nota' }</h2>

					<button className="btn-circle" onClick={ onClose }>
						<FiX size={ 24 } className="icon" />
					</button>
				</div>

				<div className="content">
					<textarea
						value={ description }
						onChange={ (ev) => setDescription(ev.target.value) }
						placeholder="Faça suas anotações aqui..."
					></textarea>

					<div className="input-box">
						<FiBookmark size={ 20 } className="icon" />

						<select value={ selectedStatus } onChange={ (ev) => setSelectedStatus(ev.target.value) }>
							<option value="none">Selecionar</option>
							{
								statusArray.map((status, index) => (
									<option key={ index.toString() } value={ status.id_status }>
										{ status.name }
									</option>
								))
							}
						</select>
					</div>
				</div>

				<div className="footer">
					<button className="btn btn-secondary" onClick={ handleCleanForm }>
						Limpar
					</button>

					<button className="btn btn-primary" onClick={ handleMainAction }>
						{ note ? 'Editar' : 'Criar' }
					</button>
				</div>

			</div>

			{
				formError != '' && (
					<div className="message-box">
						<p>{ formError }</p>
					</div>
				)
			}
		</div>
	);

}

export default NoteModal;
