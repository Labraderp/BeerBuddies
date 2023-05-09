import axios from "axios";
import { useState } from "react";


export default function QRcode() {
    const [code, setCode] = useState('')


    return (
        <div className="QR_container">
            <h1>My QR code:</h1>
            {
                code ? <img src={code} alt="" /> : console.log('no code')
            }
            <button onClick={QRcall}>test button</button>
        </div>
    )
}

// move this to utilities?
export const QRcall = async () => {
    let response = await axios.get('/QRcode/');
    console.log(response.data, 'my_response')
    return response.data
}


