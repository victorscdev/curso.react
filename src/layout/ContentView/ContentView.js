import { BrowserRouter } from 'react-router-dom'
import RouterView from '../../routes/Routes'

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import Home from '../../pages/Home/Home'
import Empresa from '../../pages/Empresa/Empresa'
import Contato from '../../pages/Contato/Contato'

import './ContentView.css'

function ContentView() {
    const routes = [
        {
            linkTo: '/',
            linkName: 'Home',
            component: Home
        },
        {
            linkTo: '/empresa',
            linkName: 'Empresa',
            component: Empresa
        },
        {
            linkTo: '/contato',
            linkName: 'Contato',
            component: Contato
        },
    ] 

    return (
        <BrowserRouter>
            <Navbar routes={ routes } />
            <RouterView routes={routes} />
            <Footer />
        </BrowserRouter>
    );
}

export default ContentView