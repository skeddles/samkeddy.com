import '../css/Image.css';

export default function Image({file}: {file: string}) {
	return (<img className="Image" src={'/images/' + file} alt=""/>)
}