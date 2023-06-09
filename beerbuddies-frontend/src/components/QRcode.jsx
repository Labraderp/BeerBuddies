import React from "react";
import CryptoJS from 'crypto-js';
import { userContext } from "../App";
import { useContext } from "react";

export default function QRcode({beerid}) {
    const context = useContext(userContext)
    console.log(context, 'my_context')
    
    const info = beerid;
    console.log(info)
    const salt = 'ginger_bread_man'
    const saltedInfo = salt + info;
    const hash = CryptoJS.SHA256(saltedInfo).toString();
    
    const endpoint = `https://api.qrserver.com/v1/create-qr-code/?data=${hash}&amp;size=100x100`;

    return (
      <div className="QR_container">
        <h1>My QR code:</h1>
        <img src={endpoint} alt="" title="" />
      </div>
    );
  }
  

// move this to utilities? This response is in .png format.
// export const QRcall = async () => {
//     let response = await axios.get('/QRcode/');
//     console.log(response.data, 'my_response')
//     return response.data
// }


