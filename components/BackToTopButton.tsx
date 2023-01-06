import { CaretUp } from 'phosphor-react';

const BackToTopButton = () => (
	<button
		onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		className="bg-pallete-secondary h-12 w-12 rounded-full aspect-square fixed right-[4vw] bottom-[6vh] flex items-center justify-center shadow-md z-50"
	>
		<CaretUp />
	</button>
);

export default BackToTopButton;

