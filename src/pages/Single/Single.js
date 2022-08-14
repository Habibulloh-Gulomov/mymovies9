import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Single.css'
export const Single = () => {
	const { id } = useParams();

	const [movie, setMovie] = useState({});

	useEffect(() => {
		axios
			.get('https://api.themoviedb.org/3/movie/' + id, {
				params: {
					api_key: '0431834c535ecb8b718ac720e46307f3',
				},
			})
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='box'>
			<h1 className='box-title'>{movie.title}</h1>
			<img className='box-img' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
			
			<div className='box-cover'>
			<div className='box-top'>
			<p className='box-top-date'> <span className='box-strong'>Date: </span>{movie.release_date}</p>
			<p className='box-top-duration'> <span className='box-strong'>Duration: </span> {movie.runtime} <span>minutes</span> </p>
			<p className='box-top-money'> <span className='box-strong'>Budget: </span> {movie.budget} <span>$</span>  </p>
			</div>
			<div className='box-bottom'>
				<p className='box-bottom-lang'> <span className='box-strong'>Orginal language: </span> {movie.original_language}  </p>
				
				<p className='box-bottom-tag'> <span className='box-strong'>Tagline: </span> {movie.tagline}</p>
				<p className='box-bottom-city'> <span className='box-strong'>Country: </span> {movie.production_countries?.[0].name}</p>
			</div>
			</div>

			<p className='box-overview'> <span className='box-stronglast'>Overview: </span> <br /> {movie.overview}  </p>
		</div>
	);
};
