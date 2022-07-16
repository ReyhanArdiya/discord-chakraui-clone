import { theme } from "@chakra-ui/react";

const fonts = {
	// Equivalent to discord's --font-primary
	body    : `"Whitney","Helvetica Neue","Helvetica","Arial",sans-serif, ${theme.fonts.body}`,
	cursive : "\"Reenie Beanie\",\"Comic Sans MS\",cursive,sans-serif",
	display : "\"Ginto Normal\",\"Whitney\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif",
	glitch  : "\"ArchivoBlack\",\"Whitney\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif",
	// Equivalent to discord's --font-headline
	heading : `"Ginto Nord","Whitney","Helvetica Neue","Helvetica","Arial",sans-serif, ${theme.fonts.heading}`,
	mono    : `"Menlo","Consolas","Monaco",monospace, ${theme.fonts.mono}`,
};

export default fonts;
