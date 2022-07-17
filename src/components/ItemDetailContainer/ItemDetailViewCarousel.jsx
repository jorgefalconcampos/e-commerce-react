import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const ItemDetailViewCarousel = ({ product }) => {
  return (
    <>
      <Carousel variant="dark" className="">
        {product.img.map((preview, index) => (
          <Carousel.Item key={index} className="">
            <Image
              src={preview}
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

export default ItemDetailViewCarousel;