
import { useEffect, useState } from 'react';
import '../css/Popup.css';

interface PopupProps {
	image?: string;
	visible: boolean;
}


export default function Popup({image, visible}: PopupProps) {
	// Preload spinner image on mount
	useEffect(() => {
		const spinner = new window.Image();
		spinner.src = "/images/spinner.gif";
	}, []);

	const [loaded, setLoaded] = useState(false);
	const [currentImage, setCurrentImage] = useState<string | undefined>(image);

	useEffect(() => {
		setLoaded(false);
		setCurrentImage(image);
	}, [image]);

	// load image
	useEffect(() => {
		if (!currentImage) return;
		const img = new window.Image();
		img.src = currentImage;
		img.onload = () => setLoaded(true);
		img.onerror = () => setLoaded(true); // fallback: hide spinner even if broken
		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [currentImage]);


	return (
		<div className={"Popup" + (visible ? ' visible' : '')}>
			{!loaded && currentImage ? (
				<img className="popup-spinner" src="/images/spinner.gif" />
			) : null}

			<img className={"popup-image" + (loaded ? '' : ' loading')} src={currentImage} />
		</div>
	);
}