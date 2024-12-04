import Link from "next/link";
import { Button } from "@/components/atoms/ui/button";
import MobileNav from "@/components/molecules/Navigation/MobileNav";
import Nav from "@/components/molecules/Navigation/Nav";
import { jetbrainsMono } from "@/lib/font";

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<h1 className={`text-4xl font-semibold  ${jetbrainsMono.className}`}>
						Iki<span className='text-accent'>.</span>
					</h1>
				</Link>
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Link href='/contact'>
						<Button>Hire Me</Button>
					</Link>
				</div>

				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
