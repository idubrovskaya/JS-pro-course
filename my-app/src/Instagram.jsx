import { Component } from 'react';

import styles from './Instagram.module.css';
import avatar from './imgs/avatar.jpg';
import story1 from './imgs/story1.jpg';
import story2 from './imgs/story2.jpg';
import story3 from './imgs/story3.jpg';
import story4 from './imgs/story4.jpg';
import story5 from './imgs/story5.jpg';
import feed from './imgs/feed.svg';
import marked from './imgs/marked.svg';

import post1 from './imgs/post1.jpg';
import post2 from './imgs/post2.jpg';
import post3 from './imgs/post3.jpg';
import post4 from './imgs/post4.jpg';
import post5 from './imgs/post5.jpg';
import post6 from './imgs/post6.jpg';
import post7 from './imgs/post7.jpg';
import post8 from './imgs/post8.png';
import post9 from './imgs/post9.jpg';

import home from './imgs/home.svg';
import searching from './imgs/look.svg';
import add from './imgs/add.svg';
import heart from './imgs/heart.svg';
import user from './imgs/user.svg';

export function InstagramCard() {
  return (
    <div className={styles.instagramContainer}>
      <div>
        <h2 className={styles.userName}>i.dubrovskayaa</h2>
      </div>
      <div className={styles.userFollowData}>
        <img src={avatar} alt='avatar' className={styles.avatar}></img>
        <div className={styles.userData}>
          <p>
            <b>129</b>
          </p>
          <p>Posts</p>
        </div>
        <div className={styles.userData}>
          <p>
            <b>438</b>
          </p>
          <p>Followers</p>
        </div>
        <div className={styles.userData}>
          <p>
            <b>152</b>
          </p>
          <p>Following</p>
        </div>
      </div>
      <div className={styles.userInfo}>
        <h4>Irina Dubrovskaya</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt #hashtag
        </p>
        <p>
          Followed by <b>username</b> and <b>username</b>
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonBlue}>Follow</button>
        <button className={styles.buttonWhite}>Message</button>
        <button className={styles.buttonWhite}>Email</button>
      </div>
      <div className={styles.storyNavigation}>
        <img src={story1} alt='story1' className={styles.stories}></img>
        <img src={story2} alt='story2' className={styles.stories}></img>
        <img src={story3} alt='story3' className={styles.stories}></img>
        <img src={story4} alt='story4' className={styles.stories}></img>
        <img src={story5} alt='story5' className={styles.stories}></img>
      </div>

      <div className={styles.bottom}>
        <img src={feed} alt='feed' className={styles.bottomNavigation}></img>
        <img
          src={marked}
          alt='marked'
          className={styles.bottomNavigation}
        ></img>
      </div>

      <div className={styles.postFeed}>
        <img src={post1} alt='post1' className={styles.posts}></img>
        <img src={post2} alt='post2' className={styles.posts}></img>
        <img src={post3} alt='post3' className={styles.posts}></img>
        <img src={post4} alt='post4' className={styles.posts}></img>
        <img src={post5} alt='post5' className={styles.posts}></img>
        <img src={post6} alt='post6' className={styles.posts}></img>
        <img src={post7} alt='post7' className={styles.posts}></img>
        <img src={post8} alt='post8' className={styles.posts}></img>
        <img src={post9} alt='post9' className={styles.posts}></img>
      </div>
      <div className={styles.bottom}>
        <img src={home} alt='home' className={styles.bottomNavigation}></img>
        <img
          src={searching}
          alt='search'
          className={styles.bottomNavigation}
        ></img>
        <img src={add} alt='add' className={styles.bottomNavigation}></img>
        <img src={heart} alt='heart' className={styles.bottomNavigation}></img>
        <img src={user} alt='user' className={styles.bottomNavigation}></img>
      </div>
    </div>
  );
}
