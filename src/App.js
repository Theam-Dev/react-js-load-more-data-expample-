import './App.css';
import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [post, setPost] = useState([])
  const [index, setIndex] = useState(4)
  const initialPosts = slice(post, 0, index)
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((e) => console.log(e))
  }
  const loadMore = () => {
    setIndex(index + 4)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <div className='container'>
    <a className="navbar-brand" href="#">React Js Load More Example</a>
    <ul className="navbar-nav">
  </ul>
    </div>
  
</nav>

    <div className='container' style={{'margin-top':'85px','margin-bottom':'85px'}}>
      {initialPosts.map((item) => {
        return (
          <div className="mb-2 card" key={item.id}>
            <div className="card-body">{item.title}</div>
          </div>
        )
      })}
      <div className="d-grid">
          <button onClick={loadMore} type="button" className="btn btn-primary">
            Load More
          </button>
      </div>
    </div>
    </div>
  )
}
export default App;
