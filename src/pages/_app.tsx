import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import DarkModeButton from "../components/Buttons/DarkModeButton";
import GlobalLayout from "../components/Layouts/GlobalLayout";
import theme from "../theme";
import Fonts from "../theme/Fonts";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Head>
				<meta
					content="width=device-width, initial-scale=1.0"
					name="viewport"
				/>
				<title>Discord | Clone</title>
			</Head>
			<GlobalLayout>
				<Component {...pageProps} />
			</GlobalLayout>
			<DarkModeButton />
		</ChakraProvider>
	);
};

export default MyApp;
