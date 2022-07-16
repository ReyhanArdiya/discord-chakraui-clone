import { css, Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={css`
			@font-face {
				font-family: Whitney;
				font-weight: 300;
				src: url("/fonts/6c6374bad0b0b6d204d8d6dc4a18d820.woff")
					format("woff");
			}

			@font-face {
				font-family: Whitney;
				font-weight: 400;
				src: url("/fonts/e8acd7d9bf6207f99350ca9f9e23b168.woff")
					format("woff");
			}

			@font-face {
				font-family: Whitney;
				font-weight: 500;
				src: url("/fonts/3bdef1251a424500c1b3a78dea9b7e57.woff")
					format("woff");
			}

			@font-face {
				font-family: Whitney;
				font-weight: 600;
				src: url("/fonts/be0060dafb7a0e31d2a1ca17c0708636.woff")
					format("woff");
			}

			@font-face {
				font-family: Whitney;
				font-weight: 700;
				src: url("/fonts/8e12fb4f14d9c4592eb8ec9f22337b04.woff")
					format("woff");
			}

			@font-face {
				font-family: Whitney;
				font-style: italic;
				font-weight: 400;
				src: url("/fonts/fe89b2b49c21616996ca5f421f6533fd.woff")
					format("woff");
			}

			@font-face {
				font-family: ArchivoBlack;
				src: url("/fonts/b3d2cec6ac615af28f624365ce84fbef.woff")
					format("woff");
			}

			@font-face {
				font-family: Reenie Beanie;
				src: url("/fonts/4b861c4f9cb4e4fbec1662f6c6e9186f.woff")
					format("woff");
			}

			@font-face {
				font-family: SourceCodePro;
				font-weight: 400;
				src: url("/fonts/748ac49ebe4bf0ddfe85c005be7c64c4.woff")
					format("woff");
			}

			@font-face {
				font-family: Ginto Nord;
				font-weight: 500;
				src: url("/fonts/64f5045e7c47202da327cadef3c611d1.woff2")
						format("woff2"),
					url("/fonts/e4308d367bcb6c91660d8618148e307d.woff")
						format("woff");
			}

			@font-face {
				font-family: Ginto Nord;
				font-weight: 800;
				src: url("/fonts/ae7c84783ad48b6d1c8e2bfbe707e0d4.woff2")
						format("woff2"),
					url("/fonts/92e32db984c8577d8b81548b43b9c061.woff")
						format("woff");
			}

			@font-face {
				font-family: Ginto Normal;
				font-weight: 400;
				src: url("/fonts/57e5e55cf0143736ceab51ac0a9ebb54.woff2")
						format("woff2"),
					url("/fonts/32c4f766e4892c054dfd367dbe0fc6dc.woff")
						format("woff");
			}

			@font-face {
				font-family: Ginto Normal;
				font-weight: 500;
				src: url("/fonts/e215f61cbbc2e49cea6121e0d2679aa2.woff2")
						format("woff2"),
					url("/fonts/88055567e3d928bcb1e67e967081572e.woff")
						format("woff");
			}

			@font-face {
				font-family: Ginto Normal;
				font-weight: 700;
				src: url("/fonts/1cce82154216dc3cb04a84d011ce1201.woff2")
						format("woff2"),
					url("/fonts/746a4f241e03deffc59b08c5650cf458.woff")
						format("woff");
			}
		`}
	/>
);

export default Fonts;
