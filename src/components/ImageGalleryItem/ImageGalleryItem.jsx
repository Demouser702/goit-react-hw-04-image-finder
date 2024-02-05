import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <img src={webformatURL} alt={`${id}`} />
    </li>
  );
};

export default ImageGalleryItem;
