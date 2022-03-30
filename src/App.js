import React, {useMemo, useState } from "react";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import "./styles/app.css";




function App() {
  const[posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Description3"},
    {id: 2, title: "Javascript 2", body: "Description2"},
    {id: 3, title: "Python", body: "Description1"},
  ]);
  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false); 
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

 

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
      
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
    </div>
  );
}

export default App;
