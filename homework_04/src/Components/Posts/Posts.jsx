import React from 'react';
import PostCard from './PostCard';
import styles from './Posts.module.css';

const posts = [
  {
    id: 1,
    title: 'qui est esse',
    subtitle:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    author: 'Clementina DuBuque',
  },
  {
    id: 2,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    subtitle:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    author: 'Glenna Reichert',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    subtitle:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    author: 'Kurtis Weissnat',
  },
  {
    id: 4,
    title: 'dolorem eum magni eos aperiam quia',
    subtitle:
      'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    author: 'Chelsey Dietrich',
  },
  {
    id: 5,
    title: 'magnam facilis autem',
    subtitle:
      'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
    author: 'Patricia Lebsack',
  },
];

const Posts = () => {
  return (
    <div className={styles.postCard}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          author={post.author}
        />
      ))}
    </div>
  );
};

export default Posts;
