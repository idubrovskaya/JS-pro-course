import React from 'react';
import styles from './Facebook.module.css';

const FacebookPost = ({
  img,
  name,
  postDescription,
  location,
  timeText,
  onClickLike,
  onClickReply,
}) => {
  return (
    <div className={styles.facebookPost}>
      <div className={styles.userAvatar}>
        <img src={img} alt='avatar' />
      </div>
      <div>
        <div>
          <p className={styles.name}>{name}</p>
          <span>&#183; {location}</span>
          <p className={styles.postDescription}>{postDescription}</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={onClickLike}>Like</button>
          <span>&#183;</span>
          <button onClick={onClickReply}>Reply</button>
          <span>&#183; {timeText} ago</span>
        </div>
      </div>
    </div>
  );
};

export default FacebookPost;
