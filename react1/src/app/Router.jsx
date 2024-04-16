import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import Teatro from '../Components/Teatro/Teatro';
import Geko from '../pages/Geko';
import { PageNotFound } from '../pages/NoPage';
import Layout from '../Components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/page2/:id" element={<Page2 />} />
                <Route path="/Teatro/" element={<Teatro />} />
                <Route path="/Geko/" element={<Geko />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;  