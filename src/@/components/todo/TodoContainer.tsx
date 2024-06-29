import { useState } from "react"
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter"
import { useAppSelector } from "@/redux/hooks"
import TodoCard from "./TodoCard"


const TodoContainer = () => {
    // const [todos, setTodos] = useState({data: []})
    const {todos} = useAppSelector((state)=> state.todos)
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  )
}

export default TodoContainer