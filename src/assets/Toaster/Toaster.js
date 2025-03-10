import { toast } from "react-toastify";




export default function Toast(message){

    toast(message,{
        autoClose: 3000,
        theme: 'dark',
    })

}

