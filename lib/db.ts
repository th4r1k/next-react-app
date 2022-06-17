import { prisma } from "./prisma";

export interface Todo {
        id: number;
    description: string;
}

export interface TodoId {
    id: string;
    userId: string;
    description: string;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
}

export async function getAllTodos() {
    const data = await prisma.todo.findMany();
    return data;
}

export async function getAllTodosId() {
    const user = await prisma.session.findFirst()
    const data = await prisma.post.findMany({
        where: {userId: user?.userId}
    })
    return data;
    }


export async function createTodo(description: string){
    await prisma.todo.create({
        data: {
            description,
        }
    })
}

export async function createTodoWid(description:string){
    const [user] = await prisma.session.findMany();
    await prisma.post.create({
        data: {
            userId:user.userId,
            description,
            isCompleted: false,
        }
    })
}


// export async function deleteTodo(id: string){
//     await prisma.todo.delete({
//         where: {
//             id: Number(id)
                   
//         },
        
        
//     });
// };