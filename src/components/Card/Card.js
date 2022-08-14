import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
	return (
		<MovieCard>
			<Link to={`/popular/${item.id}`}>
				<MovieImg src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
				<MovieTitle>{item.title}</MovieTitle>
			</Link>
		</MovieCard>
	);
};

const MovieCard = styled.li`
	width: 23%;
	margin-bottom: 30px;
	padding: 8px;
	border-radius: 10px;
	background-color: rgb(195, 101, 117);
	color: #fff;
	text-align:center;
`;

const MovieImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const MovieTitle = styled.h2`
color:#fff;
text-decoration: none;
	margin: 16px 0;
`;

const MovieDate = styled.time`
	font-size: 18px;
	text-decoration: none;
	color:#fff;
`;
