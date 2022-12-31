import Link from 'next/link';

import { w } from 'windstitch';

const NavItem = w(Link, {
	className: `
        font-normal 
        hover:text-pallete-primary 
        hover:bg-zinc-800 
        focus-visible:border-none 
        focus-visible:text-pallete-primary 
        focus-visible:bg-zinc-800 
        transition-all 
        py-1 
        px-2 
        rounded-lg
        outline-none
    `,
});

const Container = w.header('flex justify-between w-full px-[8vw] py-8 ');

const Header = () => {
	return (
		<Container>
			<Link href="/" className="text-xl outline-none">
				Jaiane Oliveira
			</Link>

			<nav className="flex gap-8 ">
				<NavItem href="#">Início</NavItem>
				<NavItem href="#">Projetos</NavItem>
				<NavItem href="#">Stack</NavItem>
				<NavItem href="#">Blog</NavItem>
				<NavItem href="#">Contato</NavItem>
			</nav>
		</Container>
	);
};

export default Header;
