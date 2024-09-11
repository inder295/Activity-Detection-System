import { DataGrid } from '@mui/x-data-grid';
import { useEffect,useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';


const Parcels = () => {
  
  const [data,setData]=useState([]);
  
  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'senderName', headerName: 'Sender Name', width: 200 },
    { field: 'recipientName', headerName: 'Recipient Name', width: 200 },
    { field: 'from', headerName: 'From', width: 150 },
    { field: 'to', headerName: 'To', width: 150 },
    { field: 'cost', headerName: 'Cost ($)', width: 100 },
    { field: 'edit', headerName: 'Edit', width: 150 ,

    renderCell: (params)=>{
      
      return (
        <>
        <Link to={`/parcel/${params.row._id}`} >
           <button className='bg-teal-500 text-white  cursor-pointer w-[70px] '>Edit</button>
        </Link>
        </>
      )
     }
    },
    { field: 'delete', headerName: 'Delete', width: 150 ,

      renderCell: (params)=>{
        
        return (
          <>
          <FaTrash className='text-red-500 cursor-pointer m-[2] ' onClick={()=>handleDelete(params.row._id)}/>
           <button className='bg-teal-500 text-white  cursor-pointer w-[70px] '>Delete</button>
          </>
        )
       }
      }
  ];

  useEffect( ()=>{
    
    const getParcels=async ()=>{

      try {
        const res=await publicRequest.get("/parcels")
        setData(res.data); 
      } catch (error){
        console.log(error);
      }

    }

    getParcels();

  },[])

  const handleDelete=async(id)=>{

    try {
      await publicRequest.delete(`/parcels/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }

  }
  


  return (
    <div className="m-[30px] bg-[#fff] p-[20px] ">
      <div className="flex items-center justify-between ">
        <h1 className="m-[20px] text-[20px] ">All Parcels</h1>
        <Link to="/newparcel">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer ">New Parcel</button>
        </Link>

      </div>
        <DataGrid 
        getRowId={(row)=>row._id}
        rows={data} 
        columns={columns} 
        checkboxSelection
        />
    </div>
  )
}

export default Parcels
