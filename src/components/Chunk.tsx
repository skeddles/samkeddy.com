
import Image from './Image';

import '../css/Chunk.css';

interface ChunkProps {
	title?: string;
	description?: string;
	image: string;
}

export default function Chunk({title, description, image}: ChunkProps) {
	return (<div className="Chunk">
		<h2>{title}</h2>
		<p>{description}</p>
		<Image file={image}/>
	</div>)
}