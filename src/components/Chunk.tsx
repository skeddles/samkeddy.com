import Image from './Image';
import useAnimation from '../hooks/useAnimation';

import '../css/Chunk.css';

interface ChunkProps {
	title?: string;
	description?: string;
	image: string;
}

export default function Chunk({title, description, image}: ChunkProps) {
	const ref = useAnimation<HTMLDivElement>();

	return (<div ref={ref} className="Chunk">
		<h2>{title}</h2>
		<p>{description}</p>
		<Image file={image}/>
	</div>)
}