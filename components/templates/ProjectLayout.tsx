"use client";

import { jetbrainsMono, roboto_mono, space_mono } from "@/lib/font";
import { useEffect, useState } from "react";
import { Button } from "../atoms/ui/button";
import Link from "next/link";
import { Skeleton } from "../atoms/ui/skeleton";
import dayjs from "dayjs";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/ui/avatar";
import { convertToTitle } from "@/lib/string";

const ProjectLayout = () => {
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch("/api/posts");
				const result = await res.json();
				if (res.ok) {
					setPosts(result.data);
				} else {
					console.error("Error fetching posts:", result.error);
				}
			} catch (error) {
				console.error("Error fetching posts:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return (
		<section className='h-full flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<h2
					id='project'
					className={`mt-4 mb-8 text-accent font-bold text-4xl ${jetbrainsMono.className}`}>
					{"<project>"}
				</h2>

				<p
					className={` text-white/60 mx-auto xl:mx-0 text-center lg:text-justify ${jetbrainsMono.className}`}>
					Showcasing exciting work in Data Analysis and Machine Learning, this
					project blog covers topics such as automating data tasks, detecting
					patterns, and building predictive models. By combining practical
					analysis techniques with cutting-edge machine learning, the blog aims
					to turn raw data into actionable insights. Whether exploring trends or
					crafting algorithms, it provides a clear, insightful guide to
					mastering data-driven projects.
				</p>

				<h2 className={`my-8 text white text-3xl ${jetbrainsMono.className}`}>
					Highlight Projects
				</h2>

				<ul className='my-7 card_grid'>
					{loading ? (
						<>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
						</>
					) : (
						posts.map((post, index) => {
							const dateOnly = dayjs(post.created_at).format("MMMM DD, YYYY");
							const avatar_fallback = `${post?.Author?.first_name[0]}${post?.Author?.last_name[0]}`;
							if (post.category.includes("Highlight")) {
								return (
									<li key={index} className='startup-card group'>
										<div className='flex-between'>
											<p
												className={`startup-card_date ${roboto_mono.className}`}>
												{dateOnly}
											</p>
											<Avatar className=' w-[48px] h-[48px] flex items-center'>
												{post?.Author?.avatar_url === null ? (
													<AvatarFallback className='bg-primary text-white text-5xl'>
														{avatar_fallback}
													</AvatarFallback>
												) : (
													<AvatarImage
														src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${post?.Author?.avatar_url}`}
														alt={avatar_fallback}
														className='object-cover'
													/>
												)}
											</Avatar>
										</div>

										<div className='flex-between mt-5 gap-5'>
											<div className='flex-1'>
												<p
													className={`text-16-medium line-clamp-1 ${jetbrainsMono.className}`}>
													{post.category.split(", ")[0]}
												</p>
												<Link
													href={`https://ikigami-project-blog.vercel.app/posts/`}>
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
												<Link
													target='_blank'
													href={`https://ikigami-project-blog.vercel.app/posts/${post.slug_title}`}>
													Go To Blog
												</Link>
											</Button>
										</div>
									</li>
								);
							}
						})
					)}
				</ul>
				<h2 className={`my-8 text white text-3xl ${jetbrainsMono.className}`}>
					Stratascratch Data Projects
				</h2>
				<ul className='my-7 card_grid'>
					{loading ? (
						<>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
						</>
					) : (
						posts.map((post, index) => {
							const dateOnly = dayjs(post.created_at).format("MMMM DD, YYYY");
							const avatar_fallback = `${post?.Author?.first_name[0]}${post?.Author?.last_name[0]}`;
							if (post.category.includes("Stratascratch")) {
								return (
									<li key={index} className='startup-card group'>
										<div className='flex-between'>
											<p
												className={`startup-card_date ${roboto_mono.className}`}>
												{dateOnly}
											</p>
											<Avatar className=' w-[48px] h-[48px] flex items-center'>
												{post?.Author?.avatar_url === null ? (
													<AvatarFallback className='bg-primary text-white text-5xl'>
														{avatar_fallback}
													</AvatarFallback>
												) : (
													<AvatarImage
														src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${post?.Author?.avatar_url}`}
														alt={avatar_fallback}
														className='object-cover'
													/>
												)}
											</Avatar>
										</div>

										<div className='flex-between mt-5 gap-5'>
											<div className='flex-1'>
												<p
													className={`text-16-medium line-clamp-1 ${jetbrainsMono.className}`}>
													{convertToTitle(post.secondary_category)}
												</p>
												<Link
													href={`https://ikigami-project-blog.vercel.app/posts/`}>
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
												<Link
													target='_blank'
													href={`https://ikigami-project-blog.vercel.app/posts/${post.slug_title}`}>
													Go To Blog
												</Link>
											</Button>
										</div>
									</li>
								);
							}
						})
					)}
				</ul>
				<h2 className={`my-8 text white text-3xl ${jetbrainsMono.className}`}>
					Other Projects
				</h2>
				<ul className='my-7 card_grid'>
					{loading ? (
						<>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
							<li className='group'>
								<Skeleton className='w-full h-[400px]' />
							</li>
						</>
					) : (
						posts.map((post, index) => {
							const dateOnly = dayjs(post.created_at).format("MMMM DD, YYYY");
							const avatar_fallback = `${post?.Author?.first_name[0]}${post?.Author?.last_name[0]}`;
							if (!post.category.includes("Highlight")) {
								return (
									<li key={index} className='startup-card group'>
										<div className='flex-between'>
											<p
												className={`startup-card_date ${roboto_mono.className}`}>
												{dateOnly}
											</p>
											<Avatar className=' w-[48px] h-[48px] flex items-center'>
												{post?.Author?.avatar_url === null ? (
													<AvatarFallback className='bg-primary text-white text-5xl'>
														{avatar_fallback}
													</AvatarFallback>
												) : (
													<AvatarImage
														src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${post?.Author?.avatar_url}`}
														alt={avatar_fallback}
														className='object-cover'
													/>
												)}
											</Avatar>
										</div>

										<div className='flex-between mt-5 gap-5'>
											<div className='flex-1'>
												<p
													className={`text-16-medium line-clamp-1 ${jetbrainsMono.className}`}>
													{post.category.split(", ")[0]}
												</p>
												<Link
													href={`https://ikigami-project-blog.vercel.app/posts/`}>
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
												<Link
													target='_blank'
													href={`https://ikigami-project-blog.vercel.app/posts/${post.slug_title}`}>
													Go To Blog
												</Link>
											</Button>
										</div>
									</li>
								);
							}
						})
					)}
				</ul>
			</div>
		</section>
	);
};

export default ProjectLayout;
