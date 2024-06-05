import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const [filter, setFilter] = useState("");
  // const { todos } = useAppSelector((state) => state.todos);
  //From local state

  // let filterTodos = todos;

  // console.log("todos", todos);
  // console.log("filterd todos", filterTodos);

  // if (filter === "high" || filter === "medium" || filter === "low") {
  //   filterTodos = todos.filter((item) => item.priority === filter);
  // }

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {/* {filterTodos.map((item) => (
          <TodoCard {...item} />
        ))} */}
        </div>
        {/* {!filterTodos.length && (
        <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{" "}
        </div>
      )} */}
      </div>
    </div>
  );
};

export default TodoContainer;
