import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Button from "./components/Button";
import Heading from "./components/Heading";
import fonts from "./fonts";
import gradients from "./gradients";
import shadows from "./shadows";
import sizes from "./sizes";
import spacing from "./spacing";

const theme = extendTheme({
	colors,
	fonts,
	gradients,
	shadows,
	sizes,
	spacing,
	components : {
		Button,
		Heading
	},
});

export default theme;
