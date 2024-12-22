import { contactInfo } from "@/lib/data";
import { jetbrainsMono } from "@/lib/font";

const ContactLayout = () => {
	return (
		<section className={`container mx-auto my-12 ${jetbrainsMono.className}`}>
			<h2
				id='contact'
				className={`text-accent mb-8 font-bold text-4xl ${jetbrainsMono.className}`}>
				{"<contact>"}
			</h2>
			<div className='bg-[#27272c] rounded-xl p-8'>
				<h3 className='text-4xl text-accent mb-10'>Let's work together</h3>

				<ul className='flex flex-col xl:flex-row gap-10'>
					{contactInfo.map((item, index) => (
						<li key={index} className='flex items-center gap-4'>
							<div className='w-[50px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
								<div className='text-[28px]'>
									<item.icon />
								</div>
							</div>
							<div className='flex-1'>
								<p className='text-white/60'>{item.title}</p>
								<h3 className='text-xl'>{item.description}</h3>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ContactLayout;
