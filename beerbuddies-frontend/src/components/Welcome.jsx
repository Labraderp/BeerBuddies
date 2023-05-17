import Carousel from 'react-bootstrap/Carousel'
import drinking1 from '../images/drinking1.webp'
import drinking2 from '../images/drinking2.jpeg'
import drinking3 from '../images/drinking3.jpeg'

export const Welcome = () => {
  return (
    <div className='carousel-container'>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drinking1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Browse!</h2>
            <p>Search for buddies and their local restaurants.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drinking2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Buy!</h2>
            <p>Purchase a beer token.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={drinking3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Booze!</h2>
            <p>
              Send it to a buddy to drink from wherever they are.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}