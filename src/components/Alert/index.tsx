import React from 'react';
import { FiX } from 'react-icons/fi';

import './styles.css';

const Alert: React.FC<{ message: string; onClose(): void; }> = ({ message, onClose }) => {
	return (
		<div className="Alert">
			<div className="alert-box">
				
				<div className="header">
					<h2>Alerta!</h2>

					<button className="btn-circle danger" onClick={ onClose }>
						<FiX size={ 24 } className="icon" />
					</button>
				</div>

				<div className="content">
					<p>
						{ message }
					</p>
				</div>

			</div>
		</div>
	);
}

export default Alert;
