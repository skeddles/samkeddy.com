import '../css/SmallPixel.css';

interface SmallPixelProps {
	children: React.ReactNode;
}

export default function SmallPixel({children}: SmallPixelProps) {
	return (<div className="SmallPixel">
		{children}
	</div>);
}