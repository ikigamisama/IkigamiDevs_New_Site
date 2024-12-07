import Link from "next/link";
import { Button } from "@/components/atoms/ui/button";
import MobileNav from "@/components/molecules/Navigation/MobileNav";
import Nav from "@/components/molecules/Navigation/Nav";
import { jetbrainsMono } from "@/lib/font";
import Image from "next/image";

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<Image
						src='/assets/main-logo.png'
						width={100}
						height={100}
						alt='main-logo'
						className='w-[130px] sm:w-auto'
						priority
					/>
				</Link>
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
				</div>

				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
