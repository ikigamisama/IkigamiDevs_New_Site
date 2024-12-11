import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import {
	FaBrain,
	FaChartBar,
	FaChartPie,
	FaDatabase,
	FaFileExcel,
	FaGithub,
	FaLinkedin,
	FaPython,
	FaVuejs,
	FaYoutube,
} from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
	SiNextdotjs,
	SiTypescript,
	SiLaravel,
	SiFastapi,
	SiSocketdotio,
	SiMysql,
	SiPostgresql,
	SiTensorflow,
	SiScikitlearn,
	SiPandas,
} from "react-icons/si";
import { HiDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { GiArtificialIntelligence, GiMeshNetwork } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

type NavLinks = { name: string; path: string };
type SocialType = { icon: IconType; path: string };
type StatsType = { num: number; text: string };

type ResumeListItemsType = { fieldName: string; fieldValue: string };
type ResumeSkillListType = { name: string; img: string; link: string };
type ResumeTabList = { value: string; name: string };
type ResumeSeriesListType = { icon: IconType; type: string; name: string };

type ResumeType = {
	title: string;
	description: string;
	items?: ResumeListItemsType[];
	info?: ResumeListInfoType[];
	list?: ResumeSkillListType[];
	series?: ResumeSeriesListType[];
};

type ResumeListInfoType = {
	company?: string;
	position?: string;
	duration?: string;
	institution?: string;
	degree?: string;
};
export const navLinks: NavLinks[] = [
	{
		name: "<home>",
		path: "/",
	},
	{
		name: "<resume>",
		path: "/resume",
	},
	{
		name: "<project>",
		path: "/project",
	},
	{
		name: "<blog>",
		path: "https://ikigami-project-blog.vercel.app",
	},
	{
		name: "<contact>",
		path: "/contact",
	},
];

export const socials: SocialType[] = [
	{ icon: FaGithub, path: "/" },
	{ icon: FaLinkedin, path: "/" },
	{ icon: FaYoutube, path: "/" },
	{ icon: FaXTwitter, path: "/" },
];

export const stats: StatsType[] = [
	{ num: 5, text: "Years of Experience" },
	{ num: 80, text: "Repository" },
	{ num: 20, text: "Data Projects Completed" },
	{ num: 200, text: "Code Commits" },
];

export const about: ResumeType = {
	title: "About me",
	description:
		"I’m a naturally curious individual who thrives on exploring complex systems and finding innovative solutions. My analytical mindset drives me to dig deep into challenges, whether in software development or data science, and connect abstract concepts to real-world applications. Adaptable and always eager to learn, I approach each project with an open mind, constantly evolving and seeking new ways to grow and improve",
	items: [
		{
			fieldName: "Name",
			fieldValue: "Franz Monzales",
		},
		{
			fieldName: "Experience",
			fieldValue: "5+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Filipino",
		},
		{
			fieldName: "Email",
			fieldValue: "ikigamidevs@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Filipino, Cebuano",
		},
	],
};

export const experience: ResumeType = {
	title: "My Experience",
	description:
		"With over 5 years of experience in software development, I specialize in full-stack web development, creating scalable and user-friendly applications. My expertise lies in leveraging cutting-edge frameworks like Next.js and React to deliver high-performance solutions that meet business needs and exceed user expectations.",
	info: [
		{
			company: "Acquirely",
			position: "Web Developer",
			duration: "July 2021 - Feb 2023",
		},
		{
			company: "Flatworld Solutions",
			position: "Web Developer",
			duration: "2019 - 2020",
		},
		{
			company: "Applicable Limited",
			position: "Front End Developer",
			duration: "2018 - 2019",
		},
		{
			company: "Maligaya Taxi",
			position: "IT Staff / Web Developer",
			duration: "Feb 2017 - Sept 2018",
		},
	],
};

export const education: ResumeType = {
	title: "My Education",
	description:
		"Driven by curiosity and a passion for learning, I’ve completed industry-recognized certifications in Data Analytics and Data Science from IBM and 365 Data Science through Coursera. These programs equipped me with hands-on skills in data analysis, visualization, and machine learning—empowering me to turn raw data into actionable insights.",
	list: [
		{
			name: "365 Data Science Certification",
			img: "/assets/certifications/Data_Science_365.PNG",
			link: "https://learn.365datascience.com/certificates/DD-DFAA0CDAE2/",
		},
		{
			name: "365 Data Analyst Certification",
			img: "/assets/certifications/Data_Analyst_365.PNG",
			link: "https://learn.365datascience.com/certificates/DD-46F49544DE/",
		},
		{
			name: "IBM Data Science",
			img: "/assets/certifications/Data_Science_IBM.PNG",
			link: "https://www.coursera.org/account/accomplishments/specialization/2QEGUBE3VTFZ",
		},
		{
			name: "IBM Data Analyst",
			img: "/assets/certifications/Data_Analyst_IBM.PNG",
			link: "https://www.coursera.org/account/accomplishments/specialization/7SNWN9YKGZVR",
		},
	],
};

export const skills: ResumeType = {
	title: "My Skills",
	description:
		"I bring a unique blend of expertise in software development and data science. With over 5 years of experience in full-stack development, I specialize in creating scalable, high-performance applications using frameworks like Next.js, React, and Node.js. My transition into data analytics and data science has equipped me with strong skills in Python, SQL, and visualization tools, enabling me to uncover insights from complex datasets. This combination of technical development and analytical expertise allows me to deliver impactful, data-driven solutions.",
	series: [
		{
			icon: FaReact,
			type: "Web Development",
			name: "React.JS",
		},
		{
			icon: SiNextdotjs,
			type: "Web Development",
			name: "Next.JS",
		},
		{
			icon: FaVuejs,
			type: "Web Development",
			name: "Vue.JS",
		},
		{
			icon: SiTypescript,
			type: "Web Development",
			name: "Typescript",
		},
		{
			icon: SiLaravel,
			type: "Web Development",
			name: "Laravel",
		},
		{
			icon: FaNodeJs,
			type: "Web Development",
			name: "Node.JS",
		},
		{
			icon: SiFastapi,
			type: "Web Development",
			name: "FastAPI",
		},
		{
			icon: SiSocketdotio,
			type: "Web Development",
			name: "Socket.io",
		},
		{
			icon: SiMysql,
			type: "Web Development",
			name: "MySQL",
		},
		{
			icon: SiPostgresql,
			type: "Web Development",
			name: "PostgreSQL",
		},

		{ icon: FaPython, type: "Data Science", name: "Python" },
		{ icon: SiTensorflow, type: "Data Science", name: "TensorFlow" },
		{ icon: SiScikitlearn, type: "Data Science", name: "Scikit-Learn" },
		{ icon: FaBrain, type: "Data Science", name: "Machine Learning" },
		{
			icon: GiArtificialIntelligence,
			type: "Data Science",
			name: "Deep Learning",
		},
		{ icon: FaDatabase, type: "Data Science", name: "Big Data" },
		{ icon: GiMeshNetwork, type: "Data Science", name: "Algorithms" },

		{ icon: SiMysql, type: "Data Analyst", name: "SQL" },
		{ icon: FaFileExcel, type: "Data Analyst", name: "Excel" },
		{ icon: SiPandas, type: "Data Analyst", name: "Pandas" },
		{ icon: FaChartPie, type: "Data Analyst", name: "Power BI" },
		{ icon: MdCleaningServices, type: "Data Analyst", name: "Data Cleaning" },
		{ icon: FiSettings, type: "Data Analyst", name: "Data Wrangling" },
		{ icon: HiDocumentReport, type: "Data Analyst", name: "Reporting" },
		{ icon: FaChartBar, type: "Data Analyst", name: "Statistics" },
	],
};

export const resumeTabList: ResumeTabList[] = [
	{
		value: "experience",
		name: "Experience",
	},
	{
		value: "education",
		name: "Education & Certifications",
	},
	{
		value: "skills",
		name: "Skills",
	},
	{
		value: "about",
		name: "About Me",
	},
];

export const contactInfo = [
	{
		icon: FaPhoneAlt,
		title: "Phone",
		description: "(+40) 312 654 876",
	},
	{
		icon: FaEnvelope,
		title: "Email",
		description: "ikigamidevs@gmail.com",
	},
	{
		icon: FaMapMarkedAlt,
		title: "Address",
		description: "Davao City, Phillippines",
	},
];
