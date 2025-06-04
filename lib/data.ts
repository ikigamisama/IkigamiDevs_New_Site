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
	FaKaggle,
	FaAmazon,
	FaDocker,
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
	SiScikitlearn,
	SiPandas,
	SiApacheairflow,
	SiApachespark,
	SiDuckdb,
} from "react-icons/si";
import { HiDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdCleaningServices } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { TbFileDatabase, TbHttpGet } from "react-icons/tb";

type NavLinks = { name: string; path: string };
type SocialType = { icon: IconType; path: string };
type StatsType = { num: number; text: string };
type CategoryOption = { value: string; label: string };

type ResumeListItemsType = { fieldName: string; fieldValue: string };
type ResumeSkillListType = { name: string; img: string; link: string };
type ResumeTabList = { value: string; name: string };
type ResumeSeriesListType = { icon: IconType; type: string; name: string };
type ProjectListType = {
	created_at: string;
	avatar_url: string;
	category: string;
	link: string;
	title: string;
	description: string;
	image_link: string;
};

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
		path: "#resume",
	},
	{
		name: "<project>",
		path: "#project",
	},
	{
		name: "<blog>",
		path: "https://ikigami-project-blog.vercel.app",
	},
	{
		name: "<contact>",
		path: "#contact",
	},
];

export const socials: SocialType[] = [
	{ icon: FaGithub, path: "https://github.com/ikigamisama" },
	{
		icon: FaLinkedin,
		path: "https://www.linkedin.com/in/franz-monzales-671775135",
	},

	{ icon: FaXTwitter, path: "https://x.com/ikigamidevs" },
	{ icon: FaKaggle, path: "https://www.kaggle.com/franzmonzales" },
];

