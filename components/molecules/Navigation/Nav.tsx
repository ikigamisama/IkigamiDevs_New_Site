"use client";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import { roboto_mono } from "@/lib/font";

const Nav = () => {
	const pathname = usePathname();

	const handleScrollTo = (id: string) => {
		const target = document.getElementById(id);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to target
		}
	};

	return (
		<nav className='flex gap-8'>
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
							link.path === pathname && "text-accent border-b-2 border-accent"
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
							link.path === pathname && "text-accent border-b-2 border-accent"
						} font-medium hover:text-accent transition-all ${
							roboto_mono.className
						}`}>
						{link.name}
					</button>
				);
			})}
		</nav>
	);
};

export default Nav;
