import React from 'react';
import NavBar from './NavBar';
import '../styling/BlogPageStyle.css';

function BlogPage() {
  return (
    <div className="blog-page-container">
      <NavBar />
      <h1>Blog page</h1>
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/groups/152660442061070/" aria-label="Facebook group" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a></li>
          <li><a href="https://www.instagram.com/coachjessicasullivan/?hl=en" aria-label="Instagram profile" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default BlogPage;
