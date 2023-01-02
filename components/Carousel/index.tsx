import Card from './Card';

const Carousel = () => {
	return (
		<div className="max-w-[84vw] overflow-hidden px-8 py-4">
			<div className="flex gap-8 overflow-x-scroll overflow-y-hidden p-8 hide-scrollbar">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Carousel;
