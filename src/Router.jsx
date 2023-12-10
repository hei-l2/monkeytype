import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default Router;