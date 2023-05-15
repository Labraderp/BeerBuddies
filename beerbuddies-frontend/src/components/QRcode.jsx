import React from "react";
import CryptoJS from 'crypto-js';

export default function QRcode({beerid}) {

    const info = beerid;
    const salt = 'ginger_bread_man'
    const saltedInfo = salt + info;
    const hash = CryptoJS.SHA256(saltedInfo).toString();
    console.log(info)
    
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


