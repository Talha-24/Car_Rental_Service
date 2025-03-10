import axios from "axios";
import swal from "sweetalert";
// export default function httpRequestHandler(endpoint, reqType, body) {
//   // const cookies = new Cookies();
//   const token=localStorage.getItem("Token");

//   const baseurl = "http://localhost:5001/api/";
//   // const baseurl = "http://192.168.100.32:5001/api/";
//   // const baseurl = "http://192.168.100.20:5001/api/";
//   // const token = cookies.get("accesstoken");
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',

//   };

//   const url = baseurl + endpoint;
//   let apiconfige = "";
//   return new Promise((resolve, reject) => {
//     try {
//       if (reqType === "get") {
//         apiconfige = axios.get(url, { headers });
//       } else if (reqType === "post") {
//         apiconfige = axios.post(url, body, { headers });
//       } else if (reqType === "put") {
//         apiconfige = axios.put(url, body, { headers });
//       } else if (reqType === "patch") {
//         apiconfige = axios.patch(url, body, { headers });
//       } else if (reqType === "delete") {
//         apiconfige = axios.delete(url, { headers });
//       }

//       apiconfige
//         .then((response) => {
//           resolve(response.data.data);
//         })
//         .catch((error) => {
//           console.log(error);
//           swalAlert("", error.messsage)
//           reject(error.messsage);
//         });
//     } catch (error) {

//     }
//   });
// }





// export default function httpRequestHandler(endpoint, reqType, body) {
//   console.log("In Js Function")

//   const token = localStorage.getItem("Token");//A Unique Identity  for 
//   const baseURL = `http://localhost:5000/api`;
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     'content-type': 'application/json',
//   }

//   let url = baseURL + endpoint;
//   let apiconfig = '';
//   return new Promise((resolve, reject) => {

//     try {

//       if (reqType == 'get') {
//         apiconfig = axios.get(url, { headers });
//       }
//       else if (reqType == 'post') {
//         apiconfig = axios.post(url, body ?? '', { headers });
//       }
//       else if (reqType == 'put') {
//         apiconfig = axios.put(url, body ?? '', { headers });
//       }
//       else if (reqType == 'delete') {
//         apiconfig = axios.delete(url, body ?? '', { headers });
//       }

//       apiconfig.then((response) => {
//         resolve(response.data.data);
//         swal("Promise is resolved");
//       }).catch((error) => {
//         swal("", error.message);
//       })


//     } catch (error) {


//     }



export default function serverRequestHandler(endPoint, reqType, body) {
  const token = localStorage.getItem("Token");

  const headers = {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  }

  const baseUrl = `http://localhost:5000/api`;
  let url = baseUrl + endPoint;
  let apiresponse = '';
  return new Promise((reslove, reject) => {
    try {
      if (reqType == 'get') {
        apiresponse = axios.get(url, body ?? { headers }, { headers });
      }
      else if (reqType == 'post') {
        apiresponse = axios.post(url, body, { headers });
      }
      else if (reqType == 'put') {
        apiresponse = axios.put(url, body, { headers });

      }
      else if (reqType == 'delete') {
        apiresponse = axios.delete(url, body, { headers });
      }
      apiresponse.then((response) => {
        reslove(response.data.data);
      })
        .catch((error) => {
          reject(error.response.data);
          // swal(error);
          // swal('Promise Rejection',error.response.data.message);
        })
    } catch (error) {
    }
  })
}




// export function uploadImage(endPoint, f, method) {

//   let baseUrl = 'http://localhost:500/api'
//   let url = baseUrl + endPoint;
//   let apiResponse = '';

//   return new Promise((resolve, rejected) => {

//     try {

//       if (method == 'post') {
//         apiResponse = axios.post(url, f);
//       }

//       else if (method == 'get') {
//         apiResponse = axios.get(url, f);
//       }

//       apiResponse.then((response) => {
//         console.log("RR",response);
//         resolve(response);

//       })
//         .catch((error) => {
//           rejected(error);

//         })
//     } catch (error) {

//     }

//   })



// }




