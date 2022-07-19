import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import colors from "./colors";
import Button from "./components/Button";
import ContentSectionLayout from "./components/ContentSectionLayout";
import Heading from "./components/Heading";
import Text from "./components/Text";
import fonts from "./fonts";
import gradients from "./gradients";
import semanticColors from "./semantic-tokens/semantic-colors";
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
		Text,
		ContentSectionLayout
	},
	styles : {
		global : {
			"*" : {
				"-webkit-tap-highlight-color" : "transparent"
			}
		}
	},
	semanticTokens : {
		colors : semanticColors
	}
});

export default theme;
