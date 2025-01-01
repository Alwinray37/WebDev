import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
// import Button from './components/Button.jsx'
import Student from './components/Student.jsx'
import UserGreeting from './components/UserGreeting.jsx'
import List from './components/List.jsx'
import MyComponent from './components/MyComponent.jsx'
import Counter from './components/Counter.jsx'
import ColorPicker from './components/ColorPicker.jsx'
import MyComponent2 from './components/MyComponent2.jsx'
import ToDoList from './components/ToDolist.jsx'
import UseEffectComponent from './components/UseEffectComponent.jsx'
import DigitalClock from './components/DigitalClock.jsx'
import UseRefComponent from './components/UseRefComponent.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import TicTacToe from './components/TicTacToe.jsx'
// import Hero from './components/Hero.jsx'
import {Button} from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 
	return (
		<>
			<Header/>
			<div className='container'>
				{/* <Hero /> */}
				<TicTacToe />
				<Button>Test btn</Button>
			</div>
			<Footer/>
		</>
	);
}

export default App

/** useState() = re-renders the component when the state value changes
 * 
 * useRef() = "use reference" does not cause re-renders when its value changes. When you want a component to remember some information, but you dont want that information to trigger new renders. 
 * 
 * 1. Accesing/Interacting with DOM elements
 * 2. handling focus, animations, and transitions
 * 3. managing timers, and intervals
 */