import { HStack, Image, ImageProps, Text } from "@chakra-ui/react";

export interface LanguageProps {
	image: ImageProps;
    name: string;
    isSelected?: boolean;
}

const Language = ({ image, name, isSelected }: LanguageProps) => (
	<HStack
		align="center"
		cursor="pointer"
		fontSize={`${14 / 16}rem`}
		h="max-content"
		spacing={2}
	>
		<Image
			alt=""
			{...image}
			h="4"
			w="6"
		/>
		<Text
			color={isSelected ? "white" : "not-quite-black.0"}
			fontSize="1em"
			h="max-content"
			lineHeight="1.286em"
		>
			{name}
		</Text>
	</HStack>
);

export default Language;
