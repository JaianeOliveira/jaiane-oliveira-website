import Button from '../Button';

const Card = () => {
	return (
		<div className="h-[482px]  bg-zinc-800 shadow-md rounded-2xl p-4 flex flex-col gap-4 hover:scale-105 focus-visible:scale-105 transition-all outline-none">
			<div className="bg-zinc-700 w-full h-36 rounded-lg flex items-center justify-center">
				Image
			</div>

			<h3>Title</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur. Nisi nulla at duis mi odio sit.
				Dictum eleifend ultrices augue hac ultrices scelerisque.
			</p>
			<Button size="full">Ver detalhes</Button>
		</div>
	);
};

export default Card;
