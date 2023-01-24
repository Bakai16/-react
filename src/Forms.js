import {useState, createContext, useContext} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
});

const {Provider, Consumer} = dataContext;

const Form = (props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

const InputComponent = () => {

    const context = useContext(dataContext );

    return (
        <input 
            value={context.mail}
            className='form-control'
            type="email"
            placeholder='bakai@email.com'
            onFocus={context.forceChangeMail}/>
    )
} 

function AppForm() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail(){
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        <Provider value={data}>
            <Form  text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default AppForm;
