import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Popular } from './pages/Popular/Popular';
import { Shows } from './pages/Shows/Shows';
import { Single } from './pages/Single/Single';
import { Upcoming } from './pages/Upcoming/Upcoming';

export const Private = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular' element={<Popular />} />
				<Route path='/shows' element={<Shows />} />
				<Route path='/upcoming' element={<Upcoming />} />
				<Route path='/popular/:id' element={<Single />} />
			</Routes>
		</>
	);
};
