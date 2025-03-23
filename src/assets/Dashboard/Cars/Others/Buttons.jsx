

import { useLocation } from "react-router-dom";
import "./Button.css";
import BookedCarButtons from "./Buttons/BookedCarButtons";
import ShowroomCarButtons from "./Buttons/ShowroomCarButtons";
import MyOrderButtons from "./Buttons/MyOrderButtons";
import { obj } from "../../../Utils/RoutesPaths";
const Buttons = ({ setFilter }) => {

  const location = useLocation();


  return (
    <div className="w-[100%] flex flex-row flex-wrap">


      {location.pathname == obj.bookedcars ? <BookedCarButtons setFilter={setFilter} /> : ''}
      {location.pathname == obj.usershowroomcars? <ShowroomCarButtons setFilter={setFilter} /> : '' }
      {location.pathname == obj.myorders ? <MyOrderButtons setFilter={setFilter} /> : ''}
      {location.pathname == obj.superadminhome || location.pathname == obj.superadmincars ? <ShowroomCarButtons setFilter={setFilter} /> : ''}


    </div>
  )
}

export default Buttons