import { LinkApp } from "./LinkApp";

export const Header = (props) =>
{
	const { link, enter, contact } = props;

	return(
		<header>
			<LinkApp
					enter={"Home"}
					leave={"Home"}
					link={"/"}
					className={"link-home"}
			/>

			{
				contact
				?
					undefined
				:
					<LinkApp
						enter={enter}
						leave={"Johan"}
						link={link}
						className={"link-fixed"}
					/>
			}
		</header>
	);
};
