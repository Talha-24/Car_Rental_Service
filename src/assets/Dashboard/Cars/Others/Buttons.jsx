

import { useLocation } from "react-router-dom";
import "./Button.css";
import BookedCarButtons from "./Buttons/BookedCarButtons";
import ShowroomCarButtons from "./Buttons/ShowroomCarButtons";
import MyOrderButtons from "./Buttons/MyOrderButtons";
const Buttons = ({ setFilter }) => {

  const location = useLocation();
  console.log("Location", location.pathname);










  return (
    <div className="w-[100%]">
      {location.pathname == '/showroomowner/bookedcars' ? <BookedCarButtons setFilter={setFilter} /> : ''}
      {location.pathname == '/showroomowner/showroomcars' ? <ShowroomCarButtons setFilter={setFilter} /> : '' }
      {location.pathname == '/showroomowner/myorders' ? <MyOrderButtons setFilter={setFilter} /> : ''}
      {location.pathname == '/showroomowner/showrooms' || location.pathname == '/showroomowner/cars' ? <ShowroomCarButtons setFilter={setFilter} /> : ''}

    </div>
  )
}

export default Buttons