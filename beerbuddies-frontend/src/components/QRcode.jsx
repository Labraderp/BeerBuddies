import axios from "axios";
import { useState } from "react";
import creed from '../images/creed.jpeg'


export default function QRcode() {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100`;

  
    return (
      <div className="QR_container">
        <h1>My QR code:</h1>
        <img src={url} alt="" title="" />
      </div>
    );
  }
  

// move this to utilities? This response is in .png format.
// export const QRcall = async () => {
//     let response = await axios.get('/QRcode/');
//     console.log(response.data, 'my_response')
//     return response.data
// }


