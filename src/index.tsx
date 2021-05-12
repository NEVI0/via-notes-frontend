import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { AppProvider } from './contexts/AppContext';
import { NoteProvider } from './contexts/NoteContext';
import { StatusProvider } from './contexts/StatusContext';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<NoteProvider>
				<StatusProvider>
					<App />
				</StatusProvider>
			</NoteProvider>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
