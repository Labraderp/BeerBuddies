import beerBottle from '../images/beerBottleSmash.gif'

export default function ErrorPage() {
    return (
        <div className="error">
            <h1>404 not found</h1>
            <img src={beerBottle} alt="" />
        </div>
    )
}