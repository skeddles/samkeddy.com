import '../css/PixelImage.css';

interface PixelImageProps {
	file: string;
	description: string;
	fullSizeFile?: string;
}

export default function PixelImage({ file, description, fullSizeFile }: PixelImageProps) {

	var fullSizeUrl = `/pixel/${file}.png`;
	if (fullSizeFile) fullSizeUrl = `/pixel/${fullSizeFile}.png`;


	return (<div className="PixelImage">
		<div className="image" style={{ backgroundImage: `url(/pixel/${file}.png)` }} data-file={fullSizeUrl}>
			<p className="description">{description}</p>
		</div>
	</div>);
}