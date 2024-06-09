import React, {useState} from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'

export default function AddProduct() {

  const [name, setName] = useState("")
  const [file, setFile] = useState("")
  const [price, setPrice] = useState("")
  const [desc, setDesc] = useState("")

  function addProduct(){
    console.log('info = ', {name, file, price, desc});

    let formData = new FormData()
    formData.append("name", name)
    formData.append("file", file)
    formData.append("price", price)
    formData.append("desc", desc)

    
  }
  return (
    <>
      <Header />
    <div className='col-sm-6 offset-sm-3'>
      <h1>AddProduct</h1>
      <input type='text' onChange={(e)=>{setName(e.target.value)}} className='form-control' placeholder='Enter Name' />
      <br />
      <input type='file' onChange={(e)=>{setFile(e.target.files[0])}} className='form-control' placeholder='Select file' />
      <br />
      <input type='text' onChange={(e)=>{setPrice(e.target.value)}} className='form-control' placeholder='Enter Price' />
      <br />
      <input type='text' onChange={(e)=>{setDesc(e.target.value)}} className='form-control' placeholder='Enter Description' />
      <br />
      <Button onClick={addProduct}>Add Product</Button>
    </div>
    </>
    
  )
}
