import { ComponentStyleConfig } from "@chakra-ui/react";

export enum TextVariants {

}

export enum TextSizes {
	RESPONSIVE = "responsive"
}

const Text: ComponentStyleConfig = {
	baseStyle : {
		fontSize   : "xl",
		color      : "not-quite-black.0",
		fontWeight : 400,
		fontStyle  : "normal",
		lineHeight : "tall"
	},
	sizes : {
		[TextSizes.RESPONSIVE] : {
			fontSize : {
				base : "md",
				lg   : "xl"
			}
		}
	},
	defaultProps : {
		size : TextSizes.RESPONSIVE
	}
};

export default Text;
