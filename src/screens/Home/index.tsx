import React, { useState, useContext, useEffect } from 'react';
import { FiBookmark, FiMoon, FiSun, FiPlus } from 'react-icons/fi';

import NoteItem from '../../components/NoteItem';
import InfoModal from '../../components/InfoModal';
import NoteModal from '../../components/NoteModal';

import AppContext, { AppContextType } from '../../contexts/AppContext';
import NoteContext, { NoteContextType } from '../../contexts/NoteContext';
import StatusContext, { StatusContextType } from '../../contexts/StatusContext';

import { NoteType } from '../../utils/types';
import './styles.css';

const Home: React.FC = () => {

	const {
		user,
		isDarkMode,
		getUser,
		changeTheme
	} = useContext<AppContextType>(AppContext);
	const {
		statusArray,
		getStatus
	} = useContext<StatusContextType>(StatusContext);
	const {
		notesArray,
		getNotes,
		deleteNote	
	} = useContext<NoteContextType>(NoteContext);

	const [ showNoteModal, setShowNoteModal ] = useState<boolean>(false);
	const [ showInfoModal, setShowInfoModal ] = useState<boolean>(false);

	const [ selectedStatus, setSelectedStatus ] = useState<string>('none');
	const [ selectedNote, setSelectedNote ] = useState<NoteType | any>(null);

	const handleEdit = (note: NoteType) => {
		setSelectedNote(note);
		setShowNoteModal(true);
	}

	const handleCloseNoteModal = () => {
		setShowNoteModal(false);
		if (selectedNote) setSelectedNote(null);
	}

	useEffect(() => {
		(async () => {
			try {
				await getStatus();
			} catch (err) {
				alert(err);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				if (user) {
					await getNotes(user.id, selectedStatus);
				} else {
					getUser();
				}
			} catch (err) {
				alert(err);
			}
		})();
	}, [notesArray, selectedStatus]);

	return (
		<div className="Home">

			{ user != null && showInfoModal && <InfoModal onClose={ () => setShowInfoModal(false) } /> }
			{ user != null && showNoteModal && <NoteModal onClose={ handleCloseNoteModal } note={ selectedNote } /> }

			<div className="wallpaper"></div>

			<div className="container">
				<h2>Via Notes</h2>

				<div className="content">
					<div className="header">
						<div className="user-box">
							<img src="data:image/jpeg;base64,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" />
							
							<div className="user-info" onClick={ () => setShowInfoModal(true) }>
								<h3>Pai do Chris</h3>
								<h4>euvouestarla@gmail.com</h4>
							</div>
						</div>

						<div className="buttons">
							<button className="btn-circle" title="Nova Nota" onClick={ changeTheme }>
								{ isDarkMode ? <FiSun size={ 24 } className="icon" /> : <FiMoon size={ 24 } className="icon" /> }
							</button>

							<div className="divider"></div>

							<button className="btn-circle" title="Nova Nota" onClick={ () => setShowNoteModal(true) }>
								<FiPlus size={ 24 } className="icon" />
							</button>
						</div>
					</div>	

					<div className="sub-header">
						<p>
							{
								notesArray.length == 0 ? 
								'Sem notas' : 
								notesArray.length == 1 ? 
								`1 Nota` : 
								`${notesArray.length} Notas`
							}
						</p>

						<div className="input-box">
							<FiBookmark size={ 20 } className="icon" />

							<select value={ selectedStatus } onChange={ (ev) => setSelectedStatus(ev.target.value) }>
								<option value="none">Todas</option>
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

					<div className="list">
						{
							notesArray.length > 0 ?
								notesArray.map((note, index) => (
									<NoteItem
										key={ index.toString() }
										note={ note }
										onEdit={ () => handleEdit(note) }
										onDelete={ () => deleteNote(note.id_note) }
									/>
								))
							: (
								<p className="no-notes">Sem anotações! Tente criar uma clicando no  <b>ícone de mais</b>.</p>
							)
						}
					</div>
				</div>
			</div>

			<div className="footer">
				<p>
					<em>&copy; Created by <b>Névio Costa Magagnin</b> - { new Date().getFullYear() }</em>
				</p>
			</div>

		</div>
	);

}

export default Home;
