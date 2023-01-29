import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from './App';
import Appss from './pages/Slide';
import AppForm from './Forms';
import AppHeader from './AppHeader/AppHeader';
import OpenModal from './pages/openModal';
import FormFormik from './Formik_Form/Form';
import CustomForm from './Formik_Form/CustomForm';


const Main = () =>{
    return (
        <>
        <Router> 
            <AppHeader/>
            <main>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/form" element={<AppForm/>} />
                    <Route path="/slider" element={<Appss/>} />
                    <Route path="/modal" element={<OpenModal/>} />
                    <Route path="/customform" element={<CustomForm/>} />
                    <Route path="/formikform" element={<FormFormik/>} />
                </Routes>
            </main>
        </Router>
    </>
    )
}

export default Main;