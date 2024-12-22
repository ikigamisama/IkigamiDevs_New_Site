import Socials from "@/components/molecules/Socials/Main";
import Photo from "@/components/molecules/Photo/Main";
import Stats from "@/components/molecules/Stats/Main";
import ResumeLayout from "@/components/templates/ResumeLayout";
import ProjectLayout from "@/components/templates/ProjectLayout";
import ContactLayout from "@/components/templates/ContactLayout";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/atoms/ui/button";
import { jetbrainsMono, roboto_mono, space_mono } from "@/lib/font";

export default function Home() {
	return (
		<main className='h-full'>
			<section className='min-h-[85vh]'>
				<div className='container mx-auto h-full'>
					<div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
						<div className='text-center xl:text-left order-2 xl:order-none'>
							<span className={`text-md xl:text-lg ${space_mono.className}`}>
								Aspiring Software Developer / Data Analytics - Science
							</span>
							<h1 className='h1 mt-4 xl:mt-0 mb-6'>
								<span
									className={`text-[30px] xl:text-[45px] ${roboto_mono.className}`}>
									Yo, My name is
								</span>
								<br /> <span className='text-accent'>Franz Monzales</span>
							</h1>
							<p
								className={`max-w-full xl:max-w-[500px] mb-9 text-white/80 ${jetbrainsMono.className}`}>
								A seasoned Software Developer turned Data Analyst and aspiring
								Data Scientist, leveraging my technical background to uncover
								insights and drive data-driven decisions.
							</p>

							<div className='flex flex-col xl:flex-row items-center gap-8'>
								<Button
									variant='outline'
									size='lg'
									className={`uppercase flex items-center gap-2 ${space_mono.className}`}>
									<span>Download CV</span>
									<FiDownload className='text-xl' />
								</Button>
								<div className='mb-8 xl:mb-0'>
									<Socials
										containerStyles='flex gap-6'
										iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
									/>
								</div>
							</div>
						</div>
						<div className='order-1 xl:order-none mb-8 xl:mb-0'>
							<Photo />
						</div>
					</div>
				</div>

				<Stats />
			</section>

			<ResumeLayout />
			<ProjectLayout />
			<ContactLayout />
		</main>
	);
}
