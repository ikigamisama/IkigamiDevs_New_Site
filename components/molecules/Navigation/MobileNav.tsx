"use client";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/atoms/ui/sheet";
import { navLinks } from "@/lib/data";
import { jetbrainsMono, roboto_mono } from "@/lib/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
	const pathname = usePathname();

	const handleScrollTo = (id: string) => {
		const target = document.getElementById(id);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to target
		}
	};
	return (
		<Sheet>
			<SheetTrigger className="className='flex justify-center items-center'">
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>
			<SheetHeader>
				<SheetTitle></SheetTitle>
				<SheetDescription></SheetDescription>
			</SheetHeader>
			<SheetContent className='flex flex-col'>
				<div className='mt-32 mb-40 text-center text-2xl'>
					<Link href='/'>
						<h1
							className={`text-4xl font-semibold  ${jetbrainsMono.className}`}>
							Iki<span className='text-accent'>.</span>
						</h1>
					</Link>
				</div>
				<nav className='flex flex-col justify-center items-center gap-8'>
					{navLinks.map((link, index) => {
						const isExternalLink = link.path.startsWith("https://");
						const isHashLink = link.path.startsWith("#");

						return isExternalLink ? (
							<a
								key={index}
								href={link.path}
								target='_blank'
								rel='noopener noreferrer'
								className={`${
									link.path === pathname &&
									"text-accent border-b-2 border-accent"
								} font-medium hover:text-accent transition-all ${
									roboto_mono.className
								}`}>
								{link.name}
							</a>
						) : (
							<button
								key={index}
								onClick={() =>
									isHashLink ? handleScrollTo(link.path.substring(1)) : null
								}
								className={`${
									link.path === pathname &&
									"text-accent border-b-2 border-accent"
								} font-medium hover:text-accent transition-all ${
									roboto_mono.className
								}`}>
								{link.name}
							</button>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
