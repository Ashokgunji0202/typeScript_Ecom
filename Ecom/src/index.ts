import express,{Express, Request, Response} from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/errors";
import { SignUpSchema } from "./schema/users";


const app = express();

app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//     res.send("Hello World")
// })

app.use("/api",rootRouter);

export const prisma = new PrismaClient(
    {
        log: ["query"],//information about queries
    }
).$extends({
    result:{
        address:{
            formattedAddress: {
                needs:{
                    lineOne: true,
                    lineTwo: true,
                    city: true,
                    pincode: true,
                    country: true
                },
                compute:(addr)=>{
                    return `${addr.lineOne}, ${addr.lineTwo}, ${addr.city}, ${addr.pincode}, ${addr.country}`
                }
            }

        }
    }
})
app.use(errorMiddleware);
app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})