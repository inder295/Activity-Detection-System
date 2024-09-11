import { useState,useEffect } from "react";
import {useLocation } from "react-router-dom";
import { publicRequest } from '../requestMethods';


const Parcel = () => {

  const [parcel,setParcel]=useState({});
  const location=useLocation();
  const parcelId=location.pathname.split("/")[2];

  const [inputs,setInputs]=useState({});

  const handleChange=(e)=>{
     setInputs((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
     })
  }

  useEffect(()=>{
    const getParcel=async ()=>{

      try {
        const res=await publicRequest.get("/parcels/find" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.log(error)
      }

    }

    getParcel();

  },[parcelId])

  const handleUpdate=async()=>{

    try {
      await publicRequest.put(`/parcels/${parcelId}`,inputs)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="m-[30px] bg-[#fff] p-[20px] ">
      <h2 className="font-semibold">Edit Parcel</h2>
      <div className="flex" >

        <div className="m-[20px] ">
          
          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">From</label>
            <input type="text" placeholder={parcel.from} name="from" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">To</label>
            <input type="text" placeholder={parcel.to} name="to" onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Sender Name</label>
            <input type="text" placeholder={parcel.sendername} name="sendername" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Recipient Name</label>
            <input type="text" placeholder={parcel.recipientname} name="recipientanme" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Sender Email</label>
            <input type="text" placeholder={parcel.senderemail} name="senderemail" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Recipient Email</label>
            <input type="text" placeholder={parcel.recipientemail} name="recipientname" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

        </div>

        <div className="m-[20px] ">
          
          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Weight</label>
            <input type="Number" placeholder={parcel.weight} name="weight" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Cost</label>
            <input type="Number" placeholder={parcel.cost} name="cost" onChange={handleChange}  
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Date</label>
            <input type="date" placeholder={parcel.date} name="date" onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <div className="flex flex-col my-[20px] ">
            <label htmlFor="">Note</label>
            <textarea  type="text" placeholder={parcel.Note} name="note" onChange={handleChange} 
            className="border-2 border-[#555] border-solid p-[10px]  w-[300px] " />
          </div>

          <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] " onClick={handleUpdate}>
            Update
          </button>

        </div> 

        <div className="flex flex-col ">
          <h2 className="font-semibold">Feedback</h2>
          <span>Parcel received in good condition</span>
          {parcel.status===1 || parcel.status===0 ? 
          <span className="text-red-500 text-[18px] ">Pending</span>:
          <span className="text-green-500 text-[18px] ">Delivered</span>
          }
        </div>  



      </div>
      
    </div>


      
  )
}

export default Parcel
