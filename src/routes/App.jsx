import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "../containers/Home";
import { About } from '../containers/About';
import { Work } from '../containers/Work';

import '../assets/styles/Global.css';

export const App = () =>
(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={ <Home/> }/>
			<Route path="/about" element={ <About/> }/>
			<Route path="/works" element={ <Work/> }/>
		</Routes>
	</BrowserRouter>
);
