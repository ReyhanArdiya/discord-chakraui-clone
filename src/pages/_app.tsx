import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import GlobalLayout from "../components/Layouts/GlobalLayout";
import theme from "../theme";
import Fonts from "../theme/Fonts";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<GlobalLayout>
				<Component {...pageProps} />
			</GlobalLayout>
		</ChakraProvider>
	);
};

export default MyApp;
