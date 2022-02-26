import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import "../assets/styles/components/LinkApp.css";

export const LinkApp = (props) =>
{
	const {enter, leave, link, first, className} = props;

	const linkRef = useRef();

	useEffect(() =>
	{
		const { current } = linkRef;

		const changeText = (text) =>
		{
			current.innerHTML = text;
			current.classList.toggle("hover");
		}

		current.addEventListener("mouseover", () => changeText(enter));

		current.addEventListener("mouseout", () => changeText(leave))

		return () =>
		{
			current.removeEventListener('mouseover', () => changeText(enter));
			current.removeEventListener('mouseout', () => changeText(leave));
		}

	}, [enter, leave])

	return(
		<Link
			ref={linkRef}
			className={first ? `${className} first-link` : `${className}`}
			to={link}
		>
			{leave}
		</Link>
	);
};
