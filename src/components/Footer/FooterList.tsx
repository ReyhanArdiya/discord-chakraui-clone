import {
	Heading,
	Link,
	ListItem,
	UnorderedList,
	VStack
} from "@chakra-ui/react";
import NextLink from "next/link";

export interface FooterListProps {
	links: {
		text: string;
		href: string;
	}[];
	title: string;
}

const FooterList = ({ title, links }: FooterListProps) => {
	const listItems = links.map(({ href, text }, i) => (
		<ListItem
			color="off-white.0"
			fontFamily="inherit"
			fontSize="inherit"
			fontWeight="inherit"
			key={i}
			listStyleType="none"
		>
			<NextLink href={href}>
				<Link >
					{text}
				</Link>
			</NextLink>
		</ListItem>
	));

	return (
		<VStack align="start" fontSize="md" fontWeight="normal">
			<UnorderedList m="0" spacing="2">
				<ListItem listStyleType="none">
					<Heading as="h4" color="brand.0" fontSize="inherit" fontWeight="inherit">
						{title}
					</Heading>
				</ListItem>
				{listItems}
			</UnorderedList>
		</VStack>
	);
};

export default FooterList;
