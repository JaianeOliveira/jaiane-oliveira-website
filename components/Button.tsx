import { ReactNode } from 'react';
import { w } from 'windstitch';

interface ButtonProps {
	children: ReactNode;
	size?: 'default' | 'full';
}

const Container = w.button(
	`bg-pallete-secondary font-medium px-4 py-3 rounded-lg hover:bg-opacity-90 shadow transition-all outline-none`,
	{
		variants: {
			size: {
				default: '',
				full: 'w-full',
			},
		},
		defaultVariants: {
			size: 'default',
		},
	}
);

const Button = ({ children, size = 'default' }: ButtonProps) => {
	return <Container size={size}>{children}</Container>;
};

export default Button;
