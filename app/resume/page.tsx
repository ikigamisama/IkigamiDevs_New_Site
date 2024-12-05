import ResumeLayout from "@/components/templates/ResumeLayout";

export const metadata = {
	title: "Resume - Franz Monzales",
	description: "The Resume Page of Franz Monzales Website Portfoilo ",
	openGraph: {
		title: "Resume - Franz Monzales",
		description: "The Resume Page of Franz Monzales Website Portfoilo",
		siteName: "Franz Monzales",
		url: "https://ikigami-devs.vercel.app",
		images: ["https://ikigami-devs.vercel.app/assets/images/main-banner.jpg"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Resume - Franz Monzales",
		description: "The Resume Page of Franz Monzales Website Portfoilo",
		creator: "@iikigami",
		images: ["https://ikigami-devs.vercel.app/assets/images/main-banner.jpg"],
	},
};

const Resume = () => {
	return <ResumeLayout />;
};

export default Resume;
