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
					{navLinks.map((link, index) => (
						<Link
							href={link.path}
							key={index}
							className={`${
								link.path === pathname && "text-accent border-b-2 border-accent"
							} text-xl hover:text-accent transition-all ${
								roboto_mono.className
							}`}>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
