import React, { useState, useEffect } from 'react';
import './App.css';

const posts = [
  {
    id: '1',
    title: 'First post',
    description: 'Lorem ipsum'
  },
  {
    id: '2',
    title: 'Second post',
    description: 'Lorem ipsum'
  },
  {
    id: '3',
    title: 'Third post',
    description: 'Lorem ipsum'
  }
];

export default function App() {
  const [selectedPostId, setPostId] = useState();

  return (
    <ul className="posts">
      {posts
        .filter(p => (selectedPostId ? p.id == selectedPostId : true))
        .map(post => (
          <div
            key={post.id}
            className={`item ${selectedPostId === post.id ? 'active' : ''}`}
            onClick={() => setPostId(selectedPostId ? null : post.id)}
          >
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
    </ul>
  );
}
