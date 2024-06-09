import React, {useEffect, useState} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("anil@test.com")
  const [pwd, setPwd] = useState("abc")

  async function login(){
    let item = {email, pwd}
    let url = "https://jsonplaceholder.typicode.com/posts"
    let result = fetch(url, {
      method:"POST", 
      body:JSON.stringify(item), 
      headers:{
        "Content-Type" : "application/json; charset=UTF-8",
        "Accept" : "application/json"
      } 
    }).then((res)=>{
      console.log('res = ', res);
      return res.json()})
    .then((json)=>{
      let resData = JSON.stringify(json)
      console.log('JSON.parse(JSON.stringify(json)) = ', resData);
      localStorage.setItem("user-info", resData)
      navigate("/add")
    })
  }

  useEffect((ele)=>{
    if(localStorage.getItem("user-info")){
      navigate("/add")
    }
  })
  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
    <h1>Login</h1>
     <input type='text' className='form-control' placeholder='Enter Email'/>
     <br />
     <input type='password' className='form-control' placeholder='Enter Password' />
     <br />
     <Button onClick={login}>Login</Button>
     </div>
    </>
  )
}
