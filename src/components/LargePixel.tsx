import '../css/LargePixel.css';
import useAnimation from '../hooks/useAnimation';
import PixelImage from './PixelImage';

interface LargePixelProps {
	name: string;
	description: string;
	fullSizeFile?: string;
}

export default function LargePixel({name, description, fullSizeFile }: LargePixelProps) {

	const ref = useAnimation<HTMLDivElement>();

	return (<div className="LargePixel" ref={ref}>
		<PixelImage file={name} description={description} fullSizeFile={fullSizeFile} />
	</div>);
}