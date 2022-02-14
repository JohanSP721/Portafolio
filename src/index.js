import React from 'react';
import ReactDOM from 'react-dom';

import { ProjectsProvider } from './context/ProjectsContext';

import { App } from './routes/App';

ReactDOM.render(
	<ProjectsProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ProjectsProvider>,
	document.getElementById('root')
);
