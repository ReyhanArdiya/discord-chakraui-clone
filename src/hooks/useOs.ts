import { useEffect, useState } from "react";
import getOS from "../utils/getOS";

/**
 * Wrapper hook over {@link getOS} to be used when rerendering on client side
 * (e.g. using this in custom `MyApp`)
 */
const useOs = () => {
	const [ os, setOs ] = useState<string>();

	useEffect(() => setOs(getOS()), []);

	return os;
};

export default useOs;
