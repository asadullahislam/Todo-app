import { useAppSelector } from "@/redux/hook";

import AddToModal from "./AddToModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);
  console.log(todos);
  if (isLoading) {
    return <p>loading............</p>;
  }
  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddToModal></AddToModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-4">
        <div className=" bg-white p-5 w-full h-full rounded-lg ">
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>

        {/* <div className="text-2xl bg-white font-bold p-5 flex justify-center items-center">
          <p>There is no task pending </p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
