import React, { useState } from "react";
import BasicInput from "./BasicInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import toast from "react-hot-toast";

const ModalForm = ({ closePostBtn, setPosts }) => {
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState({ Title: "", Description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation.Title === "") {
      toast.error("Please enter a title");
    } else if (validation.Description === "") {
      toast.error("Please enter a description");
    } else {
      toast.success("Your Blog was successfully posted");
      closePostBtn();
      setPosts((val) => [...val, validation.Title]);
    }
  };

  return (
    <form className="bg-slate-100 p-4 relative" onSubmit={handleSubmit}>
      <div>
        <div className="z-10 relative w-full mb-3 bg-slate-100 flex flex-col">
          <BasicInput label="Title" setValidation={setValidation} />
          <BasicInput label="Description" setValidation={setValidation} />
          <label className="mb-2 text-bold">Type your Content below</label>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="text-white bg-blue-700 align-center  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
