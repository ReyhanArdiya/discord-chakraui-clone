import { ComponentStyleConfig } from "@chakra-ui/react";

export enum HeadingVariants {
	HEAVY = "heavy"
}
export enum HeadingSizes {
	"4XL" = "4xl",
	"3XL" = "3xl",
}

const Heading: ComponentStyleConfig = {
	baseStyle : {
		color      : "not-quite-black.0",
		fontFamily : "display",
		fontWeight : 700
	},
	sizes : {
		[HeadingSizes["4XL"]] : {
			fontSize   : `${56 / 16}rem`,
			lineHeight : "95%"
		},
		[HeadingSizes["3XL"]] : {
			lineHeight : "120%"
		}
	},
	variants : {
		[HeadingVariants.HEAVY] : {
			textTransform : "uppercase",
			fontFamily    : "heading",
			fontWeight    : 800,
		}
	},
	defaultProps : {
		variant : "",
		size    : [ HeadingSizes["3XL"] ]
	}
};

export default Heading;
