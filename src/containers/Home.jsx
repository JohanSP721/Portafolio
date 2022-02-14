import { LinkApp } from "../components/LinkApp";

import "../assets/styles/components/Home.css";

export const Home = () =>
{
	const textsLinks =
	[
		{enter: "Sobre mi", leave: "Hola", link: "/about", key: 1, first: true, className:"link"},
		{enter: "Proyectos", leave: "Yo soy", link: "/projects", key: 2, first: false, className:"link"},
		{enter: "Contacto", leave: "Johan", link: "/contact", key: 3, first: false, className:"link"},
	]

	return(
		<section className="home">
			<ul>
				{
					textsLinks.map((textsLink) =>
					(
						<li key={textsLink.key}>
							<LinkApp
								enter={textsLink.enter}
								leave={textsLink.leave}
								link={textsLink.link}
								first={textsLink.first}
								className={textsLink.className}
							/>
						</li>
					))
				}
			</ul>
		</section>
	)
};
