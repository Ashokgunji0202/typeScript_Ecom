import { NextFunction,Request,Response } from "express";
import { ErrorCodes, HttpException } from "../exceptions/root";

export const errorMiddleware=(error: HttpException,req:Request,res:Response,next:NextFunction)=>{
    res.status(error.statusCode||500).json({
        message:error.message,
        ErrorCodes:error.errorCode,
        errors:error.errors
    })
    
}