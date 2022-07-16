import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts";
import gradients from "./gradients";
import sizes from "./sizes";
import spacing from "./spacing";

const theme = extendTheme({
	colors,
	fonts,
	gradients,
	sizes,
	spacing,
});

export default theme;
