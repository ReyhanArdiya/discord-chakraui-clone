import { SlideFade } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

// CMT I could've made this a custom component, but I just wanted to test out if
// react hooks can return components
const useSlideFadeAnimation = (options?: IntersectionOptions) => {
	// const CustomizedSlideFade = SlideFade.bind(null, {
	// 	in      : inView,
	// 	offsetY : "30px",
	// 	ref     : ref
	// });

	const StyledSlideFade = ({ children }: { children: ReactNode }) => {
		const { ref, inView } = useInView({
			...options,
			threshold   : 0.3,
			triggerOnce : true,
		});

		return (
			<SlideFade in={inView} offsetY="30px" ref={ref}>
				{children}
			</SlideFade>
		);
	};

	return StyledSlideFade;
};

export default useSlideFadeAnimation;
