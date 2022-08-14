

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cardshow } from '../../components/Card/Cardshow';
import styled from 'styled-components';
export const Shows = () => {
	const [movies, setMovies] = useState({});

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/tv/popular', {
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
						<Cardshow item={e} />
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