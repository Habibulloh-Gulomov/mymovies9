
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import styled from 'styled-components';
export const Upcoming = () => {
	const [movies, setMovies] = useState({});

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/upcoming', {
				params: {
					api_key: 'db6051e2af08e90ef09bfced7f5a8703',
				},
			})
			.then((res) => setMovies(res.data.results))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			{movies.length && (
				<List>
					{movies.map((e) => (
						<Card item={e} />
					))}
				</List>
			)}
		</div>
	);
};

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;
