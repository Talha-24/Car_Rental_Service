import { toast } from "react-toastify";




// const Toast = {

//     info: (message, time=2000, theme='dark') => {
//         toast.info(message,{
//             autoClose: time,
//             theme: theme,
//         })
//     },



// }

// export default Toast;




const Toast={
    success: (message,time=3000,theme="colored",position='top-right')=>{
        toast.success(message,{
            autoClose: time,
            theme: theme,
            position: position,

        })
    },

    info:(message,time=2000,theme='colored',position='top-right')=>{
          toast.info(message,{
            autoClose: time,
            theme: theme,
            position: position,
          })
    },

    warn:(message,time=2000,theme='colored',position='top-right')=>{
        toast.warn(message,{
            autoClose: time,
            theme: theme,
            position: position,
        })

    },
    error:(message,time=2000,theme='colored',position='top-right')=>{
        toast.error(message,{
            autoClose: time,
            theme: theme,
            position: position,
        })

    }
}



export default Toast