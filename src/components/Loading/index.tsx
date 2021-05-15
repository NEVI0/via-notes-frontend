import React from 'react';
import loading from '../../assets/loading.gif';
import './styles.css';

const Loading: React.FC = () => {
	return (
		<div className="Loading">
			<div className="loading-box">
				<img src={ loading } />
			</div>
		</div>
	);
}

export default Loading;
