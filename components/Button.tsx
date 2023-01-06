import { ReactNode } from 'react';
import { W, w } from 'windstitch';

interface ButtonProps extends ContainerProps {
	children: ReactNode;
}

const Container = w.button(
	`font-medium px-4 py-3 rounded-lg hover:bg-opacity-90 shadow transition-all outline-none flex gap-2 items-center justify-center`,
	{
		variants: {
			size: {
				default: '',
				full: 'w-full',
			},
			variant: {
				primary: 'bg-pallete-secondary',
				gray: 'bg-zinc-700 text-zinc-100 hover:bg-pallete-secondary',
				text: '',
				link: '',
			},
		},
		defaultVariants: {
			size: 'default',
			variant: 'primary',
		},
	}
);

type ContainerProps = W.Infer<typeof Container>;

const Button = ({ children, ...props }: ButtonProps) => {
	return <Container {...props}>{children}</Container>;
};

export default Button;
