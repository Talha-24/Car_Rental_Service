
import Verification from "./assets/Components/Mail Verification/Re/Images/Verification"
import ResetComponent from "./assets/Components/Reset Password/Email Authentication/ResetComponent"
import ResetPassword from "./assets/Components/Reset Password/Email Authentication/ResetPassword"
import NewPassword from "./assets/Components/Reset Password/New Authentication/NewPassword"
import RetakingAuthority from "./assets/Components/Reset Password/New Authentication/RetakingAuthority"
import Signin from "./assets/Components/Sign In/Signin"
import Login from "./assets/Components/SignUp/Login"
import SignUp from "./assets/Components/SignUp/SignUp"
import SelectionComponent from "./assets/Components/User Selection/SelectionComponent"
import UserSelection from "./assets/Components/User Selection/UserSelection"
import Header from "./assets/Dashboard/Header/Header"
import Sidebar from "./assets/Dashboard/Header/Sidebar/Sidebar"

//Login
//Create Account
//Verification Code Responsivness Done...
//Resest Password... Responsiveness Done
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
    
    </div>
  )
}

export default App