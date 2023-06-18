import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Contato } from "./contato.entity";
import { App } from "../../../app";

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

   public async updateContato(req: Request, res: Request){

    const {cod} = req.params;

    const contato = await AppDataSource.manager.findOneBy(Contato, {id: parseInt(cod)});

    if (contato == null){
        return res.status(404).json({ erro: 'Contato não encontrado!' });
    }

    let { rede_social, email, celular, telefone } = req.body;

    contato.rede_social = rede_social;
    contato.email = email;
    contato.celular = celular;
    contato.telefone = telefone;

    const contato_salvo = await AppDataSource.manager.save(Contato);

    return res.status(200).json(contato_salvo);
   } 

   //ESPACO PARA COLOCAR O DESTROY


   public async showContato(req: Request, res: Response){
    const { cod } = req.params;

    const contato = await AppDataSource.manager.findOneBy(Contato, {id: parseInt(cod)});

    if (contato == null){
        return res.status(404).json({ erro: 'Contato não encontrado, tente novamente!'});

    }

    return res.status(200).json(contato);
   }
   
}