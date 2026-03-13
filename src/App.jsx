
import Counter from './counter';
import Batsman from './batman';
import Users from './users';
import Friends from './Friends' ;
import Post from './Post'
import './App.css';
import { Suspense } from 'react';


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json()) ;

  // const fetchFriends = async()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users') ;
  //   return res.json() ;
  // }


  const fetchPosts = async()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/posts') ;
    return res.json() ;

  }


function App() {

  // const friendsPromise = fetchFriends() ;
  const postPromise = fetchPosts() ;

  function handleClick() {
    alert('I am clicked')
  }

  const handleClick2 = () => {
    alert('clicked two')
  }

  // with parameter ;
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
      <h3>Vite + react</h3>

      <Suspense fallback={<h4>Post are coming...</h4>}>
      <Post postPromise={postPromise}></Post>

      </Suspense>
{/* 
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>

      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for teat...</h3>}>

      <Friends  friendsPromise={ friendsPromise}></Friends>
       

      </Suspense> */}
      <Counter></Counter>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => handleAdd5(10)}>Click 5</button>
    </>
  )
}

export default App
