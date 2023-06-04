import { Request, Response } from "express";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../config/database/mysql-datasource.config";

export class UserController {
    private readonly repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
        //console.log(this.repository);
    }

    public async list(req: Request, res: Response) {
        const reposist = AppDataSource.getRepository(User);

        //console.log(reposist);

        const users = await reposist.find();

        res.status(200).json({ data: users });
    }
}