import { Request, Response } from "express";


class Todos{
  constructor(){}

 async getAllTodos (req:Request, res:Response) { 
    return res.json({
       status: 200,
        " todo": {
          "Name": "Finish LMS"
        }     
    })
  }




}
const todos = new Todos();
export default todos;
