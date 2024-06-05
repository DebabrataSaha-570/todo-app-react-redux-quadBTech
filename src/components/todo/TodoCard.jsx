import { deleteTodo, toggleComplete } from "@/redux/features/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import TodoUpdateModal from "./TodoUpdateModal";
import DeleteAlert from "./DeleteAlert";

const TodoCard = ({ title, description, id, isCompleted, priority }) => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState("");

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  if (response === "continue") {
    dispatch(deleteTodo(id));
  }

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <input
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
        className="mr-3"
      />
      <p className="font-semibold flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-3">
        <div
          className={`size-3 rounded-full 
          ${priority === "high" ? "bg-red-500 " : ""}
          ${priority === "medium" ? "bg-yellow-500" : ""}
          ${priority === "low" ? "bg-green-500" : ""}
          `}
        ></div>
        <p>{priority || "high"}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <DeleteAlert setResponse={setResponse}></DeleteAlert>
        <TodoUpdateModal id={id}></TodoUpdateModal>
      </div>
    </div>
  );
};

export default TodoCard;
