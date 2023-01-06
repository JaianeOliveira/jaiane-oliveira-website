import Link from 'next/link';

import { w } from 'windstitch';

const NavItem = w.a(
	`
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
    `
);

const SocialLink = w(Link, {
	className: `
	hover:text-pallete-primary 
	bg-zinc-800 
	focus-visible:border-none 
	focus-visible:text-pallete-primary 
	transition-all 
	py-1 
	px-2 
	rounded-md
	outline-none
	`,
});

const Container = w.header('flex justify-between w-full px-[8vw] py-8 ');

const Header = () => {
	return (
		<Container>
			<Link href="/" className="text-xl outline-none font-light">
				Jaiane Oliveira
			</Link>

			<div className="flex items-center gap-8 invisible md:visible">
				<nav className="flex gap-8">
					<NavItem href="#home">Início</NavItem>
					<NavItem href="#projects">Projetos</NavItem>
					{/* <NavItem href="#stack">Stack</NavItem> */}
					<NavItem href="#contact">Contato</NavItem>
					{/* <Link href="/blog" legacyBehavior passHref>
						<NavItem>Blog</NavItem>
					</Link> */}
				</nav>
				{/* <nav className="flex items-center gap-2s">
					<SocialLink href="https://www.linkedlin.com/JaianeOliveira">
						L
					</SocialLink>
					<SocialLink href="https://www.github.com/JaianeOliveira">
						G
					</SocialLink>
				</nav> */}
			</div>
		</Container>
	);
};

export default Header;
