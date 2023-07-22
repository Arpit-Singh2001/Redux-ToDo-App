import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Remove, Update_data } from "../redux/actions/action";

const Task = () => {
  const { User_data } = useSelector((state) => state.todoreducers);
  //   console.log(User_data);

  // for show data

  const [showeye, setShoweye] = useState(false);
  const [showeyevalue, setShoweyeValue] = useState("");

  // for update

  const [show, setShow] = useState(false);

  const [update, setUpdate] = useState("");

  const [ind, setInd] = useState("");

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  // delet data
  const remove = (id) => {
    // console.log(id);
    dispatch(Remove(id));
  };

  // update function
  const usertask_update = () => {
    if (update.length === 0) return;
    dispatch(Update_data(update, ind));
    handleClose();
  };

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {User_data.map((ele, k) => {
          return (
            <div key={k}>
              <div
                className="todo_container d-flex justify-content-between align-items-center px-2 mt-2"
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <li style={{ listStyle: "none" }}> {ele} </li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <ModeEditIcon
                    onClick={() => {
                      handleShow(ele);
                      setInd(k);
                    }}
                    style={{ cursor: "pointer", color: "#3c40c6" }}
                  />
                  <DeleteIcon
                    onClick={() => remove(k)}
                    style={{ cursor: "pointer", color: "red" }}
                  />
                  <RemoveRedEyeIcon
                    style={{ cursor: "pointer", color: "#1dd1a1" }}
                    onClick={() => {
                      setShoweye(true);
                      setShoweyeValue(ele);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* read model  */}

        <Modal show={showeye}>
          <h3 className="text-center">{showeyevalue}</h3>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* delete model */}

        <Modal show={show} onHide={handleClose}>
          <h3 className="text-center mt-3">Update Your Task</h3>

          <div className="todo col-lg-5 mx-auto mt-2 d-flex justify-content-between align-items-center">
            <input
              name="task"
              className="form-control"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Task;
