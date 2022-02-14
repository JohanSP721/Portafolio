import { Header } from "../components/Header";

import "../assets/styles/components/About.css";

export const About = () =>
{
	return (
		<section className="about">
			<Header
				link={"/projects"}
				enter={"johan.projects"}
			/>
			<h1 className="about__title">Desarrollador Web Full Stack</h1>
			<img className="about__img" src={require("../assets/static/FondoMain.jpg")} alt="Johan Sarmiento Peña" />
			<article className="about__description">
				<h2 className="about__subtitle">Hola, soy Johan Sarmiento Peña, un desarrollador web con conocimientos de HTML, CSS, JavaScript, Python, Go y sus respectivos frameworks y librerías para front-end y back-end.</h2>
				<p className="about__paragraph">Formación autodidacta en programación con énfasis en desarrollo de aplicaciones y plataformas web con  conocimientos en Front-end y Back-end, desarrollados a través de proyectos propios.</p>
				<p className="about__paragraph">Busco desarrollar mi carrera, en una empresa del sector tecnológico, contribuyendo con mis habilidades y conocimientos para lograr diseños finales que satisfagan las necesidades y preferencias de la empresa.</p>
				<p className="about__paragraph">La industria de la tecnología es cada vez mas importante en el mundo, creciendo a pasos agigantados y deseo contribuir activamente a este crecimiento.</p>
				<p className="about__paragraph">Actualmente me encuentro radicado en Bogotá Colombia, me considero una persona bastante reactiva, proactiva, flexible y responsable.</p>
				<p className="about__paragraph">algunas de mis grandes aficiones son:</p>
				<ul className="about__list">
						<li>Estar en constante aprendizaje 📚</li>
						<li>El ciclismo 🚴🚴‍♂️</li>
						<li>La música 🎵🎶</li>
						<li>La tecnología 🖥️💻</li>
						<li>Los videojuegos 🎮🕹️</li>
						<li>El mundo de la animación y el cine 🎥🎞️</li>
				</ul>
			</article>
		</section>
	);
};