export const stats: StatsType[] = [
	{ num: 5, text: "Years of Experience" },
	{ num: 100, text: "Repository" },
	{ num: 25, text: "Data Projects Completed" },
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
		"Driven by curiosity and a passion for learning, I’ve built a strong foundation in Data Analytics and Data Engineering through hands-on, industry-recognized certifications from IBM, DeepLearning.AI, and 365 Data Science. These programs covered key areas such as data analysis, data engineering, visualization, and machine learning—preparing me to design data pipelines, extract insights, and contribute to data-driven decision-making.",
	list: [
		{
			name: "DeepLearning.AI Data Engineering",
			img: "/assets/certifications/DataEngineering_Deeplearning.png",
			link: "https://www.coursera.org/account/accomplishments/professional-cert/1AT47XEDRYSM",
		},
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
		{ icon: SiApacheairflow, type: "Data Engineering", name: "Airflow" },
		{ icon: FaAmazon, type: "Data Engineering", name: "Amazon Web Services" },
		{ icon: FaDocker, type: "Data Engineering", name: "Docker" },
		{ icon: SiDuckdb, type: "Data Engineering", name: "DuckDB" },
		{ icon: SiApachespark, type: "Data Engineering", name: "Spark" },
		{ icon: BiLogoPostgresql, type: "Data Engineering", name: "PostgreSQL" },
		{ icon: SiPandas, type: "Data Engineering", name: "Pandas" },
		{ icon: TbFileDatabase, type: "Data Engineering", name: "ETL" },
		{ icon: TbHttpGet, type: "Data Engineering", name: "Web Scraping" },

		{ icon: SiMysql, type: "Data Analyst", name: "SQL" },
		{ icon: FaFileExcel, type: "Data Analyst", name: "Excel" },
		{ icon: SiPandas, type: "Data Analyst", name: "Pandas" },
		{ icon: FaChartPie, type: "Data Analyst", name: "Power BI" },
		{ icon: MdCleaningServices, type: "Data Analyst", name: "Data Cleaning" },
		{ icon: FiSettings, type: "Data Analyst", name: "Data Wrangling" },
		{ icon: HiDocumentReport, type: "Data Analyst", name: "Reporting" },
		{ icon: FaChartBar, type: "Data Analyst", name: "Statistics" },
		{ icon: FaPython, type: "Data Science", name: "Python" },
		{ icon: SiScikitlearn, type: "Data Science", name: "Scikit-Learn" },
		{ icon: FaBrain, type: "Data Science", name: "Machine Learning" },
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
		description: "(+639) 671 840 625",
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

export const stratascratchCategory: CategoryOption[] = [
	{ value: "business-analysis", label: "Business Analysis" },
	{ value: "data-exploration", label: "Data Exploration" },
	{ value: "data-engineering", label: "Data Engineering" },
	{ value: "regression", label: "Regression" },
	{ value: "classification", label: "Classification" },
	{ value: "nlp", label: "NLP" },
	{ value: "clustering", label: "Clustering" },
];

export const project: ProjectListType[] = [
	{
		created_at: "2025-05-31T00:00:00Z",
		avatar_url:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/avatars/4971942f-5d8e-433a-a87e-2ed5f50c940e-0.5201631380654055.jpg",
		category: "Data Engineering",
		link: "https://github.com/ikigamisama/ETL_Web_Scrape_World_Data",
		title: "ETL Web Scrape World Data",
		description:
			"ETL_Web_Scrape_World_Data is a comprehensive web scraping ETL pipeline using Apache Airflow 3, Docker, and MinIO to automate the extraction and storage of global statistics from Worldometers.info. This pipeline collects 11 different categories of world data including demographics, economics, energy, environment, and geographic information.",
		image_link:
			"https://raw.githubusercontent.com/ikigamisama/ETL_Web_Scrape_World_Data/main/image.png",
	},

	{
		created_at: "2025-05-28T00:00:00Z",
		avatar_url:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/avatars/4971942f-5d8e-433a-a87e-2ed5f50c940e-0.5201631380654055.jpg",
		category: "Data Engineering",
		link: "https://github.com/ikigamisama/End-to-End-ETL-PySpark",
		title: "End to End ETL PySpark",
		description:
			"An end-to-end ETL pipeline implemented using Apache Airflow 3.0.1, Apache Spark, MinIO, and Docker, designed to ingest, transform, and load retail data into a DuckDB-based analytical environment..",
		image_link:
			"https://github.com/ikigamisama/End-to-End-ETL-PySpark/raw/main/assets/DAG.PNG",
	},

	{
		created_at: "2025-05-28T00:00:00Z",
		avatar_url:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/avatars/4971942f-5d8e-433a-a87e-2ed5f50c940e-0.5201631380654055.jpg",
		category: "Data Engineering",
		link: "https://github.com/ikigamisama/Data-Warehouse-Medallion",
		title: "Data Warehouse Medallion",
		description:
			"A local data pipeline setup using Docker Compose, built around the Medallion architecture. It integrates Apache Airflow 3.0.1, DuckDB, PostgreSQL, MinIO, Redis, Jupyter, and pgAdmin to support scalable orchestration, storage, and analysis workflows",
		image_link:
			"https://raw.githubusercontent.com/ikigamisama/Data-Warehouse-Medallion/main/assets/dag_df.PNG",
	},

	{
		created_at: "2025-06-03T00:00:00Z",
		avatar_url:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/avatars/4971942f-5d8e-433a-a87e-2ed5f50c940e-0.5201631380654055.jpg",
		category: "Data Engineering",
		link: "https://github.com/ikigamisama/ETL_Air_Quality",
		title: "Air Quality Data PH",
		description:
			"A Python ETL pipeline for collecting and processing air quality data from cities across the Philippines using the OpenWeatherMap API.",
		image_link:
			"https://raw.githubusercontent.com/ikigamisama/ETL_Air_Quality/main/image.png",
	},

	{
		created_at: "2025-06-03T00:00:00Z",
		avatar_url:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/avatars/4971942f-5d8e-433a-a87e-2ed5f50c940e-0.5201631380654055.jpg",
		category: "Data Engineering",
		link: "https://github.com/ikigamisama/ETL_PSE_EOD",
		title: "PSE EOD Data Scraper",
		description:
			"A Python ETL (Extract, Transform, Load) pipeline for scraping End-of-Day (EOD) stock data from the Philippine Stock Exchange (PSE) via the Investagrams API.",
		image_link:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/content//image_2025-06-04_224817972.png",
	},

	{
		created_at: "2025-05-07T00:00:00Z",
		avatar_url:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/avatars/4971942f-5d8e-433a-a87e-2ed5f50c940e-0.5201631380654055.jpg",
		category: "Data Engineering",
		link: "https://github.com/ikigamisama/Philippine-2025-Election-Candidate-Data",
		title: "Philippine 2025 Election Candidate Data",
		description:
			"This project focuses on collecting, cleaning, and modeling candidate information for the 2025 Philippine National Elections. It automates the data pipeline from raw ballot formats to a clean, structured dataset for analysis and further use.",
		image_link:
			"https://tdhghaslnufgtzjybhhf.supabase.co/storage/v1/object/public/content//DE%20Ballot.jpg",
	},
];
