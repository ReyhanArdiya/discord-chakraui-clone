import { DownloadIcon } from "@chakra-ui/icons";
import {
	Button,
	Center,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Link,
	UseDisclosureProps,
	VStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useMemo } from "react";
import getOS from "../../utils/getOS";
import DiscordLogo from "../Icons/DiscordLogo";
import { NavLink as INavLink, NavLinks } from "../Navbar/Navbar.interfaces";

const NavLink = ({ href, text, isActive = false }: INavLink) => (
	<NextLink href={href}>
		<Link
			_activeLink={{
				color        : "#00b0f4",
				borderRadius : "lg",
				bg           : "off-white.0"
			}}
			aria-current={isActive && "page"}
			color="not-quite-black.0"
			fontFamily="body"
			fontSize="md"
			fontWeight="normal"
			maxW="64"
			px="4"
			py="2"
			w="full"
		>
			{text}
		</Link>
	</NextLink>
);

export interface DrawerMenuProps extends Required<
	Pick<UseDisclosureProps, "isOpen" | "onClose">
> {
	navLinks: NavLinks;
}

// TODO make the navbar fade in on small? (might take too much time tho, probs gonna do this last)
const DrawerMenu = ({
	navLinks,
	isOpen,
	onClose
}: DrawerMenuProps) => {
	const navLinkComps = useMemo(() => navLinks.map(({ href, text, isActive }, i) => <NavLink
		href={href}
		isActive={isActive}
		key={i}
		text={text}
	/>), [ navLinks ]);

	return (
		<Drawer isOpen={isOpen} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent borderLeftRadius="lg">
				<Flex as={DrawerHeader} justify="space-between">
					<DiscordLogo color="not-quite-black.0" />
					<DrawerCloseButton
						_hover={{
							bg : "none"
						}}
						color="not-quite-black.0"
						position="static"
					/>
				</Flex>

				<Center mb="4" mt="6">
					<Divider bg="#ebedef" w={`${258 / 16}rem`} />
				</Center>

				<VStack as={DrawerBody} spacing="4">
					{navLinkComps}
				</VStack>

				<DrawerFooter justifyContent="left" p="6">
					<Button size="sm" variant="brand">
						<DownloadIcon mr="2" />
						Download for {getOS()}
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default React.memo(DrawerMenu);
