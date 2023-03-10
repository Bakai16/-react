import {Link, NavLink} from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <nav>
                <ul>
                    <li><NavLink 
                            end 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/">Main</NavLink></li>
                    
                    <li><NavLink 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/form">Form</NavLink></li>
                    <li><NavLink 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/slider">Slider НОС</NavLink></li>
                    <li><NavLink 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/modal">Open Modal</NavLink></li>
                    <li><NavLink 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/customform">Custom Form</NavLink></li>
                    <li><NavLink 
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/formikform">Formik Form</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;