import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import useOs from "../../hooks/useOs";
import { ContentSectionLayoutVariants } from "../../theme/components/ContentSectionLayout";
import ContentSection from "./ContentSection";

const HomeContent = () => {
	const userOs = useOs();

	return (
		<Box as="section" id="content">
			<ContentSection
				image={{
					alt    : "chat-example",
					height : 440,
					layout : "intrinsic",
					src    : "/images/46b2132c01604c9493d558de444929f4.svg",
					width  : 678
				}}
				title="Create an invite-only place where you belong"
			>
					Discord servers are organized into topic-based channels
					where you can collaborate, share, and just talk about your
					day without clogging up a group chat.
			</ContentSection>

			<ContentSection
				bg="off-white.0"
				image={{
					alt    : "voices-example",
					height : 440,
					layout : "intrinsic",
					src    : "/images/575a0322f3b36ca2fecb23ad2c6dd5ad.svg",
					width  : 678
				}}
				title="Where hanging out is easy"
				variant={ContentSectionLayoutVariants.REVERSE}
			>
					Grab a seat in a voice channel when you&#x2019;re free.
					Friends in your server can see you&#x2019;re around and
					instantly pop in to talk without having to call.
			</ContentSection>

			<ContentSection
				image={{
					alt    : "users-example",
					height : 440,
					layout : "intrinsic",
					src    : "/images/921b1ae33edca174b6ebe787bb8b6c3b.svg",
					width  : 678
				}}
				title="From few to a fandom
					"
			>
					Get any community running with moderation tools and custom
					member access. Give members special powers, set up private
					channels, and more.
			</ContentSection>

			<VStack
				bg="off-white.0"
				px={{
					base : "6",
					md   : "10",
					lg   : "20"
				}}
				py={{
					base : "14",
					md   : "20",
					lg   : "40"
				}}
				textAlign={{
					base : "left",
					md   : "center"
				}}
			>
				<Heading as="h2" size="h2" variant="heavy">
						Reliable tech for staying close
				</Heading>
				<Text mt="6 !important">
						Low-latency voice and video feels like you’re in the
						same room. Wave hello over video, watch friends stream
						their games, or gather up and have a drawing session
						with screen share.
				</Text>
				<Box
					mt={{
						base : "6 !important",
						lg   : "4 !important"
					}}
				>
					<Image
						alt="group-example"
						height={530}
						layout="intrinsic"
						src="/images/98ea5b9e92e304c7d352ac462996adc5.svg"
						width={874}
					/>
				</Box>
			</VStack>

			<VStack
				bg="off-white.0"
				overflow="hidden"
				pb={{
					base : "14",
					md   : "20",
					lg   : `${120 / 16}rem`
				}}
				pos="relative"
				px={{
					base : "6",
					md   : "10",
					lg   : "20"
				}}
				spacing="10"
				textAlign={{
					base : "left",
					md   : "center"
				}}
			>
				<Box pos="absolute" w="max-content">
					<Image
						alt="group-example"
						height={49}
						layout="intrinsic"
						src="/images/a188414ce83f2454b9d71a47c3d95909.svg"
						width={531}
					/>
				</Box>
				<Heading
					as="h2"
					fontSize={`${32 / 16}rem`}
					mt={`${30 / 16}rem !important`}
					size="h2"
					variant="regular"
				>
						Ready to start your journey?
				</Heading>

				<Button
					maxW={`${259 / 16}rem`}
					variant="brand"
					w="full"
					whiteSpace="normal"
				>
					<DownloadIcon mr="2" />
						Download for {userOs}
				</Button>
			</VStack>
		</Box>
	);
};

export default HomeContent;
