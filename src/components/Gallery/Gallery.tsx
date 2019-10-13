import React from "react";
import "./Gallery.scss";
import { GalleryProps } from "./Interfaces/GalleryProps";

class Gallery extends React.Component<GalleryProps> {
  render() {
    return (
      <section className="gallery">
        {this.props.images.map(image => (
          <div className="gallery__item" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
    );
  }
}

export default Gallery;
