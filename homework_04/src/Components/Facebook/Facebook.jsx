import React from 'react';
import styles from './Facebook.module.css';
import FacebookPost from './FacebookPost';

const posts = [
  {
    id: 1,
    img: './images/avatar1.jpg',
    name: 'Leanne Graham',
    location: 'LA',
    text: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    time: '2 seconds',
    like() {
      alert('Liked!');
    },
    reply() {
      alert('Replied!');
    },
  },
  {
    id: 2,
    img: './images/avatar2.jpg',
    name: 'Ervin Howell',
    location: 'California',
    text: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    time: '1 year',
    like() {
      alert('Liked!');
    },
    reply() {
      alert('Replied!');
    },
  },
  {
    id: 3,
    img: './images/avatar3.jpg',
    name: 'Chelsey Dietrich',
    location: 'Paris',
    text: 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque',
    time: '36 minutes',
    like() {
      alert('Liked!');
    },
    reply() {
      alert('Replied!');
    },
  },
  {
    id: 4,
    img: './images/avatar4.jpg',
    name: 'Kurtis Weissnat',
    location: 'Zwolle',
    text: 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea',
    time: '4 hours',
    like() {
      alert('Liked!');
    },
    reply() {
      alert('Replied!');
    },
  },
];

const Facebook = () => {
  return (
    <div className={styles.facebookCard}>
      {posts.map((post) => (
        <FacebookPost
          key={post.id}
          img={post.img}
          name={post.name}
          location={post.location}
          postDescription={post.text}
          onClickLike={post.like}
          onClickReply={post.reply}
          timeText={post.time}
        />
      ))}
    </div>
  );
};
export default Facebook;
