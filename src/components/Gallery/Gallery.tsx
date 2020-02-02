import React, { MouseEvent } from "react";
import "./Gallery.scss";
import { GalleryProps } from "./Interfaces/GalleryProps";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class Gallery extends React.Component<GalleryProps> {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  openGallery = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ isOpen: true, photoIndex: e.currentTarget.getAttribute('data-photo') });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const images = Object.values(this.props.images);
    return (
      <section className="gallery">
        {this.props.images && Object.values(this.props.images).map((image, index) => (
          <div className="gallery__item" key={index}>
            <img src={String(image)} data-photo={index} onClick={(e) => this.openGallery(e)} />
          </div>
        ))}

        {isOpen && (
          <Lightbox
            mainSrc={String(images[photoIndex])}
            nextSrc={String(images[(photoIndex + 1) % images.length])}
            prevSrc={String(images[(photoIndex + images.length - 1) % images.length])}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </section>
    );
  }
}

export default Gallery;
