import React, { PropTypes } from 'react';
import styles from './styles';

const propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

function Image({ image, caption }) {
  return (
    <figure className={styles.root}>
      <img
        className={styles.image}
        src={image}
        alt={caption}
      />
      {renderCaption(caption)}
    </figure>
  );
}

function renderCaption(caption) {
  if (caption) {
    return <figcaption className={styles.caption}>{caption}</figcaption>;
  }
}

Image.propTypes = propTypes;
export default Image;
