import React, { useContext } from 'react';
import AppContext, { AppContextType } from '../../contexts/AppContext';

import { formatDate } from '../../utils/functions';
import './styles.css';

const InfoModal: React.FC<{ onClose(): void; }> = ({ onClose }) => {

	const { user } = useContext<AppContextType>(AppContext);

	return (
		<div className="InfoModal">
			<div className="box" onClick={ onClose }>
				<span>
					<b>ID:</b> { user.id }
				</span>
				<span>
					<b>Criado em:</b> { formatDate(user.created_at) }
				</span>

				<p>
					Está informação é responsável por armazenar apenas as suas anotações/todo's e recuperá-las. Se você limpar o local storage, perderá as suas anotações atuais!
				</p>
			</div>
		</div>
	);

}

export default InfoModal;
