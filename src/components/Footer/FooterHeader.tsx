import { Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import {
	FaFacebookSquare,
	FaInstagram,
	FaTwitter,
	FaYoutube
} from "react-icons/fa";
import langs from "../../../public/locales/index.json";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

const FooterHeader = () => {
	return (
		<VStack align="start" justify="start" spacing={6}>
			<Heading
				as="h3"
				color="brand.0"
				fontSize={`${32 / 16}rem`}
				variant="heavy"
			>
				Imagine a place
			</Heading>

			<LanguageMenu
				langs={langs}
				selectedLang={{
					image : {
						src : "/images/e6d6b255259ac878d00819a9555072ad.png"
					},
					name : "English, USA"
				}}
			/>

			<HStack
				color="off-white.0"
				id="social-medias"
				spacing="6"
				w="full"
			>
				<Icon as={FaTwitter} boxSize="6" />
				<Icon as={FaInstagram} boxSize="6" />
				<Icon as={FaFacebookSquare} boxSize="6" />
				<Icon as={FaYoutube} boxSize="6" />
			</HStack>
		</VStack>
	);
};

export default FooterHeader;
