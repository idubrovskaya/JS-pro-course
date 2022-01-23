import React from 'react';
import styles from './Onliner.module.css';
import OnlinerPost from './OnlinerPost';

const posts = [
  {
    id: 1,
    title: 'Современный буллинг - есть ли там дно?',
    backgroundImageUrl: './images/onliner1.jpeg',
    category: 'ЛЮДИ',
    commentCount: '457',
    onClick() {
      alert('Clicked!');
    },
  },
  {
    id: 2,
    title: 'Ленивый айтишник написал код и больше не работает',
    backgroundImageUrl: './images/technologies.jpeg',
    category: 'ТЕХНОЛОГИИ',
    commentCount: '398',
    onClick() {
      alert('Clicked!');
    },
  },
  {
    id: 3,
    title: 'Стоит ли вкладываться в юани и швейцарские франки?',
    backgroundImageUrl: './images/wallet.jpeg',
    category: 'КОШЕЛЁК',
    commentCount: '1014',
    onClick() {
      alert('Clicked!');
    },
  },
];

const Onliner = () => {
  return (
    <div>
      {posts.map((post) => (
        <OnlinerPost
          key={post.id}
          title={post.title}
          backgroundImageUrl={post.backgroundImageUrl}
          category={post.category}
          commentCount={post.commentCount}
          onClick={post.onClick}
        />
      ))}
    </div>
  );
};

export default Onliner;
