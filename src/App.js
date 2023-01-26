import {useState, useEffect, useCallback, useMemo, useReducer} from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import './App.css';

const countTotal = (num) =>{
    console.log('counting...');
    return num + 10;
}

function reducer (state, action) {
    switch (action.type){
        case 'toggle':
            return {autoplay: !state.autoplay};
        case 'slow':
            return {autoplay: 300};
        case 'fast':
            return {autoplay: 700};
        case 'custom':
            return {autoplay: action.payload};
        default:
            throw new Error();
    }
}

function init(initial){
    return {autoplay: initial}
}

const Slider = ({initial}) => {

    const [slide, setSlide]= useState(0);
    // const [autoplay, setAutoplay] = useState(false);
    const [autoplay, dispatch] = useReducer(reducer, initial, init);

    const getSomeImages = useCallback(() =>{ 
        console.log('fetching');
        return[
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg"
        ]
    }, [slide])

    // useEffect(()=>{
    //     console.log("effect")
    //     document.title = `Slide: ${slide}`;

    // }, [slide]);

    // useEffect(()=>{
    //     console.log('autoplay!')
    // }, [autoplay]);

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('style!')
    }, [style])

    function changeSlide(i){
        setSlide(slide => slide + i)
    }

    // function toggleAutoplay(){
    //     setAutoplay(autoplay => !autoplay)
    // }
 
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay.autoplay ?  'auto' : null}</div>
                <div style={style} className="text-center mt-5">Total slides: {total}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
                    <button  
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>slow autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'fast'})}>fast autoplay</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={(e) => dispatch({type: 'custom', payload: +e.target.textContent})}>1000</button>
                </div>
            </div>
        </Container>
    )
}

const Header = () =>{
    return(
        <>
        <NavLink 
            end 
            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
            to="/form">Form</NavLink>
         </>
    )
}

const Slide = ({getSomeImages}) =>{

    const [images, setImages] = useState([]);

    useEffect(() =>{
        setImages(getSomeImages());
    }, [getSomeImages])

    return(
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}




function App() {
    const [slider, setSlide] = useState(true);

    return (
        <>
            <button onClick={() => setSlide(false)}>Click me</button>
            {slider ? <Slider initial={false} /> : null}
        </>
    );
}

export default App;