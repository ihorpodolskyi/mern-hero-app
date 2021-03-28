import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "./store/actions/heroes";
import { BrowserRouter, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Heroes from "./components/Heroes/Heroes";
import HeroInfo from "./components/HeroInfo/HeroInfo";
import Pagination from "./components/Pagination/Pagination";
import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes);
  const [check, setCheck] = useState(false);

  const [currentId, setCurrentId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = heroes.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getHeroes());
    setCheck(true);
  }, [dispatch]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        render={() => (
          <div className="box">
            {check && (
              <Heroes setCurrentId={setCurrentId} currentPosts={currentPosts} />
            )}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={heroes.length}
              paginate={paginate}
            />
            <Form setCurrentId={setCurrentId} currentId={currentId} />
          </div>
        )}
      />
      <Route path="/:id" render={() => <HeroInfo />} />
    </BrowserRouter>
  );
};

export default App;