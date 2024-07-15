import Carousel from "react-bootstrap/Carousel";

function BannerView({ banners }) {
  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100 h-30"
            src={banner.image}
            alt={banner.title}
          />
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerView;
