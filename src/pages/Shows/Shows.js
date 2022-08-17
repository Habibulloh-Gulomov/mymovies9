import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cardshow } from '../../components/Card/Cardshow';
import styled from 'styled-components';
import { PaginationMovie }  from '../../components/pagination/Pagination'
export const Shows = () => {
	const [movies, setMovies] = useState({
		isLoading:true,
		isError:false,
		data:{},
		totalPage:1,
	});

	const [activePage , setActivePage] = useState(1)

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/tv/popular', {
				params: {
					api_key: 'db6051e2af08e90ef09bfced7f5a8703',
					page:activePage,
				},
			})
			.then((res) => setMovies({
				isLoading:false,
				isError:false,
				data:res.data.results,
				totalPage:res.data.total_pages > 500 ? 500 : res.data.total_pages,
			}))
			.catch((err) => setMovies({
				isLoading:false,
				isError:true,
				...movies,
			}));
	}, [activePage]);

	console.log(movies);

	return (
		<div>
			{movies.data.length && (
				<List>
					{movies.data.map((e) => (
						<Cardshow item={e} />
					))}
				</List>
			)}
		
<PaginationMovie count={movies.totalPage} setActivePage={setActivePage}/>
		</div>
	);
};

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Row = styled.ul`
	display: flex;
	justify-content: center;
	margin:20px 0;
`;
