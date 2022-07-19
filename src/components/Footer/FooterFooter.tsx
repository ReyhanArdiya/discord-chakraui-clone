import { Button, Flex } from "@chakra-ui/react";
import { ButtonSizes } from "../../theme/components/Button";
import DiscordLogo from "../Icons/DiscordLogo";

const FooterFooter = () => (
	<Flex
		as="footer"
		borderColor="brand.0"
		borderStyle="solid"
		borderTopWidth="1px"
		h={`${71 / 16}rem`}
		justifyContent="space-between"
		py={10}
		w="full"
	>
		<DiscordLogo />
		<Button size={ButtonSizes.sm} variant="brand">
					Sign up
		</Button>
	</Flex>
);

export default FooterFooter;
