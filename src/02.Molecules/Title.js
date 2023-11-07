//Title.js
import { Link } from 'react-router-dom';
import ava from '../01.Atoms/Images/ava/ava_2020.jpg';


const Title = () => {
    return (
		<Link to="/" className="title">
			<div className="ava"> <img src={ava} alt="Avatar" /> </div>
			<h1>Wooten <span>Tattoo</span></h1>
		</Link>
    );
}

export default Title;