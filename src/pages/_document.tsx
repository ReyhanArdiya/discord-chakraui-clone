import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="/images/847541504914fd33810e70a0ea73177e.ico"
					rel="icon"
				/>
			</Head>
			<body>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
