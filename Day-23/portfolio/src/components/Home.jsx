import React from 'react'
import NavBar from './NavBar';

const Home = ({obj, name}) => {
  return (
    <div>Home {name}
      <NavBar obj={obj}/>
    </div>
  )
}
export default Home;
