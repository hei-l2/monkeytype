import { Route, Routes } from 'react-router-dom';
import { Home, Typing } from './pages';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/typing" element={<Typing />} />
        </Routes>
    );
}

export default Router;