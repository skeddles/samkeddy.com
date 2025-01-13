import { ReactNode } from 'react';
import '../css/Block.css';

interface BlockProps {
	children: ReactNode;
	className?: string;
	title?: string;
	color?: string;
	description?: string;
}

export default function Block({children, className, title, color, description}: BlockProps) {
	return (<div className={`Block ${className}`} style={{backgroundColor: color}}>
		{title && <h1>{title}</h1>}
		<div className={`content ${className}`}>
			<div className="description"><p>{description}</p></div>
			{children}
		</div>
	</div>)
}