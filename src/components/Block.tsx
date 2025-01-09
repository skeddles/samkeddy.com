import { ReactNode } from 'react';
import '../css/Block.css';

interface BlockProps {
	children: ReactNode;
	className?: string;
	title?: string;
	color?: string;
}

export default function Block({children, className, title, color}: BlockProps) {
	return (<div className={`Block ${className}`} style={{backgroundColor: color}}>
		{title && <h1>{title}</h1>}
		<div className={`content ${className}`}>
			{children}
		</div>
	</div>)
}