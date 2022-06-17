import { GetServerSideProps } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Header from '../components/header';
import GoBack from '../components/returnbutton';
import {TodoList} from '../components/todolist';
import Toggletheme from '../components/toggletheme';
import { getAllTodos, getAllTodosId, Todo, TodoId } from '../lib/db';


interface PostProps{
  todos: Todo[];
  todosid: TodoId[];
  
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const todos = await getAllTodos();
  const todosuser= await getAllTodosId();
  const todosuserdata= JSON.stringify(todosuser);
  const todosid= JSON.parse(todosuserdata);

     if(!session)
    return {
      props:{
        todos,
      },
    };
    
    return {
      props:{
        todosid,
      },
    };
  };


export const Todoapp = ({todos, todosid}: PostProps) => {
  const {data: session} = useSession()
  const [description, setDescription] = useState("");
  const router = useRouter()
  
  const refreshData = () => {
    router.replace(router.asPath)
  }

  const handleCreate = async () => {
  await fetch("/api/todo",{
    method: 'POST',
    body: JSON.stringify(description),
    
  })
  .then(()=> {refreshData()
  })};
  
const handleCreateWid = async () => {
  await fetch("/api/todoid",{
    method: 'POST',
    body: JSON.stringify(description),
    
  })};

const handleDelete = async (id:number) => {
  
  await fetch(`/api/todo/${id}`,{
    method: 'DELETE',
    headers: {
      "Content-Type": "appliation/json"
    },
      }).then(() => {
        refreshData()
      })};

const handleDeleteWid = async (id:string) => {
  
  await fetch(`/api/todoid/${id}`,{
    method: 'DELETE',
    headers: {
      "Content-Type": "appliation/json"
    },
      }).then(() => {
        refreshData()
      })};

  return (
  
    <>
      
      <div className="h-screen bg-gray-400 dark:bg-gray-800 py-2 overflow-y-auto">
          <Header session={session}/>

      <div className='flex justify-center '>
      <h1 className="dark:text-white text-gray-800 text-2xl font-bold">ToDo-App</h1>
      </div>

      <div  >
        <form className="flex justify-center mt-2">
          <div className="bg-gray-800 p-8 rounded-lg text-white dark:bg-gray-50 dark:text-black">
            <h1 className="text-center mb-4 ">Write Todo List</h1>
            <div className="flex space-x-2 p-2 bg-white rounded-md ">
              <input value={description} onChange={(e)=>setDescription(e.currentTarget.value)} type="text" placeholder="Write here..." className="w-full outline-none bg-white text-black" />
              <button onClick={!session? ()=> handleCreate() : ()=>handleCreateWid()} className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold">send</button>
            </div>
          </div>
        </form>
      </div>
      <Toggletheme />
      <GoBack />
      
      {!session?
      <TodoList todos={todos} handleDelete={handleDelete} /> 
      :<TodoList todos={todosid} handleDelete={handleDeleteWid} /> 
    }
    

    </div>
    </>
  )
}

export default Todoapp