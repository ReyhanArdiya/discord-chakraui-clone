import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import colors from "./colors";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";
import fonts from "./fonts";
import gradients from "./gradients";
import shadows from "./shadows";
import sizes from "./sizes";
import spacing from "./spacing";


const theme = extendTheme({
	breakpoints,
	colors,
	fonts,
	gradients,
	shadows,
	sizes,
	spacing,
	components : {
		Button,
		Heading,
		Text
	},
});

export default theme;
