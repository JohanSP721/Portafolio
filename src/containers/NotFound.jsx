import { Helmet } from "react-helmet";

import { LinkApp } from "../components/LinkApp";

import "../assets/styles/containers/NotFound.css";

export const NotFound = () =>
{
	return (
		<>
			<Helmet>
				<title>Error 404 | Johan Sarmiento Peña</title>
				<meta name="description" content="Error 404: Pagina no encontrada" />
			</Helmet>
			<section className="not-found">
				<h1 className="not-found__title">Lo siento la pagina que buscas no existe</h1>
				<LinkApp
						enter={"Home"}
						leave={"Home"}
						link={"/"}
						className={"link-home"}
				/>
			</section>
		</>
	);
};

