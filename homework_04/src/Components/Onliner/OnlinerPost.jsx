import React from 'react';
import styles from './Onliner.module.css';

const OnlinerPost = ({
  title,
  backgroundImageUrl,
  category,
  commentCount,
  onClick,
}) => {
  return (
    <div
      className={styles.onlinerPost}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <p className={styles.comment}>{commentCount}</p>
      </div>
      <h1 className={styles.title} onClick={onClick}>
        {title}
      </h1>
    </div>
  );
};
export default OnlinerPost;
