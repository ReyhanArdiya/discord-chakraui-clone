import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../theme";
import Fonts from "../theme/Fonts";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
