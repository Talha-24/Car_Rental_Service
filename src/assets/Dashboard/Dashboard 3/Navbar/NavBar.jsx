import Home from '../../Header/SideBar2/Components/SideBarBtns/Home'

const NavBar = () => {
    return (
        <span className="px-[2vmin]  pt-[5vmin] w-[20%] min-h-[700px] flex flex-col bg-[#FFFFFF] sidebar2">
            <div id='mainmenu' className="w-[100%] flex flex-col justify-start gap-[20%] h-[100%]">
                <div>
                    <p className='text-[#94A7CB66] text-[2.5vmin] w-[100%]'>Main Menu</p>
                    <Home />
   
                </div>
{/* 
Preference
     Setting
    Help Center
     */}
                <div>
                <p className='text-[#94A7CB66] text-[2.5vmin]'>Preferences</p>
            <div className="flex flex-row justify-around items-center py-[0.8vmin] px-[.7vmin] rounded-[1vmin] mt-[1vmin] w-[100%]">
                        <span id="svg">
                            <svg className="w-[4vmin] h-[5vmin]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>



                        </span>
                        <p className=" text-[#90A3BF] text-[2.8vmin]">Setting</p>

                    </div>
                    <div className="flex flex-row w-[100%] justify-around items-center py-[0.8vmin] px-[.7vmin] rounded-[1vmin] mt-[1vmin]">
                        <span id="svg">
                            <svg className="w-[4vmin] h-[5vmin]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#90A3BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 8V13" stroke="#90A3BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9945 16H12.0035" stroke="#90A3BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>



                        </span>
                        <p className=" text-[#90A3BF] text-[2.8vmin]">Help</p>

                    </div>
                   
                   
                </div>

            </div>



        </span>
    )
}

export default NavBar