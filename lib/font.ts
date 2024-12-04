import {
	Lato,
	Roboto_Mono,
	Space_Mono,
	JetBrains_Mono,
} from "next/font/google";

export const roboto_mono = Roboto_Mono({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	variable: "--font_roboto_mono",
});

export const space_mono = Space_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font_mono",
});

export const lato = Lato({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
	variable: "--font_lato",
});

export const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font_jetbrainsMono",
});
