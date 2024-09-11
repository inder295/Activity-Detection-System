import {FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

const Parcels = () => {

  
  
  const rows = [
    { id: 1, senderName: 'John Doe', recipientName: 'Jane Smith', from: 'New York', to: 'Los Angeles', cost: 300 },
    { id: 2, senderName: 'Michael Johnson', recipientName: 'Emily Davis', from: 'Chicago', to: 'Houston', cost: 250 },
    { id: 3, senderName: 'David Brown', recipientName: 'Sarah Wilson', from: 'Phoenix', to: 'Philadelphia', cost: 280 },
    { id: 4, senderName: 'Daniel Martinez', recipientName: 'Laura Garcia', from: 'San Antonio', to: 'Dallas', cost: 120 },
    { id: 5, senderName: 'James Taylor', recipientName: 'Olivia Moore', from: 'San Diego', to: 'San Jose', cost: 150 },
    { id: 6, senderName: 'Robert Clark', recipientName: 'Mia Scott', from: 'Denver', to: 'Seattle', cost: 320 },
    { id: 7, senderName: 'William Harris', recipientName: 'Sophia Lee', from: 'Boston', to: 'Miami', cost: 400 },
    { id: 8, senderName: 'Linda King', recipientName: 'Lucas Perez', from: 'Orlando', to: 'Atlanta', cost: 220 },
    { id: 9, senderName: 'Barbara Wright', recipientName: 'Ella Baker', from: 'Las Vegas', to: 'Portland', cost: 270 },
    { id: 10, senderName: 'Henry Green', recipientName: 'Grace Adams', from: 'San Francisco', to: 'Austin', cost: 350 }
  ];
  
  const columns = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'senderName', headerName: 'Sender Name', width: 200 },
    { field: 'recipientName', headerName: 'Recipient Name', width: 200 },
    { field: 'from', headerName: 'From', width: 150 },
    { field: 'to', headerName: 'To', width: 150 },
    { field: 'cost', headerName: 'Cost ($)', width: 100 }
  ];
  
  
  
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
        <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
          <Link to="/myparcels" >
           <FaArrowLeft className='text-[#444] text-[18px] m-2  cursor-pointer'/>
          </Link>

          <div className='flex justify-between p-[10px] '>
            <span className='text-[18px] text-[#444]'>All Parcels</span>
            <span className='font-semibold text-[#444] '>Alok Mandola</span>

          </div>

          <div className='p-3 ' > 

          <DataGrid rows={rows} columns={columns} checkboxSelection />

          </div>
         
      </div>
    </div>
  )
}

export default Parcels
