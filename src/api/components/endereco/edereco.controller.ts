import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Endereco } from "./endereco.entity";

export class EnderecoController{

    public async list(req:Request, res:Response){

        const endereco= await AppDataSource.manager.find(Endereco);
        res.status(200).json({ dados: endereco });
    }

    public async createEndereco(req: Request, res: Response){

        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let pais = req.body.pais;
        let complemento = req.body.complemento;

        let end = new Endereco();
        end.numero = numero;
        end.bairro = bairro;
        end.cidade = cidade;
        end.estado = estado;
        end.cep = cep;
        end.rua = rua;
        end.pais = pais;
        end.complemento = complemento;
        
        const _endereco= await AppDataSource.manager.save(end);
        return res.status(201).json(_endereco);
    }
}