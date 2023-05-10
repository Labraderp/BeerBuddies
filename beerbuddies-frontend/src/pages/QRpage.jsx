import { useParams } from "react-router-dom";
import QRcode from "../components/QRcode";

export default function QRpage() {
    const { id } = useParams()

    return (
        <div className="QRpage">
            <QRcode beerid={id}/>
        </div>
    )
}