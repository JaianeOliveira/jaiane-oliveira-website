import Link from 'next/link';
import { w } from 'windstitch';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
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
				<h1 className="text-xl font-medium">
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

				<div className="flex gap-8 my-12">
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
				<Carousel />
			</Section>

			{/* <Section id="stack">
				<SectionTitle>Stack</SectionTitle>
				<div className="flex gap-4 flex-wrap">
					<TechItem title="ReactJS"></TechItem>
					<TechItem title="NextJS"></TechItem>
					<TechItem title="Javascript"></TechItem>
					<TechItem title="Typescript"></TechItem>
					<TechItem title="React Native"></TechItem>
					<TechItem title="NodeJS"></TechItem>
					<TechItem title="ExpressJS"></TechItem>
					<TechItem title="NestJS"></TechItem>
					<TechItem title="Styled-Components"></TechItem>
					<TechItem title="Tailwind CSS"></TechItem>
					<TechItem title="Sass"></TechItem>
				</div>
			</Section> */}

			<Section id="contact">
				<SectionTitle>Contato</SectionTitle>

				<div className="flex gap-8">
					<div>
						<Button>Github</Button>
						<Button>Linkedlin</Button>
					</div>
					<form>
						<fieldset>
							<legend>Nome</legend>
							<input type="text" title="name" />
						</fieldset>
						<fieldset>
							<legend>E-mail</legend>
							<input type="text" title="email" />
						</fieldset>
						<fieldset>
							<legend>Telefone</legend>
							<input type="text" title="phone" />
						</fieldset>

						<fieldset>
							<legend>Telefone</legend>
							<textarea title="description" />
						</fieldset>
					</form>
				</div>
			</Section>

			<footer className="px-[8vw] py-4 flex items-center justify-center text-zinc-100 text-opacity-50 font-thin border-t border-zinc-800">
				&copy;
				<Link target={'_blank'} href="https://www.github.com/jaianeoliveira">
					Jaiane Oliveira
				</Link>
				, 2022
			</footer>
		</div>
	);
};

export default Home;
