import { Heading, Text, VStack } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";
import useSlideFadeAnimation from "../../hooks/useSlideFadeAnimation";
import { HeadingSizes } from "../../theme/components/Heading";
import ContentSectionLayout, {
	ContentSectionLayoutProps
} from "../Layouts/ContentSectionLayout";

export interface ContentSectionProps extends ContentSectionLayoutProps {
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

	const StyledSlideFade = useSlideFadeAnimation();

	return (
		<StyledSlideFade>
			<ContentSectionLayout w="full" {...rest}>
				<Image alt={alt} {...imageProps} />
				<VStack
					maxW={{ lg : `${380 / 16}rem` }}
					spacing="6"
					w={{
						base : "full",
						lg   : "44.5%"
					}}
				>
					<Heading
						as="h2"
						color="inherit"
						size={HeadingSizes.H2}
						w="full"
					>
						{title}
					</Heading>
					<Text color="inherit" w="ffull">
						{children}
					</Text>
				</VStack>
			</ContentSectionLayout>
		</StyledSlideFade>
	);
};

export default ContentSection;
