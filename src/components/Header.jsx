import { LinkApp } from "./LinkApp";

export const Header = (props) =>
{
	const { link, enter } = props;

	return(
		<header>
			<LinkApp
					enter={"Home"}
					leave={"Home"}
					link={"/"}
					className={"link-home"}
				/>
			<LinkApp
				enter={enter}
				leave={"Johan"}
				link={link}
				className={"link-fixed"}
			/>
		</header>
	);
};
