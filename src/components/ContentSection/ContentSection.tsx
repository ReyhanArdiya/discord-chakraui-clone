import { Heading, Text, VStack } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";
import { HeadingSizes } from "../../theme/components/Heading";
import ContentSectionLayout, { ContentSectionLayoutProps } from "../Layouts/ContentSectionLayout";

export interface ContentSectionProps extends ContentSectionLayoutProps{
	image: ImageProps;
	children: ReactNode;
	title: string;
}

const ContentSection = ({
	image,
	children,
	title,
	...rest
}: ContentSectionProps) => {
	const { alt, ...imageProps } = image;
	// TODO add fade in animation
	return (
		<ContentSectionLayout w="full" {...rest}>
			<Image alt={alt} {...imageProps}/>
			<VStack
				maxW={{ lg : `${380 / 16}rem` }}
				spacing="6"
				w={{
					base : "full",
					lg   : "44.5%"
				}}
			>
				<Heading as="h2" size={HeadingSizes.H2} w="full">
					{title}
				</Heading>
				<Text w="ffull" >
					{children}
				</Text>
			</VStack>
		</ContentSectionLayout>
	);
};

export default ContentSection;
