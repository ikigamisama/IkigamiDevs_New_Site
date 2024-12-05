import "./globals.css";
import type { Metadata } from "next";
import { lato } from "@/lib/font";
import Header from "@/components/organisms/Header/Main";
import MainLayout from "@/components/templates/MainLayout";
import StairTransition from "@/components/molecules/StairTransition";

export const metadata: Metadata = {
	title: "Franz Monzales - Website Portfoilo",
	description: "Website Portfoilo of Franz Monzales",
	openGraph: {
		title: "Franz Monzales",
		description: "Official Website of Franz Monzales",
		siteName: "Franz Monzales",
		url: "https://ikigami-devs.vercel.app",
		images: ["https://ikigami-devs.vercel.app/assets/images/main-banner.jpg"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Franz Monzales",
		description: "Official Website of Franz Monzales",
		creator: "@iikigami",
		images: ["https://ikigami-devs.vercel.app/assets/images/main-banner.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${lato.className} antialiased`}>
				<Header />
				<StairTransition />
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
