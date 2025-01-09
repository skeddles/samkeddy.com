import { ReactNode } from 'react';
import '../css/Block.css';

interface BlockProps {
	children: ReactNode;
	className?: string;
}

export default function Block({children, className}: BlockProps) {
	return (<div className="Block">
		<div className={`content ${className}`}>
			{children}
		</div>
	</div>)
}