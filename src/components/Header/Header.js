import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Header = () => {
	return (
		<Head>
			<Link to='/'>
				<Href>Home</Href>
			</Link>
			<Link to='/popular'>
				<Href>Popular movies</Href>
			</Link>
			<Link to='/shows'>
				<Href>TV shows</Href>
			</Link>
			<Link  to='/upcoming'>
				<Href>Up coming movies</Href>
			</Link>
		</Head>
	);
};

const Head = styled.header`
align-items:center;
justify-content:center;
	display: flex;
	padding: 1rem;
	color: #fff;
	background-color: rgb(195, 101, 117);
	margin-bottom:20px;
`;

const Href = styled.span`
	
	margin-right: 30px;
	color:#fff;
	text-decoration:none;
`;
