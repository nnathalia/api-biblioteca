import { Response, Request } from "express";
import { AppDataSource } from "../../config/database/mysql-datasource.config";
import { Pessoa } from "./pessoa.entity";

export class PessoaController{

    public async list(req:Request, res:Response){

        const  pessoa = await AppDataSource.manager.find(Pessoa);
        res.status(200).json({ dados: pessoa });
    }

    public async create(req: Request, res: Response){
        // fazer o create - NATH
    }
}