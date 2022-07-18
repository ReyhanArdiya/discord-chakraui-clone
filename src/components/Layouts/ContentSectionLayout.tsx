import { Box, BoxProps, ThemingProps, useStyleConfig } from "@chakra-ui/react";

export type ContentSectionLayoutProps = BoxProps & ThemingProps;

const ContentSectionLayout = (props: ContentSectionLayoutProps) => {
	const {
		variant,
		size,
		colorScheme,
		orientation,
		styleConfig,
		...rest
	} = props;

	const styles = useStyleConfig("ContentSectionLayout", {
		variant,
		size,
		colorScheme,
		orientation,
		styleConfig
	});

	return <Box
		__css={styles}
		as="section"
		className="content-section"
		{...rest}
	/>;
};

export default ContentSectionLayout;
