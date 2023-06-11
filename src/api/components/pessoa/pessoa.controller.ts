import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Pessoa } from "./pessoa.entity";

export class PessoaController{

    public async list(req:Request, res:Response){

        const  pessoa = await AppDataSource.manager.find(Pessoa);
        res.status(200).json({ dados: pessoa });
    }

    public async createPessoa(req: Request, res: Response){
        
        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let rg = req.body.rg;
        let data_nascimento = req.body.data_nascimento;
        let sexo = req.body.sexo;
        let contato_id = req.body.contato_id;
        let endereco_id = req.body.endereco_id;

        let pes = new Pessoa();
        pes.nome = nome;
        pes.cpf = cpf;
        pes.rg = rg;
        pes.data_nascimento = data_nascimento;
        pes.sexo = sexo;
        pes.contato_id = contato_id;
        pes.endereco_id = endereco_id;

        const _pessoa = await AppDataSource.manager.save(pes);
        return res.status(201).json(_pessoa);
    }
}