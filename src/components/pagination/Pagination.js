import styled from "styled-components";
import Pagination from '@mui/material/Pagination';
export const PaginationMovie=({count, setActivePage})=>{
  return(
    <Row>
			<Pagination onClick={(evt) => {
				setActivePage(evt.target.innerText)
			}} count={count} variant="outlined" color="secondary" />
			</Row>
  )
}

const Row = styled.div`
	display: flex;
	justify-content: center;
	margin:20px 0;
`;
