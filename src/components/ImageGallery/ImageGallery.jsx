import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images = [], onOpenModal }) {
  return (
    <ul className={s.imageGallery}>
      {images.map(image => (
        <li className={s.imageGalleryItem} key={image.id}>
          <ImageGalleryItem image={image} openModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
  onOpenModal: PropTypes.func,
};

export default ImageGallery;
