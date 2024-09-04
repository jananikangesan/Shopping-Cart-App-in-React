import React, { useState } from 'react';
import data from "../assets/products.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import "../css/Search.css";

const Search = () => {

  const [find,setFind]=useState("");

  return (
    <div className="container mt-5">
      <h4 className='text-primary'>Filter Table Data</h4>
      <form className='col-md-6' >
        <div class="input-group">
        <input type="text" className='form-control' placeholder='Search Text' onChange={(e)=>setFind(e.target.value)}/>
        <CiSearch className='icon'/>
        </div>
       
      </form>
      <table className='table table-bordered table-striped mt-3'>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Shop</th>
            <th>Food Type</th>
            <th>Amount</th>
            <th>Latest</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item)=>{
            return find==="" ?item:item.name.toLowerCase().includes(find.toLowerCase()) || item.shop.toLowerCase().includes(find.toLowerCase())|| item.ftype.toLowerCase().includes(find.toLowerCase()) ||item.latest.toLowerCase().includes(find.toLowerCase());
          })
          .map((item,index)=>(
            <tr  key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.shop}</td>
              <td>{item.ftype}</td>
              <td>{item.amt}</td>
              <td>{item.latest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Search