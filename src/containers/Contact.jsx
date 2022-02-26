import { Helmet } from "react-helmet";

import { BsGithub, BsLinkedin, BsMailbox, BsShare } from "react-icons/bs";

import { Header } from "../components/Header";

import "../assets/styles/containers/Contact.css"

export const Contact = () =>
{
	return (
		<>
			<Helmet>
				<title>Contacto | Johan Sarmiento Peña</title>
				<meta name="description" content="Datos de contacto Johan Sarmiento Peña" />
			</Helmet>
			<section className="contact">
				<Header
					link={"/"}
					contact
				/>
				<h1 className="contact__title">Ponte en contacto conmigo</h1>
				<article className="contact__container">
					<aside className="contact__card">
						<BsShare className="contact__card__icon icon-left"/>
						<div className="right">
							<h2 className="contact__card__title">Redes Sociales</h2>
							<div>
								<a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/johan-sarmiento-pe%C3%B1a-b789b31a8/">
									<BsLinkedin className="contact__card__icon icon-right"/>
								</a>
								<a target={"_blank"} rel="noreferrer" href="https://github.com/JohanSP721">
									<BsGithub className="contact__card__icon icon-right"/>
								</a>
							</div>
						</div>
					</aside>
					<aside className="contact__card">
						<BsMailbox className="contact__card__icon icon-left"/>
						<div className="right">
							<h2 className="contact__card__title">Envíame un email</h2>
							<p>johansarmiento_21@live.com</p>
						</div>
					</aside>
				</article>
			</section>
		</>
	);
};

