import { Box, BoxProps } from "@chakra-ui/react";

export type HamburgerIconProps = BoxProps;

const HamburgerIcon = (props: HamburgerIconProps) => {
	return (
		<Box
			as="svg"
			boxSize={10}
			color="white"

			viewBox="0 0 40 40"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
				fill="currentColor"
				fillRule="evenodd"
			></path>
		</Box>
	);
};

export default HamburgerIcon;
