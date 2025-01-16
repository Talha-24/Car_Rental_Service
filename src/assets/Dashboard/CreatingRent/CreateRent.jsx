import { useState } from "react"

const CreateRent = (propse) => {





    const [username, setusername] = useState('');
    const [usercnic, setusercnic] = useState('');
    const [guarantiername, setguarantiername] = useState('');
    const [guarantiercnic, setguarantiercnic] = useState('');
    const [userphonenumber, setuserphonenumber] = useState('');
    const [usercnicimage, setusercnicimage] = useState('');
    const [guarantiercnicimage, setguarantiercnicimage] = useState('');

    function userData() {
        console.log(usercnicimage);
        console.log(guarantiercnicimage);
    }


    return (

        <form onSubmit={(e) => { e.preventDefault() }} className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] flex flex-col items-center justify-around dd">
            <div className="w-[100%] min-h-[300px] bg-[#FFFFFF] rounded py-[2em] px-[2vmin] flex flex-row justify-around dd">
                <div className="flex flex-col gap-[1vmin] dd_parent w-[50%] px-[6vmin]">
                    <div className="flex flex-col">
                    <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin]">Name</label>
                    <input onChange={(e) => { setusername(e.target.username) }} value={username} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="M. Talha" type="text" />
                    </div>
                    <div  className="flex flex-col">
                    <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin]">Cnic</label>
                    <input onChange={(e) => { setusercnic(e.target.value) }} value={usercnic} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="00000000000" type="number" />
                    </div>
                    <div className="flex flex-col">

                    
                    <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin]">Guarantier Name</label>
                    <input onChange={(e) => { setguarantiername(e.target.value) }} value={guarantiername} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="Abdul Rauf" type="text" />
                    </div>
                    <div className="flex flex-col">
                    <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin]">Gruarantier Cnic</label>
                    <input onChange={(e) => { setguarantiercnic(e.target.value) }} value={guarantiercnic} className="py-[1vmin] px-[2vmin] text-[2.5vmin]  border-[1px] bg-[#F6F7F9] rounded-[1vmin]" placeholder="0000000000" type="number" />
                    </div>
                </div>

                <div className="flex flex-col justify-start gap-[4vmin] dd_parent w-[50%]">
                    <div className="flex flex-col mt-2 w-[100%] px-[6vmin]">
                        <label htmlFor="" className=" text-black inline-block font-semibold text-[2.5vmin] ">Phone No</label>
                        <input onChange={(e) => { setuserphonenumber(e.target.value) }} value={userphonenumber} className="py-[1vmin] px-[2vmin] text-[2.5vmin]   border-[1px] bg-[#F6F7F9] rounded-[1vmin] " placeholder="0000000000" type="number" />
                    </div>
                    <div className="flex flex-row  items-center gap-[10vmin] w-[100%] px-[6vmin]">
                        <div className="flex flex-col gap-[1.5vh] items-start w-[100%]">
                            <p className="text-sm font-semibold text-[2vmin]">User Cnic</p>
                            <input id='cnic' onChange={(e) => { setusercnicimage(e.target.value) }} value={usercnicimage} className="h-[4vmin] text-[1.5vmin]" type="file" />

                        </div>
                        <div className="flex flex-col gap-[1.5vh] items-start w-[100%]">
                            <p className="text-sm font-semibold text-[2vmin]">Guarantier Cnic</p>
                            <input id='cnic' onChange={(e) => { setguarantiercnic(e.target.value) }} value={guarantiercnicimage} className="h-[4vmin]  text-[1.5vmin]" type="file" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-[100%]">
                <button onClick={() => { userData();
                    propse.setselectUser('Booking')
                 }} className="py-[1.5vmin] px-[2vmin] w-[20%] bg-[#FF5C00] rounded-[0.7vmin] text-[2.5vmin] text-white">Rent Now!</button>
            </div>


        </form>

    )
}

export default CreateRent