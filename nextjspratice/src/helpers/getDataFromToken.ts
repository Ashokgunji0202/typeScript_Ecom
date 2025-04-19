
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try{
        const encodedToken = request.cookies.get('token')?.value || '';
        const decodedToken: any = jwt.verify(encodedToken, process.env.TOKEN_SECRET || "secret");
        return decodedToken.id;
    } catch (error) {
        throw error
    }
}