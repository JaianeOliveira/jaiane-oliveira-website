import Link from 'next/link';
import {
	DiscordLogo,
	Envelope,
	GithubLogo,
	LinkedinLogo,
	TelegramLogo,
} from 'phosphor-react';
import { w } from 'windstitch';
import BackToTopButton from '../components/BackToTopButton';
import Button from '../components/Button';
import Card from '../components/Carousel/Card';
import Header from '../components/Header';

const Avatar = w.img(
	`h-32 w-32 bg-zinc-700 rounded-full border-2 border-pallete-primary shadow-md`
);

const LogoItem = w.img(`w-12 h-12`);

const Section = w.section(`flex flex-col gap-4 py-16 px-[8vw] min-h-[70vh]`);

const SectionTitle = w.h2(`text-lg uppercase`);

const Home = () => {
	return (
		<div>
			<Header />
			<Section className="items-center" id="home">
				<Avatar src="https://www.github.com/jaianeoliveira.png" />
				<h1 className="text-xl font-medium text-center">
					Desenvolvedora de software fullstack
				</h1>
				<p className="text-center max-w-[60vw]">
					Desenvolvedora de software fullstack atuando no mercado a cerca de um
					ano e meio utilizando no front-end com tecnologias como React, React
					Native e NextJS e no backend com Node, Express e NestJS. Atualmente
					estou cursando Ciência da Computação pela Universidade Federal de
					Alagoas - UFAL e já sou Técnica em Informática para Internet pelo
					Instituto Federal de Alagoas - IFAL.
				</p>

				<div className="flex gap-8 my-12 overflow-x-auto hide-scrollbar	">
					<LogoItem src="/express.svg" alt="Express" />
					<LogoItem src="/nest.svg" alt="NestJS" />
					<LogoItem src="/nodejs.svg" alt="NodeJS" />
					<LogoItem src="/react.svg" alt="React" />
					<LogoItem src="/next.svg" alt="NextJS" />
					<LogoItem src="/javascript.svg" alt="Javascript" />
					<LogoItem src="/typescript.svg" alt="Typescript" />
				</div>
			</Section>
			<Section id="projects">
				<SectionTitle>Projetos em destaque</SectionTitle>
				<div className="cards-grid">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</Section>

			<Section id="contact">
				<h2 className="text-xl uppercase font-light self-center mb-4 text-center">
					Precisa de um DEV ? Entre em contato
				</h2>
				<div className="flex gap-4 self-center flex-wrap items-center justify-center w-full">
					<Button variant="gray" className="md:w-fit w-full">
						<LinkedinLogo weight="fill" /> Linkedin
					</Button>

					<Button variant="gray" className="md:w-fit w-full">
						<GithubLogo weight="fill" /> Github
					</Button>

					<Button variant="gray" className="md:w-fit w-full">
						<Envelope weight="fill" /> E-mail
					</Button>

					<Button variant="gray" className="md:w-fit w-full">
						<TelegramLogo weight="fill" /> Telegram
					</Button>

					<Button variant="gray" className="md:w-fit w-full">
						<DiscordLogo weight="fill" /> Discord
					</Button>
				</div>
			</Section>
			<footer className="px-[8vw] py-4 flex items-center justify-center gap-1 text-zinc-100 text-opacity-50 font-thin border-t border-zinc-800">
				<span>copyright &copy; 2023 </span>
				<Link target={'_blank'} href="https://www.github.com/jaianeoliveira">
					Jaiane Oliveira
				</Link>
			</footer>
			<BackToTopButton />
		</div>
	);
};

export default Home;
