import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const DarkModeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			borderRadius="md"
			bottom="5"
			onClick={toggleColorMode}
			p="3"
			pos="fixed"
			right="5"
			shadow="button"
			variant={colorMode === "light" ? "dark" : "light"}
			zIndex="overlay"
		>
			{colorMode === "light" ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
};

export default DarkModeButton;
