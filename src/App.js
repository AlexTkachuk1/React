import React, {useCallback, useEffect, useMemo, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import "./styles/app.css";
import PostService from "./API/PostService";




function App() {
  const[posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Description3"},
    {id: 2, title: "Javascript 2", body: "Description2"},
    {id: 3, title: "Python", body: "Description1"},
  ]);
  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false); 
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);
 useEffect(()=>{fetchPosts()}, [] )

 async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout( async ()=>{
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostLoading(false);
    }, 1000) 
 }

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App"> 
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostLoading 
        ? <h1>Идет загрузка...</h1>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
      }
      
    </div>
  );
}

export default App;
