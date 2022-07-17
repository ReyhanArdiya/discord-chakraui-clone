import { ReactNode, useMemo } from "react";
import useIsLg from "../../hooks/useIsLg";
import Navbar from "../Navbar/Navbar";
import { NavLinks } from "../Navbar/Navbar.interfaces";

export interface GlobalLayoutProps {
    children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
	const isLg = useIsLg();

	const navLinks = useMemo<NavLinks>(() => {
		const navLinks: NavLinks = [
			{
				href : "/download",
				text : "Download",
			},
			{
				href : "/nitro",
				text : "Nitro"
			},
			{
				href : "/safety",
				text : "Safety"
			},
			{
				href : "/support",
				text : "Support"
			},
			{
				href : "/blog",
				text : "Blog"
			},
			{
				href : "/careers",
				text : "Careers"
			},
		];

		if (!isLg) {
			navLinks.unshift({
				href : "/",
				text : "Home"
			});
		}

		return navLinks;
	}, [ isLg ]);
	return (
		<>
			<Navbar navLinks={navLinks} />
			{children}
		</>
	);
};

export default GlobalLayout;
