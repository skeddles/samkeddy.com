import '../css/TinyPixel.css';

interface TinyPixelProps {
	children: React.ReactNode;
}

export default function TinyPixel({children}: TinyPixelProps) {
	return (<div className="TinyPixel">
		{children}
	</div>);
}