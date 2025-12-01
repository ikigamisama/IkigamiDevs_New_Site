"use client";

import { jetbrainsMono, roboto_mono, space_mono } from "@/lib/font";
import { useState } from "react";
import { Button } from "../atoms/ui/button";
import Link from "next/link";
import dayjs from "dayjs";
import { Avatar, AvatarImage } from "../atoms/ui/avatar";
import { project } from "@/lib/data";

const ProjectLayout = () => {
	const [posts, _] = useState<any[]>(project);

	return (
		<section className='h-full flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<h2
					id='project'
					className={`mt-4 mb-8 text-accent font-bold text-4xl ${jetbrainsMono.className}`}>
					{"<project>"}
				</h2>

				<p
					className={`text-white/60 mx-auto xl:mx-0 text-center lg:text-justify ${jetbrainsMono.className}`}>
					This project blog showcases practical work in data automation and
					pipeline engineering. It covers topics such as streamlining data
					workflows, extracting insights from structured sources, and building
					robust ETL systems. With a focus on operational efficiency and
					scalable architecture, the blog serves as a clear and hands-on guide
					for turning raw data into reliable, organized information.
				</p>

				<h2 className={`my-8 text white text-3xl ${jetbrainsMono.className}`}>
					Highlight Projects
				</h2>

				<ul className='my-7 flex flex-col'>
					{posts.map((post, index) => {
						const dateOnly = dayjs(post.created_at).format("MMMM DD, YYYY");
						return (
							<li key={index} className='startup-card group my-4'>
								<div className='flex-between'>
									<p className={`startup-card_date ${roboto_mono.className}`}>
										{dateOnly}
									</p>
									<Avatar className=' w-[48px] h-[48px] flex items-center'>
										<AvatarImage
											src={`${post.avatar_url}`}
											alt='IkiBoy'
											className='object-cover'
										/>
									</Avatar>
								</div>

								<div className='flex-between mt-5 gap-5'>
									<div className='flex-1'>
										<p
											className={`text-16-medium line-clamp-1 ${jetbrainsMono.className}`}>
											{post.category.split(", ")[0]}
										</p>
										<Link target='_blank' href={`${post.link}`}>
											<h3
												className={`text-26-semibold line-clamp-2 ${roboto_mono.className}`}>
												{post.title}
											</h3>
										</Link>
									</div>
								</div>
								<p className={`startup-card_desc ${roboto_mono.className}`}>
									{post.description}
								</p>

								<img
									src={`${post.image_link}`}
									alt='placeholder'
									className='startup-card_img'
								/>

								<div className='flex-between gap-3 mt-5'>
									<div></div>
									<Button
										className={`startup-card_btn text-white ${space_mono.className}`}
										asChild>
										<Link target='_blank' href={`${post.link}`}>
											Go To Github
										</Link>
									</Button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default ProjectLayout;
