import { VStack } from "@chakra-ui/react";
import FooterContent from "./FooterContent";
import FooterFooter from "./FooterFooter";
import FooterHeader from "./FooterHeader";

const Footer = () => {
	return (
		<VStack as="footer" bg="not-quite-black.0" justify="end" minH="96" px={6}>
			<FooterHeader />
			<FooterContent/>
			<FooterFooter/>
		</VStack>
	);
};

export default Footer;
