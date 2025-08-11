import { ReactNode } from 'react';
import '../css/Block.css';
import Globe from '../assets/svg/globe.svg?react';
import Technologies from './Technologies';
import useAnimation from '../hooks/useAnimation';

interface BlockProps {
	children: ReactNode;
	className?: string;
	title?: string;
	color?: string;
	description?: string;
	link?: string;
	technologies?: string[];
}

export default function Block({children, className, title, color, description, link, technologies}: BlockProps) {
	const ref = useAnimation<HTMLDivElement>();

	return (<div ref={ref} className={`Block ${className}`} style={{backgroundColor: color}}>
		{title && <h1>{title}</h1>}
		{link && <div className="link">
			<a href={"https://" + link} target="_blank">
				<Globe/>
				{link}
			</a>
		</div>}


		<div className={`content ${className}`}>
			<div className="description"><p>{description}</p></div>
		</div>
		<div className={`content ${className}`}>
			{technologies && <Technologies technologies={technologies} />}
		</div>
		<div className={`content ${className}`}>
			{children}
		</div>

		

	
	</div>)
}