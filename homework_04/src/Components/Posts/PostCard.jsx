import React from 'react';
import styles from './Posts.module.css';

const PostCard = ({ title, subtitle, author }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postTitles}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className={styles.postAuthor}>
        <p>
          Author: <a href='/'>{author}</a>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
