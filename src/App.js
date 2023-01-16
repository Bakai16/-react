import {useState, useEffect, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount(){
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate(){
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

// const calcValue = () => {
//     console.log('Random');

//     return Math.random() * (50 - 1) + 1;
// }

const countTotal = (num) =>{
    console.log('counting...');
    return num + 10;
}


const Slider = (props) => {

    const [slide, setSlide]= useState(0);
    const [autoplay, setAutoplay] = useState(false);

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

    const style = useMemo({
        color: slide > 4 ? 'red' : 'yellow'
    }, [slide])

    useEffect(() => {
        console.log('style!')
    }, [style])

    function changeSlide(i){
        setSlide(slide => slide + i)
    }

    function toggleAutoplay(){
        setAutoplay(autoplay => !autoplay)
    }
 
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ?  'auto' : null}</div>
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
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
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
            {slider ? <Slider/> : null}
        </>
    );
}

export default App;
