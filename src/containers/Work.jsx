import { LinkApp } from "../components/LinkApp";

import "../assets/styles/components/Work.css";

export const Work = () =>
{
	return(
		<section className="work">
			<LinkApp
				enter={"Johan.contact"}
				leave={"Johan"}
				link={"/contact"}
				first={false}
				className={"link-fixed"}
			/>

		</section>
  	);
};

