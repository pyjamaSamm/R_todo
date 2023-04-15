import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { DataContext } from "./Context";
import Axios from 'axios';


export default function Form() {
  // const [data, setData] = useContext(DataContext);
  const [data, setData] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => {
    let box = document.getElementById("inputBox")
    box.value = ""
    const id = nanoid();
    if (input.name !== "") {
      setData([...data, { id, name: input.name }]);
    }
    else alert("Please enter a todo")

    addToList(input)
    window.location.reload()
    window.location.reload()
  };

  const addToList = (input) => {
    Axios.post("https://r-todo.onrender.com/insert", { item: input.name })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="labelForm">My to-do</h2>
        <label>
          <input type="text" autoComplete="off" {...register("name")} id="inputBox" placeholder="Type todo..." />
        </label>
        <input type="submit" value="+" className="btn btn-info"/>
      </form>
    </div>
  );
}
