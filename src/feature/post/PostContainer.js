import { useEffect, useState } from 'react';
import PostCreateToggle from './PostCreateToggle';
import PostList from './PostList';
import * as postService from '../../api/postApi';
import * as likeService from '../../api/likeApi';
import { useAuth } from '../../context/authContext';

function PostContainer() {
  const [posts, setPosts] = useState([]);

  const {
    user: { id }
  } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await postService.getUserPosts(id, 'friend');
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [id]);

  const createPost = async input => {
    const res = await postService.createPost(input);
    setPosts([res.data.post, ...posts]);
  };

  const toggleLike = async postId => {
    try {
      const res = await likeService.toggleLike(postId);
      const idx = posts.findIndex(item => item.id === postId);
      const clonedPosts = [...posts];
      if (res.data.like) {
        clonedPosts[idx].Likes.push(res.data.like);
        return setPosts(clonedPosts);
      }
      clonedPosts[idx].Likes = clonedPosts[idx].Likes.filter(
        item => item.userId !== id
      );
      setPosts(clonedPosts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto py-4 max-w-152">
      <div className="mx-2 d-flex flex-column gap-3">
        <PostCreateToggle createPost={createPost} />
        <PostList posts={posts} toggleLike={toggleLike} />
      </div>
    </div>
  );
}

export default PostContainer;
