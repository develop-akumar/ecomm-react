import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

export default function Register() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    useEffect((ele)=>{
        if(localStorage.getItem("user-info")){
            navigate("/add")
        }else{

        }
    },[])

    function onButtonClick() {
        let url = "https://jsonplaceholder.typicode.com/posts"

        // console.log('values = ', name, email, password);
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                title: name,
                body: email,
                userId: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((res) => { 
            console.log('res = ', res); 
            return res.json() })
            .then((json) => {
                json = JSON.stringify(json)
                // console.log('json = ', json);
                // console.log('json.name = ', json.title);
                localStorage.setItem("user-info", json)
                navigate("/login")
            })

        
    }

    return (
        <>
        <Header/>
        < div className='col-sm-6 offset-sm-3'>
            < h1> user sign up form </h1>
            Name: < input type='text' className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} />
            < br />
            Email: < input type='text' className='form-control' value={email} onChange={(ele) => { setEmail(ele.target.value) }} />
            < br />
            Password: < input type='text' className='form-control' value={password} onChange={(ele) => { setPassword(ele.target.value) }} />
            < br />
            < button className='btn btn-primary' onClick={onButtonClick}> Sign UP </button>
        </div>
        </>
    )
}