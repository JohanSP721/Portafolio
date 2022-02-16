import { useContext } from 'react';

import { ProjectsContext } from '../context/ProjectsContext';

import "../assets/styles/components/ProjectCard.css";

export const CardProject = () =>
{
	const { currentJob : project, setOpenModal } = useContext(ProjectsContext);

	const onClickButton = () =>
	{
		setOpenModal(prevState => !prevState);
	}

	return(
		<article className="project__card">
			<video className='project__card__video' autoPlay muted loop src={project.video}></video>
			<h3 className='project__card__name'>{project.name}</h3>
			<p className='project__card__description'>{project.description}</p>
			<p className='project__card__code'>Codigo:<a href={project.code} target={"_blank"} rel="noreferrer"> {project.name}</a></p>
			<button className="project__card__button" onClick={() => onClickButton()}>Cerrar</button>
		</article>
	);
};
