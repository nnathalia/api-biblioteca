import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Editora } from "./editora.entity";

export class EditoraController{

    public async list(req:Request, res:Response){

        const  editora = await AppDataSource.manager.find(Editora);
        res.status(200).json({ dados: editora });
    }

    public async createEditora(req: Request, res: Response){

        let razao_social = req.body.razao_social;
        let nome_fantasia = req.body.nome_fantasia;
        let cnpj = req.body.cnpj;

        let edit = new Editora();
        edit.razao_social = razao_social;
        edit.nome_fantasia = nome_fantasia;
        edit.cnpj = cnpj;
        
        const _editora = await AppDataSource.manager.save(edit);
        return res.status(201).json(_editora);
    }
    
}