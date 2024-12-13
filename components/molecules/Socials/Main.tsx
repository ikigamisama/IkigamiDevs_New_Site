import { socials } from "@/lib/data";
import Link from "next/link";

interface socialProp {
	containerStyles: string;
	iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: socialProp) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link
					key={index}
					href={item.path}
					className={iconStyles}
					target='_blank'>
					<item.icon />
				</Link>
			))}
		</div>
	);
};

export default Socials;
