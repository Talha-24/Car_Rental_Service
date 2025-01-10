import { useState } from "react"

const CreateRent = () => {





const [username,setusername]=useState('');
const [usercnic,setusercnic]=useState('');
const [guarantiername,setguarantiername]=useState('');
const [guarantiercnic,setguarantiercnic]=useState('');
const [userphonenumber,setuserphonenumber]=useState('');
const [usercnicimage,setusercnicimage]=useState('');
const [guarantiercnicimage,setguarantiercnicimage]=useState('');

function userData(){
    console.log(usercnicimage);
    console.log(guarantiercnicimage);
}


  return (
    
    <form onSubmit={(e)=>{e.preventDefault()}} className="w-[700px] min-h-[300px] bg-[#f9f9f9] rounded py-8 flex flex-row justify-around dd">
        <div className="flex flex-col gap-[10px]">
            <label htmlFor="" className="text-sm font-semibold">Name</label>
            <input onChange={(e)=>{setusername(e.target.username)}} value={username} className="py-[5px] px-[12px] text-sm  w-[200px] border-[1px] border-black bg-[#F6F7F9] rounded-sm"  placeholder="M. Talha" type="text" />
            <label htmlFor="" className="text-sm font-semibold">Cnic</label>
            <input onChange={(e)=>{setusercnic(e.target.value)}} value={usercnic} className="py-[5px] px-[12px] text-sm  w-[200px] border-[1px] border-black bg-[#F6F7F9] rounded-sm"  placeholder="00000000000" type="number" />
            <label htmlFor="" className="text-sm font-semibold">Guarantier Name</label>
            <input onChange={(e)=>{setguarantiername(e.target.value)}} value={guarantiername} className="py-[5px] px-[12px] text-sm  w-[200px] border-[1px] border-black bg-[#F6F7F9] rounded-sm"  placeholder="Abdul Rauf" type="text" />
            <label htmlFor="" className="text-sm font-semibold">Gruarantier Cnic</label>
            <input onChange={(e)=>{setguarantiercnic(e.target.value)}} value={guarantiercnic} className="py-[5px] px-[12px] text-sm  w-[200px] border-[1px] border-black bg-[#F6F7F9] rounded-sm"  placeholder="0000000000" type="number" />
        </div>
        <div className="flex flex-col items-start gap-[40px]">
            <div className="flex flex-col mt-2">
            <label htmlFor="" className="text-sm text-black inline-block font-semibold">Phone No</label>
            <input onChange={(e)=>{setuserphonenumber(e.target.value)}} value={userphonenumber} className="py-[5px] px-[12px] text-sm  w-[200px] border-[1px] border-black bg-[#F6F7F9] rounded-sm"  placeholder="0000000000" type="number" />
            </div>
            <div className="flex flex-row items-start w-[100%] gap-[40px]"> 
                <div className="flex flex-col gap-[10px] items-start">
                    <p className="text-sm font-semibold">User Cnic</p>
                    <input onChange={(e)=>{setusercnicimage(e.target.value)}} value={usercnicimage} className="h-[24px] text-[10px]" type="file" />

                </div>
                <div className="flex flex-col gap-[10px] items-start">
                    <p className="text-sm font-semibold">Guarantier Cnic</p>
                    <input onChange={(e)=>{setguarantiercnic(e.target.value)}} value={guarantiercnicimage} className="h-[24px] text-[10px]" type="file" />
                </div>
               
            </div>
            <button onClick={()=>{userData()}} className="py-[4px] px-[8px] w-[100%] bg-[#FF5C00] rounded-sm text-sm text-white">Rent Now!</button>
        </div>
        
    </form>
   
  )
}

export default CreateRent