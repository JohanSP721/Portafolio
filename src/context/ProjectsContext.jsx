import { createContext, useState } from "react";

const ProjectsContext = createContext();

const ProjectsProvider = ({children}) =>
{
	const [currentJob, setCurrentJob] = useState({});

	const [openModal, setOpenModal] = useState(false);

	return(
		<ProjectsContext.Provider value={{
			currentJob,
			setCurrentJob,
			openModal,
			setOpenModal
		}}>
			{children}
		</ProjectsContext.Provider>
	)
}

export {ProjectsContext, ProjectsProvider};
