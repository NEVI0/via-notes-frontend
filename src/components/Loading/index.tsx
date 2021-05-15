import React from 'react';
import './styles.css';

const Loading: React.FC<{ message: string; }> = ({ message }) => {
	return (
		<div className="Loading">
			<p>
				{ message }
			</p>
		</div>
	);
}

export default Loading;
