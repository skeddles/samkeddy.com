import '../css/Logo.css';

interface LogoProps {

}

export default function Logo({}: LogoProps) {
	return (<div className="Logo">
		<strong>S</strong>am <span><strong>
		K</strong>eddy</span>
	</div>);
}