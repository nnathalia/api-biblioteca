import { validate } from 'class-validator';
import e, { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Emprestimo } from "./emprestimo.entity";
import { Pessoa } from "../pessoa/pessoa.entity";
import { Livro } from"../livro/livro.entity";

export class EmprestimoController{

    public async list(req:Request, res:Response){

        const emprestimo = await AppDataSource.manager.find(Emprestimo);
        res.status(200).json({ dados: emprestimo });
    }

    public async create(req: Request, res: Response){

        let data_hora_emprestimo = req.body.data_hora_emprestimo;
        let data_previsao_entrega = req.body.data_previsao_entrega;
        let data_entregue = req.body.data_entregue;
        let data_hora_solicitacao = req.body.data_hora_solicitacao;
        let pessoa_id = req.body.pessoa_id;
        let livro_id = req.body.livro_id

        if(pessoa_id == undefined) {
            return res.status(404).json({ erro: 'Pessoa inexistente'})
        }
      
        const _pessoa = await AppDataSource.manager.findOneBy(Pessoa, { id: pessoa_id });
      
        if(_pessoa == null) {
            return res.status(404).json({ erro: 'Pessoa inexistente'})
        }

        if(livro_id == undefined) {
            return res.status(404).json({ erro: 'Livro inexistente'})
        }
      
        const _livro = await AppDataSource.manager.findOneBy(Livro, { id: livro_id });
      
        if(_livro == null) {
            return res.status(404).json({ erro: 'Livro inexistente'})
        }

        let empr = new Emprestimo();
        empr.data_hora_emprestimo = data_hora_emprestimo;
        empr.data_previsao_entrega = data_previsao_entrega;
        empr.data_entregue = data_entregue;
        empr.data_hora_solicitacao = data_hora_solicitacao;
        empr.pessoa_id = pessoa_id;
        empr.livro_id = livro_id;
        
        const erros = await validate(empr);

        if(erros.length > 0) {
            return res.status(400).json(erros);
        }

        const _emprestimo = await AppDataSource.manager.save(empr);

        return res.status(201).json(_emprestimo);
    }

    public async update( req: Request, res: Response){
        const {cod} = req.params;

        const emprestimo = await AppDataSource.manager.findOneBy(Emprestimo, {id: parseInt (cod)});

        if(emprestimo == null ){
            return res.status(404).json({ erro: 'Emprestimo não encontrado!'});
        }

        let {data_hora_emprestimo, data_previsao_entrega, data_entregue, data_hora_solicitacao, pessoa_id, livro_id} = req.body;

        emprestimo.data_hora_emprestimo = data_hora_emprestimo;
        emprestimo.data_previsao_entrega = data_previsao_entrega;
        emprestimo.data_entregue = data_entregue;
        emprestimo.data_hora_solicitacao = data_hora_solicitacao;
        emprestimo.pessoa_id = pessoa_id;
        emprestimo.livro_id = livro_id;

        const emprestimo_salvo = await AppDataSource.manager.save(emprestimo);

        return res.json(emprestimo_salvo);
    }

    public async destroy(req: Request, res: Response){

        const {cod} = req.params;

        const emprestimo = await AppDataSource.manager.findOneBy(Emprestimo, {id: parseInt (cod)});

        if(emprestimo == null ){
            return res.status(404).json({ erro: 'Emprestimo não encontrado!'});
        }

        await AppDataSource.manager.delete(Emprestimo, emprestimo);

        return res.status(204).json();

    }

    public async show(req: Request, res: Response){

        const {cod} = req.params;

        if(!Number.isInteger(parseInt(cod))) {
            return res.status(400).json();
        }

        const emprestimo = await AppDataSource.manager.findOneBy(Emprestimo, {id: parseInt (cod)});

        if(emprestimo == null ){
            return res.status(404).json({ erro: 'Emprestimo não encontrado!'});
        }

        return res.json(emprestimo);

    }
}