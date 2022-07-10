import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const ItemViewCarousel = ({ product }) => {
  return (
    <>
      <Carousel variant="dark" className="">
        {product.img.map((review, index) => (
          <Carousel.Item key={review.id} className="">
            <Image
              src={review}
              fluid
              className="d-block mx-auto"
              alt={`Imagen ${index+1} de ${product.nombre}`}
              style={{ height: 350 }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ItemViewCarousel;