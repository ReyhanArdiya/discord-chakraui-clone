export enum Colors {
	BRAND = "brand",
	GREYPLE = "greyple",
	DARK_NOT_BLACK = "dark-not-black",
	FOCUS_BORDER = "focus-border",
	STATUS_GREEN = "status-green",
	TEXT_LINK = "text-link",
	OFF_WHITE = "off-white",
	NOT_QUITE_BLACK = "not-quite-black",
	EKKO_RED = "ekko-red"
}

// CMT key 0 means it is the original color from discord's website
const colors = {
	[Colors.BRAND] : {
		"0"   : "#5865f2",
		"50"  : "#404eed",
		"100" : "#BDC2FA",
		"200" : "#929BF7",
		"300" : "#6873F3",
		"400" : "#3D4CF0",
		"500" : "#1225ED",
		"600" : "#0F1DBD",
		"700" : "#0B168E",
		"800" : "#070F5F",
		"900" : "#04072F"
	},
	[Colors.GREYPLE] : {
		"0"   : "#99aab5",
		"50"  : "#F0F3F4",
		"100" : "#D6DDE1",
		"200" : "#BBC6CE",
		"300" : "#A0B0BA",
		"400" : "#869AA7",
		"500" : "#6B8494",
		"600" : "#566976",
		"700" : "#404F59",
		"800" : "#2B353B",
		"900" : "#151A1E"
	},
	[Colors.DARK_NOT_BLACK] : {
		"0"   : "#2c2f33",
		"50"  : "#F1F2F3",
		"100" : "#D9DBDE",
		"200" : "#C0C4C9",
		"300" : "#A7ADB3",
		"400" : "#8F959E",
		"500" : "#767E89",
		"600" : "#5E656E",
		"700" : "#474C52",
		"800" : "#2F3237",
		"900" : "#18191B"
	},
	[Colors.FOCUS_BORDER] : {
		"0"   : "#00b0f4",
		"50"  : "#E5F8FF",
		"100" : "#B8EBFF",
		"200" : "#8ADEFF",
		"300" : "#5CD2FF",
		"400" : "#2EC5FF",
		"500" : "#00B8FF",
		"600" : "#0093CC",
		"700" : "#006E99",
		"800" : "#004A66",
		"900" : "#002533"
	},
	[Colors.STATUS_GREEN] : {
		"0"   : "#43b581",
		"50"  : "#ECF8F3",
		"100" : "#CBECDD",
		"200" : "#A9DFC7",
		"300" : "#88D3B1",
		"400" : "#66C79B",
		"500" : "#45BA85",
		"600" : "#37956A",
		"700" : "#297050",
		"800" : "#1C4A35",
		"900" : "#0E251B"
	},
	[Colors.TEXT_LINK] : {
		"0"   : "#00b0f4",
		"50"  : "#E5F8FF",
		"100" : "#B8EBFF",
		"200" : "#8ADEFF",
		"300" : "#5CD2FF",
		"400" : "#2EC5FF",
		"500" : "#00B8FF",
		"600" : "#0093CC",
		"700" : "#006E99",
		"800" : "#004A66",
		"900" : "#002533"
	},
	[Colors.OFF_WHITE] : {
		"0"   : "#f6f6f6",
		"50"  : "#F2F2F2",
		"100" : "#DBDBDB",
		"200" : "#C4C4C4",
		"300" : "#ADADAD",
		"400" : "#969696",
		"500" : "#808080",
		"600" : "#666666",
		"700" : "#4D4D4D",
		"800" : "#333333",
		"900" : "#1A1A1A"
	},
	[Colors.NOT_QUITE_BLACK] : {
		"0"   : "#23272a",
		"50"  : "#F1F2F3",
		"100" : "#D8DCDF",
		"200" : "#BFC5CA",
		"300" : "#A6AEB5",
		"400" : "#8D98A0",
		"500" : "#74818B",
		"600" : "#5D676F",
		"700" : "#464D53",
		"800" : "#2E3438",
		"900" : "#171A1C"
	},
	[Colors.EKKO_RED] : {
		"0"   : "#de2761",
		"50"  : "#FCE9EF",
		"100" : "#F6C1D2",
		"200" : "#EF99B5",
		"300" : "#E97197",
		"400" : "#E34A7A",
		"500" : "#DD225D",
		"600" : "#B11B4B",
		"700" : "#851438",
		"800" : "#580E25",
		"900" : "#2C0713"
	},

	"not-quite-black-rgb" : "35,39,42",
	// Already available in chakra
	// white                 : "#fff",
	// black                 : "#000",
};


export default colors;
