import { ComponentStyleConfig } from "@chakra-ui/react";

export enum ContentSectionLayoutSizes { }

export enum ContentSectionLayoutVariants {
	REVERSE = "reverse"
}

const ContentSectionLayout: ComponentStyleConfig = {
	baseStyle : {
		display : "flex",
		py      : {
			base : "14",
			md   : "20",
			lg   : "40"
		},
		px : {
			base : "6",
			md   : "10",
			lg   : "20"
		},
		flexDirection : {
			base : "column",
			md   : "row"
		},
		as  : "section",
		gap : {
			base : "5"
		},
		justifyContent : "center"
	},
	variants : {
		[ContentSectionLayoutVariants.REVERSE] : {
			flexDirection : {
				md : "row-reverse"
			}
		}
	}
};

export default ContentSectionLayout;
