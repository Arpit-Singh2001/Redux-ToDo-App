import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "./Task";
import { Add } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = useState("");
  //   console.log(data);

  const dispatch = useDispatch();

  const addData = () => {
    if (data.length === 0) return;

    dispatch(Add(data));
    setData("");
  };

  return (
    <>
      <div className="container">
        <section className="mt-4 text-center">
          <h3>Enter Your Task</h3>
          <div className="todo col-lg-5 mx-auto mt-2 d-flex justify-content-between align-items-center">
            <input
              name="task"
              className="form-control"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <Button
              variant="contained"
              className="mx-2 "
              onClick={() => addData()}
            >
              <AddIcon />
            </Button>
          </div>

          <Task />
        </section>
      </div>
    </>
  );
};

export default Home;
