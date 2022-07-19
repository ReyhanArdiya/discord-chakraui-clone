import { type NextPage } from "next";
import HomeContent from "../components/ContentSection/HomeContent";
import HomeHero from "../components/Heroes/HomeHero";

const HomePage: NextPage = () => {
	return (
		<>
			<HomeHero />
			<HomeContent/>
		</>
	);
};

export default HomePage;
