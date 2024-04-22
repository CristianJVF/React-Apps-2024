import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Page2 from '../pages/Page2';
import { PageNotFound } from '../pages/NoPage';
import Layout from '../components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/page2/:id" element={<Page2 />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;  