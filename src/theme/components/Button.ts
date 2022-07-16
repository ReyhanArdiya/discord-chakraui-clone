import { ComponentStyleConfig, type Theme } from "@chakra-ui/react";

export enum ButtonVariants {
	light = "light",
	dark = "dark",
	brand = "brand"
}

export enum ButtonSizes {
	xl = "xl",
	sm = "sm"
}

const Button: ComponentStyleConfig = {
	baseStyle : {
		bg           : "white",
		borderRadius : `${28 / 16}rem`,
		fontFamily   : "body",
		fontWeight   : "medium" as keyof Theme["fontWeights"],
		_hover       : {
			shadow : "button"
		}
	},
	variants : {
		[ButtonVariants.light] : {
			bg     : "white",
			color  : "not-quite-black.0",
			_hover : {
				color : "brand.0"
			}
		},
		[ButtonVariants.dark] : {
			color  : "white",
			bg     : "not-quite-black.0",
			_hover : {
				bg : "#36393f"
			}
		},
		[ButtonVariants.brand] : {
			color  : "white",
			bg     : "brand.0",
			_hover : {
				bg : "hsl(235,calc(var(--saturation-factor, 1)*86.1%),71.8%)"
			}
		}
	},
	sizes : {
		[ButtonSizes.xl] : {
			fontSize : "xl",
			px       : "8",
			py       : "4"
		},
		[ButtonSizes.sm] : {
			px : "4",
			py : `${7 / 16}rem`
		}
	},
	defaultProps : {
		size    : ButtonSizes.xl,
		variant : ButtonVariants.light
	}
};

export default Button;
