import '../css/PixelGallery.css';

interface PixelGalleryProps {
	children: React.ReactNode;
}

export default function PixelGallery({children}: PixelGalleryProps) {


	return (<div className="PixelGallery">
		{children}
	</div>);
}