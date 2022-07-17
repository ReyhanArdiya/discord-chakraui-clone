import { Button, Flex, HStack, Link, Spacer, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useMemo } from "react";
import useIsLg from "../../hooks/useIsLg";
import { ButtonSizes } from "../../theme/components/Button";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import DiscordLogo from "../Icons/DiscordLogo";
import HamburgerIcon from "../Icons/HamburgerIcon";
import UncollapsedMenu, { UncollapsedMenuProps } from "./UncollapsedMenu";

export type NavbarProps = UncollapsedMenuProps;

const Navbar = ({ navLinks }: NavbarProps) => {
	const isLg = useIsLg();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const memoizedNavLinks = useMemo(() => navLinks, [ navLinks ]);

	return (
		<Flex
			align="center"
			as="nav"
			h={20}
			justify="space-between"
			left="0"
			maxW="page-max-width"
			mx="auto"
			pos="absolute"
			px={6}
			right= "0"
			w="full"
			zIndex="overlay"
		>
			<NextLink href="/">
				<Link>
					<DiscordLogo />
				</Link>
			</NextLink>

			{isLg ? <UncollapsedMenu navLinks={memoizedNavLinks} /> : <Spacer />}

			<HStack align="center" spacing={4}>
				<Button size={ButtonSizes.sm}>Login</Button>
				{!isLg && <HamburgerIcon cursor="pointer" onClick={onOpen}/>}
			</HStack>

			{!isLg && <DrawerMenu
				isOpen={isOpen}
				navLinks={memoizedNavLinks}
				onClose={onClose}
			/>}
		</Flex>
	);
};

export default React.memo(Navbar);
