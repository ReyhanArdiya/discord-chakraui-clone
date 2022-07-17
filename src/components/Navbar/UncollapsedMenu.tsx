import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { NavLink as INavLink, NavLinks } from "./Navbar.interfaces";

export interface UncollapsedMenuProps {
	navLinks: NavLinks;
}

const NavLink = ({ href, text }: INavLink) => (
	<NextLink href={href}>
		<Link color="white" fontFamily="body" fontSize="md" fontWeight="extrabold">
			{text}
		</Link>
	</NextLink>
);


const UncollapsedMenu = ({ navLinks }: UncollapsedMenuProps) => {
	const navLinkComps = navLinks.map(({ href, text }, i) => <NavLink
		href={href}
		key={i}
		text={text}
	/>);

	return (
		<HStack align="center" flexGrow="1" justify="center" spacing="10">
			{navLinkComps}
		</HStack>
	);
};

export default React.memo(UncollapsedMenu);
