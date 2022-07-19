import { Grid, GridItem } from "@chakra-ui/react";
import FooterList from "./FooterList";

const FooterContent = () => {
	return (
		<Grid
			rowGap="10"
			templateColumns={{
				base : "repeat(2, 50%)",
				lg   : "repeat(4, 1fr)"
			}}
			w="full"
		>
			<GridItem>
				<FooterList
					links={[
						{
							href : "/download",
							text : "Download"
						},
						{
							href : "/nitro",
							text : "Nitro"
						},
						{
							href : "/status",
							text : "Status"
						}
					]}
					title="Product"
				/>
			</GridItem>

			<GridItem>
				<FooterList
					links={[
						{
							href : "/about",
							text : "About"
						},
						{
							href : "/jobs",
							text : "Jobs"
						},
						{
							href : "/branding",
							text : "Branding"
						},
						{
							href : "/newsroom",
							text : "Newsroom"
						}
					]}
					title="Company"
				/>
			</GridItem>

			<GridItem>
				<FooterList
					links={[
						{
							href : "/College",
							text : "College"
						},
						{
							href : "/Support",
							text : "Support"
						},
						{
							href : "/Safety",
							text : "Safety"
						},
						{
							href : "/Blog",
							text : "Blog"
						},
						{
							href : "/Feedback",
							text : "Feedback"
						},
						{
							href : "/Developers",
							text : "Developers"
						},
						{
							href : "/StreamKit",
							text : "StreamKit"
						}
					]}
					title="Resources"
				/>
			</GridItem>

			<GridItem>
				<FooterList
					links={[
						{
							href : "/Terms",
							text : "Terms"
						},
						{
							href : "/Privacy",
							text : "Privacy"
						},
						{
							href : "/Cookie Settings",
							text : "Cookie Settings"
						},
						{
							href : "/Guidelines",
							text : "Guidelines"
						},
						{
							href : "/Acknowledgements",
							text : "Acknowledgements"
						},
						{
							href : "/Licenses",
							text : "Licenses"
						},
						{
							href : "/Moderation",
							text : "Moderation"
						}
					]}
					title="Policies"
				/>
			</GridItem>
		</Grid>
	);
};

export default FooterContent;
