import { Todo, TodoId } from '../lib/db'

type TodosProps = {
  todos: Todo[] | TodoId[]
  handleDelete: any
}

const TodoList: React.FC<TodosProps> = ({ todos, handleDelete }) => {
  return (
    <>
      {todos?.map((item, index) => (
        <div
          key={item.id}
          className="flex justify-center text-white dark:text-black "
        >
          <div className=" relative mt-6 justify-center ">
            <div className="absolute top-0 right-0 flex space-x-1 bg-gray-800 p-3 dark:bg-white">
              <span>
                <button className="active:bg-green-500 active:fill-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
              </span>
              <span>
                <button onClick={() => handleDelete(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <span className="absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 font-bold text-gray-50 ">
              {index + 1}
            </span>
            <p className="w-80 overflow-auto rounded-lg bg-gray-800 px-12 py-8 dark:bg-white">
              {item.description}{' '}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
export default TodoList
