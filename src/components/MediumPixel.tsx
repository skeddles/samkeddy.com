import '../css/MediumPixel.css';

interface MediumPixelProps {
	children: React.ReactNode;
}

export default function MediumPixel({children}: MediumPixelProps) {
	return (<div className="MediumPixel">
		{children}
	</div>);
}