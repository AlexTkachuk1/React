import React, {useCallback, useEffect, useMemo, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
import "./styles/app.css";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount} from "./utils/pages";
import Pagination from "./UI/pagination/Pagination";




function App() {
  const[posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Description3"},
    {id: 2, title: "Javascript 2", body: "Description2"},
    {id: 3, title: "Python", body: "Description1"},
  ]);
  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false); 
  const [totalPages, setTotalPages] =  useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(()=>{fetchPosts()}, [page] )


  const changePage = (pageNumber) =>{
    setPage(pageNumber);
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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostLoading 
        ? <Loader/>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
      }
      <Pagination 
      page={page} 
      totalPages={totalPages} 
      changePage={changePage}
      />
    </div>
  );
}

export default App;
