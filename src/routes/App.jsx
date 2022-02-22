import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "../containers/Home";
import { About } from '../containers/About';
import { Projects } from '../containers/Projects';
import { Contact } from '../containers/Contact';

import '../assets/styles/Global.css';

export const App = () =>
(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={ <Home/> }/>
			<Route path="/about" element={ <About/> }/>
			<Route path="/projects" element={ <Projects/> }/>
			<Route path='/contact' element={ <Contact/> }/>
		</Routes>
	</BrowserRouter>
);
