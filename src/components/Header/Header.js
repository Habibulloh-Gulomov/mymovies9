import { useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const Header = () => {

	const Navigate = useNavigate()


	const [inputVal , setInputVal] = useState('')

	useEffect(()=>{
		if(inputVal.trim().length){
        Navigate('/search/' + inputVal)
		}else{
			Navigate('/')
		}
	},[inputVal])
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
			<input onInput={(evt) =>setInputVal(evt.target.value)} type="text"  placeholder='Search....' />
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
