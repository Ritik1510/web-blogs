import { lazyImport } from './lazyWrapper.js';
import { useParams } from "react-router-dom";       
import Layout from '../Layout.jsx';
import ErrorForInvalidImport from '../components/ErrorPages/ErrorForInvalidImport.jsx';
import Home from '../pages/Home/Home.jsx';

const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorForInvalidImport />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'hustling',
                lazy: lazyImport('../pages/HustleIdeas/Hustling'),
                errorElement: <ErrorForInvalidImport />,
                children: [
                    {
                        path: ':slug',
                        lazy: lazyImport('../pages/HustleIdeas/Children/LocalEntrepreneurship'),
                        errorElement: <ErrorForInvalidImport />,
                    },
                    {
                        path: 'urban-bazar-online-services',
                        lazy: lazyImport('../pages/HustleIdeas/Children/UrbanBazarOnlineServices'),
                        errorElement: <ErrorForInvalidImport />,
                    },
                ],
            },
            {
                path: 'urban-habits',
                lazy: lazyImport('../'),
                errorElement: <ErrorForInvalidImport />,
            },
            {
                path: 'urban-nature',
                lazy: lazyImport('../pages/UrbanNature/UrbanNature'),
                errorElement: <ErrorForInvalidImport />,
            },
            {
                path: 'contact',
                lazy: lazyImport('../pages/Contact/Contact'),
                errorElement: <ErrorForInvalidImport />,
            },
            {
                path: 'user/:userid',
                lazy: lazyImport('../components/User/User'),
                errorElement: <ErrorForInvalidImport />,
            },
            {
                path: 'about',
                lazy: lazyImport('../pages/About/About'),
                errorElement: <ErrorForInvalidImport />,
            },
        ],
    },
];

export default routes;




