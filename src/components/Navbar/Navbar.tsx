// TODO use spacer
// TODO use drawer

import { Button, Flex, HStack, Link, Spacer, useMediaQuery, useTheme } from "@chakra-ui/react";

import NextLink from "next/link";
import { ButtonSizes } from "../../theme/components/Button";
import DiscordLogo from "../Icons/DiscordLogo";
import HamburgerIcon from "../Icons/HamburgerIcon";
import UncollapsedMenu, { UncollapsedMenuProps } from "./UncollapsedMenu";

export type NavbarProps = UncollapsedMenuProps;

const Navbar = ({ navLinks }: NavbarProps) => {
	const theme = useTheme();
	const [ isLg ] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

	return (
		<Flex
			align="center"
			as="nav"
			h={20}
			justify="space-between"
			maxW="page-max-width"
			px={6}
			w="full"
		>
			<NextLink href="/">
				<Link>
					<DiscordLogo />
				</Link>
			</NextLink>
			{isLg ? <UncollapsedMenu navLinks={navLinks}/> : <Spacer />}
			<HStack align="center" spacing={4}>
				<Button size={ButtonSizes.sm}>Login</Button>
				{!isLg && <HamburgerIcon cursor="pointer"/>}
			</HStack>
		</Flex>
	);
};

export default Navbar;
