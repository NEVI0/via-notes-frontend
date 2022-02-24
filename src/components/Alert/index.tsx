import React from 'react';
import { FiX } from 'react-icons/fi';

import './styles.css';

interface Alert { 
	message: string; 
	onClose(): void; 
	hasAction?: boolean; 
	onAction?(): void; 
}

const Alert: React.FC<Alert> = ({ message, onClose, hasAction, onAction }) => {
	return (
		<div className="Alert" data-testid="alert-modal">
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

				{
					hasAction && (
						<div className="footer">
							<button className="btn btn-danger" onClick={ onAction }>
								Ok
							</button>
						</div>
					)
				}

			</div>
		</div>
	);
}

export default Alert;
