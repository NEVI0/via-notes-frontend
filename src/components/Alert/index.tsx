import React from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import './styles.css';

const Alert: React.FC<{ message: string; onClose(): void; }> = ({ message, onClose }) => {
	return (
		<div className="Alert">
			<div className="box">
				
				<FiAlertCircle size={ 24 } className="icon" />

				<div>
					<h3>Alerta!</h3>
					<p>{ message }</p>
				</div>

				<FiX size={ 24 } className="icon close" onClick={ onClose } />

			</div>
		</div>
	);
}

export default Alert;
