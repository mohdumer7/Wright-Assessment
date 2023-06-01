import React, { useState } from "react";
import ModalForm from "./ModalForm";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [show, setShowPost] = useState(false);

  const addPostBtn = () => {
    setShowPost(true);
  };

  const closePostBtn = () => {
    setShowPost(false);
  };

 

  return (
    <div className="App flex justify-center mt-10 p-4">
      <div
        className={`container ${
          show ? "blur-sm" : ""
        } card w-1/2 flex flex-col p-4 `}
      >
        <h1 className="w-full text-white md:text-2xl sm:text-sm text-center">
          WRIGHT ASSESSMENT
        </h1>

        <button
          className="card btn md:p-2 mt-4 sm:text-sm w-fit justify-self-end self-end mr-5 md:text-sm transition"
          onClick={addPostBtn}
        >
          Add Blog
        </button>

        <div className="flex flex-col w-full mt-8">
          {posts.length === 0 ? (
            <p className="w-full text-white md:text-md sm:text-sm text-center">
              NO BLOGS YET...
            </p>
          ) : (
            <div className="flex flex-col w-full gap-3 justify-center" >
                {posts.map(post=>(<div className="postcard w-3/4 p-2 text-center items-center text-white">{post}</div>))}
                
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className="absolute z-10 flex justify-center items-center w-full h-full top-0">
          <div className="modal w-3/4 h-3/4 bg-white drop-shadow-2xl shadow-2xl flex flex-col">
            <div className="w-full flex justify-between items-center p-3 relative">
              <h1 className=" items-center  text-xl font-bold justify-self-center text-center">
                Add Blog
              </h1>
              <img
                src="close.png"
                onClick={closePostBtn}
                alt="bell"
                className="w-8 h-8  top-5 mt-3 rounded-full justify-self-end cursor-pointer hover:bg-slate-600 transition"
              />
            </div>
            <div className="h-full overflow-scroll form-container p-4">
              <div>
                <ModalForm  closePostBtn={closePostBtn} setPosts={setPosts} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
