import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { AppProvider } from './contexts/AppContext';
import { UserProvider } from './contexts/UserContext';
import { NoteProvider } from './contexts/NoteContext';
import { StatusProvider } from './contexts/StatusContext';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<UserProvider>
				<NoteProvider>
					<StatusProvider>
						<App />
					</StatusProvider>
				</NoteProvider>
			</UserProvider>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
