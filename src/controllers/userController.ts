import { NextFunction, Request, Response } from "express";

export class UserController {
    static async GetMe(req: Request, res: Response, next: NextFunction){
        try {
            res.send("ok")
        } catch (error) {
            
        }
    }
}