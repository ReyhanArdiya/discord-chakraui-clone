import { useMediaQuery, useTheme } from "@chakra-ui/react";

const useIsLg = () => {
	const theme = useTheme();
	const [ isLg ] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

	return isLg;
};

export default useIsLg;
