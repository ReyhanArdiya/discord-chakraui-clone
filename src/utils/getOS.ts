const getOS = () => {
	const osList = [ "Win", "Mac", "Linux", "Android", "like Mac" ] as const;

	for (const os of osList) {
		if (navigator.userAgent.search(new RegExp(os, "i")) >= 0) {
			return os;
		}
	}
};

export default getOS;


