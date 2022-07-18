import { DownloadIcon } from "@chakra-ui/icons";
import {
	AspectRatio,
	AspectRatioProps,
	Box,
	BoxProps,
	Button,
	Center,
	Grid,
	GridItem,
	Heading,
	Spacer,
	Stack,
	Text,
	VStack
} from "@chakra-ui/react";
import Image from "next/image";
import useOs from "../../hooks/useOs";

const ChillShoes = (props: BoxProps) => (
	<Box w="full" {...props}>
		<Image
			alt="chill-shoes"
			height={352}
			layout="intrinsic"
			src="/images/8a8375ab7908384e1fd6efe408284203.svg"
			width={689}
		/>
	</Box>
);

const ChillDrinks = (props: AspectRatioProps) => (
	<AspectRatio {...props}>
		<Image
			alt="chill-drinks"
			layout="fill"
			objectFit="cover"
			src="/images/c40c84ca18d84633a9d86b4046a91437.svg"
		/>
	</AspectRatio>
);

const Clouds = (props: AspectRatioProps) => (
	<AspectRatio {...props}>
		<Image
			alt="clouds"
			layout="fill"
			objectFit="cover"
			src="/images/e6d57714479874c665b36c7adee76b1d.svg"
		/>
	</AspectRatio>
);

export interface HomeHeroProps {}

const HomeHero = ({}: HomeHeroProps) => {
	const userOs = useOs();

	return (
		<Center bgColor="brand.50" flexDirection="column" minH="626px" pos="relative" w="full">
			<Spacer flexShrink={0} minH="80px"/>
			<Grid
				justifyItems="center"
				maxW={`${850 / 16}rem`}
				my="14"
				px={{
					base : "6",
					md   : "10"
				}}
				rowGap="6"
				templateColumns="repeat(5, 1fr)"
				textAlign={{ lg : "center" }}
				w={{
					base : "full",
					lg   : "70%"
				}}
			>
				<GridItem
					colSpan={{
						base : 4,
						lg   : 5
					}}

					w="full"
				>
					<Heading as="h1" color="white" size="h1" variant="heavy">
						Imagine a place...
					</Heading>
				</GridItem>

				<GridItem
					colSpan={{
						base : 5,
						md   : 3,
						lg   : 5
					}}
					mt={{
						md : "26px"
					}}
				>
					<Text color="white">
						...where you can belong to a school club, a gaming
						group, or a worldwide art community. Where just you and
						a handful of friends can spend time together. A place
						that makes it easy to talk every day and hang out more
						often.
					</Text>
				</GridItem>

				<GridItem colSpan={{ base : 5 }} w="full">
					<Stack
						direction={{
							base : "column",
							lg   : "row"
						}}
						justify="center"
						spacing="6"
					>
						<Button maxW={`${259 / 16}rem`} w="91.18%" whiteSpace="normal">
							<DownloadIcon mr="2" />
							Download for {userOs}
						</Button>
						<Button
							display="block"
							maxW={`${316 / 16}rem`}
							variant="dark"
							whiteSpace="normal"
						>
							Open Discord in your browser
						</Button>
					</Stack>
				</GridItem>
			</Grid>

			<ChillShoes ml="-40"/>
		</Center>
	);
};

export default HomeHero;
