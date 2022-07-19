import { Grid, GridItem } from "@chakra-ui/react";
import FooterContent from "./FooterContent";
import FooterFooter from "./FooterFooter";
import FooterHeader from "./FooterHeader";

const Footer = () => {
	const baseCols = 8;

	return (
		<Grid
			alignItems="start"
			as="footer"
			bg="not-quite-black.0"
			justifyItems="start"
			pb="16"
			pt="20"
			px={6}
			templateColumns={`repeat(${baseCols}, 1fr)`}
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
			<GridItem
				colSpan={ baseCols }
				w="full"
			>
				<FooterFooter />
			</GridItem>
		</Grid>
	);
};

export default Footer;
