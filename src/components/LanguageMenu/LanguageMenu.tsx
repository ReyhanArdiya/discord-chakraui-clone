import {
	Box,
	HStack, Image, Popover, PopoverBody, PopoverContent, PopoverTrigger, VStack
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import Language, { LanguageProps } from "./Language";

interface Clickable {
    onClick?: MouseEventHandler;
}

export interface LanguageMenuProps {
	langs: Array<Omit<LanguageProps, "isSelected"> & Clickable>;
	selectedLang: LanguageProps;
}

const LanguageMenu = ({ selectedLang, langs }: LanguageMenuProps) => {
	const langComps = langs.map(({ image, name, onClick }, i) => <Box
		_hover={{
			bg : "rgba(79,84,92,.16)"
		}}
		borderRadius={`${4 / 16}rem`}
		boxSize="full"
		key={i}
		mt="0 !important"
		onClick={onClick}
		p="2"
	>
		<Language
			image={image}
			name={name}
		/>
	</Box>);

	return (
		<Popover isLazy>
			<PopoverTrigger>
				<HStack cursor="pointer" fontSize={`${14 / 16}rem`} spacing={0}>
					<Language
						image={selectedLang.image}
						isSelected
						name={selectedLang.name}
					/>
					<Image
						alt="down-arrow"
						pl="2"
						src="/images/779a770c34fcb823a598a7277301adaf.svg"
					/>
				</HStack>
			</PopoverTrigger>

			<PopoverContent
				borderRadius="lg"
				boxShadow="none !important"
				boxSize="max-content"
				outline="none !important"
				outlineOffset="0 !important"
			>
				<VStack
					as={PopoverBody}
					border="none"
					h="80"
					overflowY="auto"
					p="0"
					w={`${150 / 16}rem`}
				>
					{langComps}
				</VStack>
			</PopoverContent>
		</Popover>
	);
};

export default LanguageMenu;
