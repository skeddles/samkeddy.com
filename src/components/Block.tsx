import { ReactNode } from 'react';
import '../css/Block.css';
import Globe from '../assets/svg/globe.svg?react';

interface BlockProps {
	children: ReactNode;
	className?: string;
	title?: string;
	color?: string;
	description?: string;
	link?: string;
}

export default function Block({children, className, title, color, description, link}: BlockProps) {
	return (<div className={`Block ${className}`} style={{backgroundColor: color}}>
		{title && <h1>{title}</h1>}
		{link && <div className="link">
			<a href={"https://" + link} target="_blank">
				<Globe/>
				{link}
			</a>
		</div>}
		<div className={`content ${className}`}>

			<div className="description"><p>{description}</p></div>
			{children}
		</div>
	</div>)
}