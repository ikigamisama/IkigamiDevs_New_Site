"use client";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import { roboto_mono } from "@/lib/font";

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className='flex gap-8'>
			{navLinks.map((link, index) => (
				<Link
					key={index}
					href={link.path}
					className={`${
						link.path === pathname && "text-accent border-b-2 border-accent"
					}  font-medium hover:text-accent transition-all ${
						roboto_mono.className
					}`}>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
