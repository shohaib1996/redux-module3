// import { useState } from "react"
import AddTodoModal from "./AddTodoModal"
import TodoFilter from "./TodoFilter"
// import { useAppSelector } from "@/redux/hooks"
import TodoCard from "./TodoCard"
import { useGetTodosQuery } from "@/redux/api/api"
import { useState } from "react"



const TodoContainer = () => {
  const [priority, setPriority] = useState("")
    // const [todos, setTodos] = useState({data: []})
    // const {todos} = useAppSelector((state)=> state.todos)

    const {data: todos,  isLoading} = useGetTodosQuery(priority)

    if(isLoading){
      return <p>Loding...</p>
    }

    console.log(todos);
    

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item: any) => (
            <TodoCard {...item} key={item.id}/>
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