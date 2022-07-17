import { Center, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import { useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import { type NavLinks } from "../components/Navbar/Navbar.interfaces";
import useIsLg from "../hooks/useIsLg";

const HomePage: NextPage = () => {
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
				href     : "/",
				text     : "Home",
				isActive : true
			});
		}

		return navLinks;
	}, [ isLg ]);

	return (
		<Center bg="gray.300" h="100vh" w="100vw">
			<VStack boxSize="full" spacing="14">
				<Navbar navLinks={navLinks}/>
			</VStack>
		</Center>
	);
};

export default HomePage;
