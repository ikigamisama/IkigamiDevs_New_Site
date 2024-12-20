import ProjectLayout from "@/components/templates/ProjectLayout";

export const metadata = {
	title: "Project - Franz Monzales",
	description: "The Resume Page of Franz Monzales Website Portfoilo ",
	openGraph: {
		title: "Project - Franz Monzales",
		description: "The Project Page of Franz Monzales Website Portfoilo",
		siteName: "Franz Monzales",
		url: "https://ikigami-devs.vercel.app",
		images: ["https://ikigami-devs.vercel.app/assets/images/main-banner.jpg"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Project - Franz Monzales",
		description: "The Project Page of Franz Monzales Website Portfoilo",
		creator: "@iikigami",
		images: ["https://ikigami-devs.vercel.app/assets/images/main-banner.jpg"],
	},
};

const Project = () => {
	return <ProjectLayout />;
};

export default Project;
