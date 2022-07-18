import { type NextPage } from "next";
import Content from "../components/ContentSection/Content";
import HomeHero from "../components/Heroes/HomeHero";

const HomePage: NextPage = () => {
	return (
		<>
			<HomeHero />
			<Content/>
		</>
	);
};

export default HomePage;
