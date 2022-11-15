import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetch() {
const [data, setdata] = useState([]);
useEffect(() =>{
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    setdata(response.data)
  })
}, [])
return (
    {data} && data.map(({id, title})=>
    <li key={id}>
        {title}
    </li>
  ))}
export default DataFetch
