import axios, { Axios } from "axios"
import PopularCars from "./PopularCars/PopularCars"
import ShowRoomCar from "./ShowRoomCar"
import ShowRoomCar2 from "./ShowRoomCar2"
import ShowRoomCar3 from "./ShowroomCar3"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const HomeCars = () => {



  const [showroomdata, setshowroomData] = useState('');
  const [showroomdatatwo, setshowroomdatatwo] = useState('');

  const count = 1;

  async function showroomcars() {
    const token = localStorage.getItem("Token");
    try {
      const showroomresponse = await axios.get(`http://localhost:5000/api/showroom/getAll?page=${count}&pageSize=4`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setshowroomData(showroomresponse.data.data.data);
      console.log("Showroom Data: ", showroomdata);

    } catch (error) {
      console.log("ShowRoom Cars Error : ", error);

    }


  }



  useEffect(() => {
    showroomcars();
    showroomcarstwo();
  }, [])




  async function showroomcarstwo() {
    const token = localStorage.getItem("Token");
    try {
      const showroomresponse = await axios.get(`http://localhost:5000/api/showroom/getAll?page=${2}&pageSize=4`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setshowroomdatatwo(showroomresponse.data.data.data);
      console.log("Showroom Data: ", showroomdata);

    }

    catch (error) {
      console.log("ShowRoom Cars Error : ", error);

    }


  }


  const navigate = useNavigate('');




  return (
    <div className='w-[90%] px-[8vmin] pt-[5vmin] flex flex-col  items-center justify-center homecars  h-[100%]'>
      <div id="NavCarDetails" className="bg-[#FF5C00]  flex flex-col w-[100%] rounded-[1vmin] items-start px-[12vmin] h-fit">

        <div id="text" className="w-[80%] flex flex-col gap-[3vmin] pt-[8vmin]">
          <h3 className="text-[4vmin] font-semibold  text-[#f5f2f2]">Easy way to rent a car at a low price</h3>
          <p className="text-[3vmin]   text-[#FFFFFF]">Providing cheap car rental services and safe and comfortable facilities.</p>
          <div id="button"  >
            <button className="border-[1px] border-[#7B7B7B] text-[#FFFFFF] py-[1vmin] px-[2vmin] rounded-[0.5vmin] text-[3vmin] w-[20%]"> Rental Car</button>
          </div>
        </div>
        <div id="image" className="w-[40%]">
          <img className=" w-[100%] place-self-center" src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CBqWzGHMEpvGy9lyuIogwxYanttPaAwkCM4OzRHypmstoQRiY0cFxkjzddDilmF6GpOMgvGet3o28YzZ8eub8OGB5Z40e2V-fsuKpKB2zMKusQzYYprN8H1RgDq~HYDZ7CDsmz5XfcOSInMRBNrfeUnswDgGzGqhCE23r~5hbjdcgBjACaJ8aY8cFyd1tuCM1k0Jx21JydI~1nyMHA41FiOGNihpMX47y8nknmzpwyRI7dO~NZwOqWK03YX72~ViQofV~1pbPxRIFCBjJXd7fZDlIydiEGY4dTw6QBwF0ZOeplaArUFsqqaCLJJef~6~8MFs3q~lrPBE1HsIjVPaXg__" alt="" />
        </div>
      </div>
      <div className="w-[100%] flex justify-between text-[#90A3BF] font-semibold text-[2.5vmin] py-[2vmin]">
        <p className=''>Popular Car</p><p className=''>Showroom Car</p>
      </div>
      <ShowRoomCar3 />
      <div className="w-[100%] flex text-center text-[#90A3BF] font-semibold text-[2.5vmin] py-[2vmin]">
        <p className=''>Showroom Car</p>
      </div>


      <div className='py-[1vmin]  flex flex-row  gap-[4vmin]  px-[6vmin] w-[100%] overflow-x-scroll ' id='carcontainer' >
        <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>

          {showroomdata ? showroomdata.map(function (showroom,key) {
            console.log("Showroom one", showroom._id);
            const id = showroom._id;
            const showroompicture=showroom.showRoomPicture;

            return (
              <div key={key} className='w-[25%]     text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px]'>
                <img className="w-[100%] h-[130px]" src={showroompicture ? 'http://localhost:5000/' + showroompicture : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'} alt="" />
                <div id="carinfo" className='flex flex-col items-start w-[100%]'>
                  <div className='w-[100%]'>
                    <p className='font-bold text-[0.9rem]  text-[#111111]'>{showroom.showRoomName}</p>
                  </div>
                  <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                    <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                    <p className="text-[#90A3BF] font-semibold">{showroom.location}</p>
                  </div>
                  <div className='flex flex-row items-center justify-between w-[100%]'>
                    <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                    <p className="text-[#90A3BF] font-semibold">{showroom.carCount}</p>

                  </div>

                </div>
                <div className='flex flex-col  w-[100%] items-end'>
                  <button onClick={() => {
                    navigate('showroomCars', { state: { showroomid: id } });
                  }
                  } className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
                </div>
              </div>
            )
          }) : ''}












          {/* <div className='w-[25%] h-[100%] border-[1px]  text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px]'>

            <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

              <div className='w-[100%]'>
                <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

              </div>
              <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                <p className="text-[#90A3BF] font-semibold">Islamabad</p>

              </div>





              <div className='flex flex-row items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                <p className="text-[#90A3BF] font-semibold">30</p>

              </div>

            </div>
            <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

              <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
            </div>
          </div>
          <div className='w-[25%] h-[100%] border-[1px]  text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px]'>

            <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

              <div className='w-[100%]'>
                <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

              </div>
              <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                <p className="text-[#90A3BF] font-semibold">Islamabad</p>

              </div>





              <div className='flex flex-row items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                <p className="text-[#90A3BF] font-semibold">30</p>

              </div>

            </div>
            <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

              <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
            </div>
          </div>
          <div className='w-[25%] h-[100%] border-[1px]  text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px]'>

            <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

              <div className='w-[100%]'>
                <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

              </div>
              <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                <p className="text-[#90A3BF] font-semibold">Islamabad</p>

              </div>





              <div className='flex flex-row items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                <p className="text-[#90A3BF] font-semibold">30</p>

              </div>

            </div>
            <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

              <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
            </div>
          </div> */}
        </div>


        {/* <div className='flex flex-row items-center gap-[4vmin] w-[100%]'>
          <div className='w-[50%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>

            <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

              <div className='w-[100%]'>
                <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

              </div>
              <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                <p className="text-[#90A3BF] font-semibold">Islamabad</p>

              </div>





              <div className='flex flex-row items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                <p className="text-[#90A3BF] font-semibold">30</p>

              </div>

            </div>
            <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

              <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
            </div>
          </div>
          





          <div className='w-[50%] h-[100%] border-[1px]   text-black bg-[#ffffff] rounded-lg flex flex-col justify-between p-[10px]'>

            <img className="w-[100%] h-[50%]" src="https://s3-alpha-sig.figma.com/img/4ece/cc7d/fd4ccd202b60d95579c3c95c9626b637?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C~thMos-rBDxSlzLR4XszYTdIm8E-q7biEMlhripV4zXvR3XZQ5FPZcKvmVQRSOq7uUHJFe0tsZEmCrjVoCjAKxCRmbAEW9fhDAapQRG-rk9SNcJSKOSGcE6q7HYFV6bI2DpTJJlIpBH2aupqFBIRDmgcR8Xsg3BxFrgQkRB1-lzMMo0LL7T6h6h9mRmxjXmktkb0V09JTaWFqaU-MNKBXQWo2f~wem02FANCrHI5wNJZI6u5W7SBSHbNMWBxvgj8eqOgrmzc~QvOAF5eN5otNEArP7qIGBvv-Cf4F1RwkrfscJmTXzt5jNGD9O5G93~OmcL~OHRjUxJP19xJjarQg__" alt="" />

            <div id="carinfo" className='flex flex-col items-start w-[100%]'>

              <div className='w-[100%]'>
                <p className='font-bold text-[0.9rem]  text-[#111111]'>Ammar Rent Car</p>

              </div>
              <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                <p className="text-[#90A3BF] font-semibold">Islamabad</p>

              </div>





              <div className='flex flex-row items-center justify-between w-[100%]'>
                <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                <p className="text-[#90A3BF] font-semibold">30</p>

              </div>

            </div>
            <div className='flex flex-col mt-[2vmin]  w-[100%] items-end'>

              <button className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
            </div>
          </div>
        </div> */}



      </div>
      <div className='py-[1vmin]  flex flex-row  gap-[4vmin]  px-[6vmin] w-[100%] overflow-x-scroll ' id='carcontainer' >

        {showroomdatatwo ? showroomdatatwo.map(function (showroomtwo) {
          console.log("Showroomtwo", showroomtwo);

          const id = showroomtwo._id;

          return (
            <div className='w-[25%] h-[100%]    text-black bg-[#FFFFFF] rounded-lg flex flex-col justify-between p-[10px]'>
              <img className="w-[100%] h-[50%]" src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt="" />

              <div id="carinfo" className='flex flex-col items-start w-[100%]'>

                <div className='w-[100%]'>
                  <p className='font-bold text-[0.9rem]  text-[#111111]'>{showroomtwo.showRoomName}</p>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between w-[100%]'>
                  <p className='font-semibold text-[0.9rem] text-[#111111]'>Location </p>
                  <p className="text-[#90A3BF] font-semibold">{showroomtwo.location}</p>
                </div>
                <div className='flex flex-row items-center justify-between w-[100%]'>
                  <p className='font-semibold text-[0.9rem]  text-[#111111]'>Available Cars</p>
                  <p className="text-[#90A3BF] font-semibold">{showroomtwo.carCount}</p>

                </div>

              </div>
              <div className='flex flex-col  w-[100%] items-end'>

                <button onClick={() => {

                  navigate('showroomCars', { state: { showroomid: id } });


                }} className='py-[1.3vmin] px-[1.2vmin] bg-[#FF5C1E] rounded-sm text-white font-semibold text-[2.5vmin] w-[48%]'>View</button>
              </div>
            </div>

          )

        }) : "No Car"}
      </div>

    </div>
  )
}

export default HomeCars