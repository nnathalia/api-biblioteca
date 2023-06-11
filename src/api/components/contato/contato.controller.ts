import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Contato } from "./contato.entity";

export class ContatoController{

    public async list(req:Request, res:Response){

        const  contato = await AppDataSource.manager.find(Contato);
        res.status(200).json({ dados: contato });
    }

    public async createContato(req: Request, res: Response){
        
        let rede_social = req.body.rede_social;
        let email = req.body.email;
        let celular = req.body.celular;
        let telefone = req.body.telefone;

        let cont = new Contato();
        cont.rede_social = rede_social;
        cont.email = email;
        cont.celular = celular;
        cont.telefone = telefone;
        
        const _contato = await AppDataSource.manager.save(cont);
        return res.status(201).json(_contato);
    }
}