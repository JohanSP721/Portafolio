import { useContext } from "react";

import { Helmet } from "react-helmet";

import { ProjectsContext } from "../context/ProjectsContext";

import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { CardProject } from "../components/ProjectCard";

import { ListOfProjects } from "../ListOfProjects";

import "../assets/styles/containers/Projects.css";

export const Projects = () =>
{
	const { openModal, setOpenModal, setCurrentJob } = useContext(ProjectsContext);

	const onClickAside = (project) =>
	{
		setOpenModal(prevState => !prevState);
		setCurrentJob(project);
	}

	return(
		<>
			<Helmet>
				<title>Proyectos | Johan Sarmiento Peña</title>
				<meta name="description" content="Lista de proyectos de Johan Sarmiento Peña" />
			</Helmet>
			<section className="projects">
				<Header
					link={"/contact"}
					enter={"johan.contact"}
				/>
				<article className="projects__container">
					<h1 className="projects__title">Proyectos:</h1>
				{
					ListOfProjects.map((project) => (
						<aside onClick={ () => onClickAside(project) } key={project.id} className="project">
							<h2 className="project__name">{project.name}</h2>
							<p className="project__description">{project.description}</p>
						</aside>
					))
				}
				</article>
				{
					openModal &&
					<Modal>
						<CardProject />
					</Modal>
				}
			</section>
		</>
  	);
};

