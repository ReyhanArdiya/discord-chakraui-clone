import { Center, Grid, GridItem } from "@chakra-ui/react";
import FooterContent from "./FooterContent";
import FooterFooter from "./FooterFooter";
import FooterHeader from "./FooterHeader";

const Footer = () => {
	const baseCols = 8;

	return (
		<Center as="footer" bg="not-quite-black.0" w="full">
			<Grid
				alignItems="start"
				justifyItems="start"
				maxW="page-max-width"
				pb="16"
				pt="20"
				px={6}
				templateColumns={`repeat(${baseCols}, 1fr)`}
				w="full"
			>
				<GridItem
					colSpan={{
						base : baseCols,
						md   : 3,
						lg   : 2
					}}
					mb="14"
					w="full"
				>
					<FooterHeader />
				</GridItem>

				<GridItem
					colSpan={{
						base : baseCols,
						md   : 0,
						lg   : 0
					}}
					colStart={{
						md : 5,
						lg : 4
					}}
					mb="10"
					w="full"
				>
					<FooterContent />
				</GridItem>
				<GridItem colSpan={baseCols} w="full">
					<FooterFooter />
				</GridItem>
			</Grid>
		</Center>
	);
};

export default Footer;
