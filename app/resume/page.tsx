"use client";

import Image from "next/image";
import Link from "next/link";

import { jetbrainsMono, roboto_mono } from "@/lib/font";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/ui/button";
import { ScrollArea } from "@/components/atoms/ui/scroll-area";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/atoms/ui/tabs";
import {
	about,
	education,
	experience,
	resumeTabList,
	skills,
} from "@/lib/data";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/atoms/ui/tooltip";
import { IoDownloadOutline } from "react-icons/io5";
import { AiOutlineLink } from "react-icons/ai";

const Resume = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'>
					<TabsList className='flex flex-col w-full max-w-full xl:max-w-[380px] max-auto xl:mx-0 gap-6'>
						{resumeTabList.map((tab, index) => (
							<TabsTrigger
								key={index}
								value={tab.value}
								className={`${roboto_mono.className}`}>
								{tab.name}
							</TabsTrigger>
						))}
					</TabsList>
					<div className='min-h-[70vh] w-full'>
						<TabsContent value='experience' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h1 className={`text-4xl font-bold ${roboto_mono.className}`}>
									{experience.title}
								</h1>
								<p
									className={` text-white/60 mx-auto xl:mx-0 text-center lg:text-justify ${jetbrainsMono.className}`}>
									{experience.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[25px]'>
										{experience.info?.map((item, index) => (
											<li
												key={index}
												className='bg-[#232329] h-[185px] py-2 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
												<span
													className={`text-accent ${roboto_mono.className}`}>
													{item.duration}
												</span>
												<h1
													className={`text-lg font-bold max-w-[260px] min-h-[75px] text-center lg:text-left ${jetbrainsMono.className}`}>
													{item.position}
												</h1>

												<div className='flex items-center gap-3'>
													<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
													<p
														className={`text-white/60 ${jetbrainsMono.className}`}>
														{item.company}
													</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value='education' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h1 className={`text-4xl font-bold ${roboto_mono.className}`}>
									{education.title}
								</h1>
								<p
									className={` text-white/60 mx-auto xl:mx-0 text-center lg:text-justify ${jetbrainsMono.className}`}>
									{education.description}
								</p>
								<ScrollArea className='h-full xl:h-[450px]'>
									<ul className='grid grid-cols-1 gap-[30px]'>
										{education.list?.map((item, index) => (
											<li
												key={index}
												className='bg-[#232329] w-full h-full py-4 px-6 rounded-xl'>
												<h1
													className={`text-xl font-bold w-full mb-4 text-center lg:text-left ${jetbrainsMono.className}`}>
													{item.name}
												</h1>

												<Image
													src={item.img}
													className='w-full object-contain mb-8'
													alt={item.name}
													width='400'
													height='200'
												/>

												<div className='flex flex-row mb-2 gap-4'>
													<Button asChild>
														<Link href={item.link}>
															<AiOutlineLink className='mr-2' /> Link
														</Link>
													</Button>
													<Button variant='outline' asChild>
														<Link href={item.img}>
															<IoDownloadOutline className='mr-2' />
															Download Image
														</Link>
													</Button>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent value='skills' className='w-full h-full'>
							<div className='flex flex-col gap-[30px]'>
								<div className='flex flex-col gap-[30px] text-center xl:text-left'>
									<h1 className={`text-4xl font-bold ${roboto_mono.className}`}>
										{skills.title}
									</h1>
									<p
										className={` text-white/60 mx-auto xl:mx-0 text-center lg:text-justify ${jetbrainsMono.className}`}>
										{skills.description}
									</p>
								</div>

								<ScrollArea className='h-full xl:h-[450px]'>
									<div className='mb-8'>
										<h1
											className={`text-2xl font-bold mb-6 ${roboto_mono.className}`}>
											Data Science
										</h1>
										<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
											{skills.series?.map((skill, index) => {
												if (skill.type == "Data Science") {
													return (
														<li key={index}>
															<TooltipProvider delayDuration={100}>
																<Tooltip>
																	<TooltipTrigger className='w-full h-[150px] bg-[#232329] roundex-xl flex justify-center items-center group'>
																		<div className='text-7xl group-hover:text-accent transition-all duration-300'>
																			<skill.icon />
																		</div>
																	</TooltipTrigger>
																	<TooltipContent>
																		<p>{skill.name}</p>
																	</TooltipContent>
																</Tooltip>
															</TooltipProvider>
														</li>
													);
												}
											})}
										</ul>
									</div>
									<div className='mb-8'>
										<h1
											className={`text-2xl font-bold mb-6 ${roboto_mono.className}`}>
											Data Analyst
										</h1>
										<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
											{skills.series?.map((skill, index) => {
												if (skill.type == "Data Analyst") {
													return (
														<li key={index}>
															<TooltipProvider delayDuration={100}>
																<Tooltip>
																	<TooltipTrigger className='w-full h-[150px] bg-[#232329] roundex-xl flex justify-center items-center group'>
																		<div className='text-7xl group-hover:text-accent transition-all duration-300'>
																			<skill.icon />
																		</div>
																	</TooltipTrigger>
																	<TooltipContent>
																		<p>{skill.name}</p>
																	</TooltipContent>
																</Tooltip>
															</TooltipProvider>
														</li>
													);
												}
											})}
										</ul>
									</div>
									<div className='mb-8'>
										<h1
											className={`text-2xl font-bold mb-6 ${roboto_mono.className}`}>
											Web Development
										</h1>
										<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
											{skills.series?.map((skill, index) => {
												if (skill.type == "Web Development") {
													return (
														<li key={index}>
															<TooltipProvider delayDuration={100}>
																<Tooltip>
																	<TooltipTrigger className='w-full h-[150px] bg-[#232329] roundex-xl flex justify-center items-center group'>
																		<div className='text-7xl group-hover:text-accent transition-all duration-300'>
																			<skill.icon />
																		</div>
																	</TooltipTrigger>
																	<TooltipContent>
																		<p>{skill.name}</p>
																	</TooltipContent>
																</Tooltip>
															</TooltipProvider>
														</li>
													);
												}
											})}
										</ul>
									</div>
								</ScrollArea>
							</div>
						</TabsContent>
						<TabsContent
							value='about'
							className='w-full text-center xl:text-left'>
							<div className='flex flex-col gap-[30px]'>
								<h1 className={`text-4xl font-bold ${roboto_mono.className}`}>
									{about.title}
								</h1>
								<p
									className={` text-white/60 mx-auto xl:mx-0 text-center lg:text-justify ${jetbrainsMono.className}`}>
									{about.description}
								</p>
								<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 w-full max-auto xl:mx-0'>
									{about.items?.map((item, index) => (
										<li
											key={index}
											className='flex items-center justify-center xl:justify-start gap-4'>
											<span
												className={`text-white/60 ${roboto_mono.className}`}>
												{item.fieldName}
											</span>
											<span className={`text-xl ${jetbrainsMono.className}`}>
												{item.fieldValue}
											</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.section>
	);
};

export default Resume;
