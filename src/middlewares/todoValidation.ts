import { Request, Response, NextFunction } from "express";

export const checkValidInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => { 
  const { todoName, todoDescription } = req.body;  
  if (Object.keys(req.body).length === 0 || !todoName || !todoDescription) {
    res.status(400).json({
      message: "A todo must have a name and description!!!"
    });
  }
  next();
};
