import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, Typing } from './pages';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/typing" element={<Typing />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;