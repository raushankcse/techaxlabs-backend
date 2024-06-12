import prisma from "../config/db.config.js";


export const createTodo = async (req, res) => {

  const {title} = req.body;
  const {userId} = req.user;

  if(!userId){
    return res.status(404).json({error: 'User Id is missing'});
  }

  try{
    const newTodo = await prisma.todo.create({
      data: {
        title,
        userId,
      },
    });
    return res.status(201).json(newTodo);
  } catch (error){
    console.error('Error creating task:',error);
    res.status(400).json({error: 'Failed to create task'});
  }
}

export const getTodos = async (req, res) => {
  const {userId} = req.user;

  if(!userId){
    return res.status(404).json({error: 'User Id is missing'});
  }

  try{
    const todos = await prisma.todo.findMany({
      where:{
        userId: userId,
      }
    });
    res.json(todos);
  } catch(error){
    console.error('Error fetching tasks:', error);
    res.status(500).json({error: 'Failed to fetch todos'});
  }
}


export const toggleTask = async (req,res)=>{
  const id = parseInt(req.params.id, 10);

  try{
    const task = await prisma.todo.findUnique({
      where:{
        id
      },
    });

    if(!task){
      return res.status(404).json({error: 'Task not found'});
    }

    const updatedTask = await prisma.todo.update({
      where:{
        id
      },
      data: {
        completed: !task.completed,
      },
    });
    res.json(updatedTask);
  } catch (error){
    console.error('Error toggling task:', error);
    res.status(500).json({error: 'Failed to toggle task status'});
  }
};

export const deleteTask = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try{
    const task = await prisma.todo.findUnique({
      where:{
        id
      },
    });

    if(!task){
      return res.status(404).json({error: 'Task not found'});
    }

    await prisma.todo.delete({
      where:{
        id,
      },
    });

    res.status(200).json({message: 'Task deleted successfully'});

  }catch (error){
    console.error('Error deleting task:', error);
    res.status(500).json({error: 'Failed to delete task'});
  }
};


export const updateTask = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const {title} = req.body;

  try{
    const task = await prisma.todo.findUnique({
      where:{
        id,
      },
    });

    if(!task){
      return res.status(404).json({error: 'Task not found'});
    }

    const updatedTask = await prisma.todo.update({
      where:{
        id
      },
      data:{
        title: title !== undefined ? title : task.title
      },
    });
    res.json(updatedTask);
  } catch(error){
    console.error('Error updating task:', error);
    res.status(500).json({error: 'Failed to update task'});
  }
};