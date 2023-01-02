interface TechItemProps {
	title: string;
}

const TechItem = ({ title }: TechItemProps) => {
	return (
		<div className="bg-zinc-800 shadow-md rounded-lg p-8 min-w-[150px]">
			{title}
		</div>
	);
};

export default TechItem;
