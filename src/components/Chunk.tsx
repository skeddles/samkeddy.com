
import { ReactNode } from 'react';

import '../css/Chunk.css';

interface ChunkProps {
	children: ReactNode;
	title?: string;
}

export default function Chunk({children, title}: ChunkProps) {
	return (<div className="Chunk">
		<h2>{title}</h2>
		{children}
	</div>)
}