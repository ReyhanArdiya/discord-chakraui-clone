import { ComponentStyleConfig } from "@chakra-ui/react";

export enum HeadingVariants {
	HEAVY = "heavy",
	REGULAR = "regular"
}
export enum HeadingSizes {
	H1 = "h1",
	H2 = "h2",
}

const Heading: ComponentStyleConfig = {
	baseStyle : {
		color : "not-quite-black.0"
	},
	sizes : {
		[HeadingSizes["H1"]] : {
			fontSize : {
				base : "clamp(24px,5vw,44px)",
				md   : `${56 / 16}rem`
			},
			lineHeight : "95%"
		},
		[HeadingSizes["H2"]] : {
			fontSize : {
				base : "clamp(20px,4vw,40px)",
				md   : `${48 / 16}rem`
			},
			lineHeight : "120%"
		},

	},
	variants : {
		[HeadingVariants.HEAVY] : {
			textTransform : "uppercase",
			fontFamily    : "heading",
			fontWeight    : 800,
		},
		[HeadingVariants.REGULAR] : {
			fontFamily : "display",
			fontWeight : 700
		}
	},
	defaultProps : {
		variant : HeadingVariants.REGULAR,
		size    : [ HeadingSizes["H2"] ]
	}
};

export default Heading;
