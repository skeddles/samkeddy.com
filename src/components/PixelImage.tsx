import '../css/PixelImage.css';

interface PixelImageProps {
	file: string;
	description: string;
}

export default function PixelImage({ file, description }: PixelImageProps) {
	return (<div className="PixelImage">
		<div className="image" style={{ backgroundImage: `url(/pixel/${file}.png)` }} >
			<p className="description">{description}</p>
		</div>
	</div>);
}