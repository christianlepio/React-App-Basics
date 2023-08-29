import TestComp from './components/testComponent'; //importing component
import NavbarComponent from './components/NavbarComponent'; //importing component
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'; //importing useCallback, useEffect, useMemo, useReducer, useRef, useState
import PropsComponent from './components/propsComponent'; //importing props component
import ChildPropsComponent from './components/ChildPropsComponent'; //importing props passing through child components
import LikeComponent from './components/LikeComponent';
import ExpandableComponent from './components/ExpandableComponent';
import ThemeProvider from './components/ThemeProvider';
import ThemeButton from './components/ThemeButton';
import ReactFormHandler from './components/ReactFormHandler';
import './App.css';

//useReducer function.
const reducerFunc = (state, action) =>{
  switch (action.type) {
    case 'add':
      return{result: Number(state.num1) + Number(state.num2)};
    case 'sub':
      return{result: Number(state.num1) - Number(state.num2)};
    case 'mul':
      return{result: Number(state.num1) * Number(state.num2)};
    case 'divi':
      return{result: Number(state.num1) / Number(state.num2)};
    default:
      return state;
  }
}

function App() {
  const name = "Ryan";
  const element = <p>Hello World, {name}!</p>;
  const cities = ["Paranaque", "Muntinlupa", "Laguna", "Tagaytay", "Pasay"]; //declare array
  const newCities = cities.filter((city) => city !== "Tagaytay"); //this is how u filter array

  const user = {
    firstName: "Ryan",
    lastName: "Lepio",
  }; //Declare an object variable

  const formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
  };//declaring functions

  const people = [
    {
      id: 0,
      name: 'Ryan lepio',
      age: 22,
    },
    {
      id: 1,
      name: 'Lanz Ebrada',
      age: 23,
    },
    {
      id: 2,
      name: 'Samuel Ebrada',
      age: 20,
    },
    {
      id: 3,
      name: 'Lynard Ebrada',
      age: 19,
    },
    {
      id: 4,
      name: 'Bea Ebrada',
      age: 17,
    },
    {
      id: 5,
      name: 'Alliah Ebrada',
      age: 14,
    },
  ]; //array with object value

  const handleClick = () => {
    alert('Hello, this is the normal event handling.');
  }; //normal event handling without parameter.

  const handleClick2 = (name) => {
    alert(`Hello, ${name} this is event handling with parameter.`);
  }; //event handling with parameter

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.fname.value);
    console.log(event.target.elements.lname.value);
    alert(`First name: ${event.target.elements.fname.value} \nLast name: ${event.target.elements.lname.value}`);
  }; //input text event handler

  const [count, setCount] = useState(0); //numbers //this is how to declare useState variable.
  const [names, setNames] = useState("Ryan Lepio"); //string
  const [isTrue, setIsTrue] = useState(false); //boolean
  const [fruits, setFruits] = useState(['Mango', 'Apple', 'Grapes', 'Banana', 'Kiwi']); //array
  const [places, setPlaces] = useState(
    [
      {
        id: 1, 
        name: 'Muntinlupa',
      },
      {
        id: 2,
        name: 'Paranaque',
      },
      {
        id: 3,
        name: 'Las pinas'
      }
    ]
  ); //objects

  const handleIncrement = () => {
    setCount(prevState => count + 1);
  };
  const handleDecrement = () => {
    setCount(prevState => count - 1);
  };

  const showPlaces = () => {
    setIsTrue(!isTrue);
  };

  const handleRemove = (placeId) =>{
    const filteredPlaces = places.filter((places) => places.id !== placeId);
    setPlaces(filteredPlaces);
  }; //filtering object

  const handleAddPlaces = () => {
    let placesId = 0;
    if (places.length > 0) {
      placesId = places[places.length - 1].id + 1;       
    }else{
      placesId = 1;
    }
    setPlaces([...places, {id: placesId, name: 'Laguna'}]);
  }; //this is how you append new values to object variable

  const inputRef = useRef(); //declare react hooks useRef()
  const [isFetched, setIsFetched] = useState(false);

  useEffect(()=>{
    inputRef.current.focus(); //combination of useEffect and useRef
    console.log('Count is updated!');
  }, [count]); //Useffect function allows you to re-render a function or task once its dependencies changed.

  const [fetchedData, setFetchedData] = useState([]);
  const inputUrl = useRef();
  const [url, setUrl] = useState(''); //https://jsonplaceholder.typicode.com/todos

  useEffect(()=>{
    setFetchedData([]);
    if (url.length > 0) {
      fetch(url)
      .then((response)=>response.json())
        .then((data)=>{
          console.log(data);
          setFetchedData(data);
        });
    }
  },[url]); //fetching API data using useEffect hook.

  //these useRef variables are for input types for useReducer()
  const persNum = useRef();
  const sekondNum = useRef();
  const selectOpr = useRef();
  const reslt = useRef();

  //initializing variables for useReducer() react hook
  const initialState = {
    num1: 0,
    num2: 0,
    result: 0
  };
  const [stateReducer, dispatch] = useReducer(reducerFunc, initialState);
  
  //initializing variables for useCallBack() react hook
  const [countCallBack, setCountCallBack] = useState(0);

  //implementing useCallBack() react hook
  const increaseCount = useCallback(()=>{
    setCountCallBack((prevCount)=>prevCount+1);
  },[]);

  // initializing variables for useMemo() react hook
  const [count1, setCount1] = useState(0);

  //implementing useMemo() react hook
  //useMemo hook is used for computaions to avoid recalculations of a variable
  const doublednumber = useMemo(()=>{
    console.log('Computing');
    return count1 * 2;
    
  },[count1]);


  return (
    <>
      <NavbarComponent />

      <h1>This is how to call funtion and variables</h1>
      <h3>Hello World, {name}!</h3>
      {element}
      <h3>Hello, I'm {formatName(user)}!</h3>

      <hr />
      <h1>This is how to include component</h1>
      <TestComp /> 

      <hr/>
      <h1>List of array</h1>

      <ul className='list-group'>
        {
          cities.map((city, index) => (
            <li key={index} className='list-group-item'>{city}</li>
          ))
        }
      </ul>

      <hr/>
      <h1>List of filtered array </h1>
      
      <ul className='list-group'>
        {
          newCities.map((city, index) => (
            <li key={index} className='list-group-item'>{city}</li>
          ))
        }
      </ul>

      <hr />
      {people.length > 0 && 
        <div className="table-responsive">
          <table className="table table-striped">
            <caption className='caption-top'>List of Person</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age Status</th>
              </tr>
            </thead>
            <tbody>
              {
                people.map((data) => {
                  return( 
                    <tr key={data.id}>
                      <th scope="row">{data.id}</th>
                      <td>{data.name}</td>
                      <td>{data.age >= 20 ? 'Adult' : 'Young'}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      }

      <hr />
      <h1>Handling Events</h1>

      <button onClick={handleClick} className='btn btn-success'>Click Me!</button> &nbsp;
      <button onClick={() => handleClick2('Ryan Christian')} className='btn btn-danger'>Click Me!</button>
      
      <div className='mb-3 mt-3 border-top border-bottom pt-3 pb-3'>
        <div className="form-floating">
          <input type="text" 
                 name='itext' 
                 className="form-control" 
                 id="floatingInput" 
                 placeholder="name@example.com" 
                 onChange={(event) => console.log(event.target.value)} />
          <label htmlFor="floatingInput">Input Text</label>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='mb-3 mt-3 border-bottom pt-3 pb-3'>
          <div className="form-floating mb-3">
            <input type="text" name='fname' className="form-control" id="floatingInput" placeholder="First Name" />
            <label htmlFor="floatingInput">First name</label>
          </div>
          <div className="form-floating">
            <input type="text" name='lname' className="form-control" id="floatingInput" placeholder="Last name" />
            <label htmlFor="floatingInput">Last name</label>
          </div>
          <div className='mt-2'>
            <button className='btn btn-info' type="submit">Submit form</button>
          </div>          
        </div>
      </form>

      <h1>React UseState</h1>

      <ul className='list-group'>
        {
          fruits.map((fruit, i) => (
            <li key={i} className='list-group-item'>{fruit}</li>
          ))
        }
      </ul>

      <hr />
      <div className="form-check form-switch">
        <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete='off' onChange={showPlaces} checked={isTrue} />
        <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Show Places</label><br />
      </div><br />
      

      {isTrue && 
        <>
        <button className='btn btn-info' onClick={handleAddPlaces}>Add Places</button>
        <div className="table-responsive">
          <table className="table table-striped">
            <caption className='caption-top'>List of Places</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th> 
              </tr>
            </thead>
            <tbody>
              {
                places.map((data) => {
                  return( 
                    <tr key={data.id}>
                      <th scope="row">{data.id}</th>
                      <td>{data.name}</td>
                      <td><button className='btn btn-danger' 
                                  onClick={() => handleRemove(data.id)}>Remove</button></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
        </>
      }
      

      <hr />
      <h1>React Props</h1>

      <PropsComponent 
        count={count} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement}
      />

      <ChildPropsComponent>
        <h1 className='border-top'>Child Component</h1>
        <p className='border-bottom'>This is a props that are passed through child component</p>
      </ChildPropsComponent>

      <LikeComponent 
        onClick={()=> console.log('Clicked!')} 
      />

      <br />
      <hr />

      <ExpandableComponent maxChars={56}>
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
        Expandable text Component using children property(props)
      </ExpandableComponent>

      <hr />
      <h1>React Hook useRef()</h1>

      <div className="container">
        <div className="form-floating mb-3">
          <input 
            type="text" 
            name='firstName' 
            className="form-control" 
            id="floatingInput" 
            placeholder="Enter name here..." 
            ref={inputRef}
          />
          <label htmlFor="floatingInput">Name:</label>
        </div>
        <div className='row'>
          <div className="col text-start">
              <button 
                className='btn btn-danger' 
                onClick={()=>inputRef.current.focus()}
              >
                Focus on me!
              </button>&nbsp;
              <button 
                className='btn btn-success'
                onClick={()=>console.log(inputRef.current.value)}
              >
                Get Value
              </button>
          </div>
        </div><br />

        <h1 className='border-top'>React Hook useEffect()</h1>

        <div>
          <div className="form-floating mt-3 mb-3">
            <input 
              type="text" 
              name='url' 
              className="form-control" 
              id="floatingInput" 
              placeholder="Enter API URL here..." 
              ref={inputUrl}
            />
            <label htmlFor="floatingInput">URL:</label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-start mb-2">
            <button 
              className='btn btn-outline-info mt-2'
              onClick={()=>{
                setIsFetched((prevState)=>!prevState); 
                !isFetched ? setUrl(inputUrl.current.value) : '';
              }}
            >
              {isFetched ? 'Hide data from API' : 'Fetch data from API'}
            </button>
          </div>
          {isFetched && 
            <>
              <h3 className='border-top text-start'>Fetched Data from API</h3>
              <ul className='list-group'>
                {
                  fetchedData.map((datum, i) => (
                    <li key={i} className='text-start list-group-item'>{(i+1) + '. ' + datum.title}</li>
                  ))
                }
              </ul>
            </>
          }          
        </div>
      </div><hr /><br />
      
      {/*ThemeProvider component handles all the global functions and state variables
        in a useContext hook */}
      <ThemeProvider>
        {/*All children inside this ThemeProvider component can access all state,
          *values, or functions within the context */}
        <div>
          <h1>React Hook useContext()</h1>
        </div>
        <ThemeButton />
      </ThemeProvider>
      
      <hr /><br />
      
      <h1>React Hook useReducer()</h1>
      <div className="row">
        <div className="col">
          <input type="number" className="form-control" placeholder="First number" aria-label="First number" ref={persNum}/>
        </div>
        <div className="col">
          <input type="number" className="form-control" placeholder="Second number" aria-label="Second number" ref={sekondNum}/>
        </div>
        <div className="col">
          <select defaultValue={'add'} className="form-select" aria-label="Default select example" ref={selectOpr}>
            <option value={'add'}>ADD</option>
            <option value={'sub'}>SUBTRACT</option>
            <option value={'mul'}>MULTIPLY</option>
            <option value={'divi'}>DIVIDE</option>
          </select>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col mb-2">
          <input type="number" className="form-control" placeholder="Result" aria-label="Result" value={Number(stateReducer.result)} ref={reslt} readOnly/>
        </div>
        <div className="col text-start mb-2">
          <button 
            className='btn btn-danger' 
            onClick={()=>{
              //dispatch means getting the type of action that switch case can execute.
              //use dispatch to communicate with reducer function.
              dispatch({type: selectOpr.current.value});
              stateReducer.num1 = persNum.current.value;
              stateReducer.num2 = sekondNum.current.value;
            }}
            >
              Calculate
            </button>
        </div>
      </div>

      <hr /><br />

      <h1>React Hook useCallback()</h1>
      
      <div>
        <p className='fs-3'>useCallback Count: {countCallBack}</p>
        <button className='btn btn-success' onClick={increaseCount}>Increase Count</button>&nbsp;
        <button className='btn btn-danger' onClick={()=>setCountCallBack(0)}>Reset Count</button>
      </div>
      
      <hr /><br />

      <h1>React Hook useMemo()</h1>

      <div>
        <p className="fs-3">useMemo Count: {doublednumber}</p>
        <button 
          className='btn btn-success' 
          onClick={()=>setCount1((prevCount1) => prevCount1 + 1)}
        >
          Increment
        </button>
      </div>

      <hr /><br />

      <h1>React Form Handling</h1>

      <ReactFormHandler/>

    </>
  );
}

export default App
