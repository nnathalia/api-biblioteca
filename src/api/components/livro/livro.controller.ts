import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Livro } from "./livro.entity";

export class LivroController{

    public async list(req:Request, res:Response){

        const  livro = await AppDataSource.manager.find(Livro);
        res.status(200).json({ dados: livro });
    }

    public async createLivro(req: Request, res: Response){

        let sinopse = req.body.sinopse;
        let isbn = req.body.ibsn;
        let titulo = req.body.titulo;
        let quantidade_exemplares = req.body.quantidade_exemplares;
        let ano_publicacao = req.body.ano_publicacao;
        let exemplares_desponivel = req.body.exemplares_desponivel;
        let autor_id = req.body.autor_id;
        let editora_id = req.body.editora_id;
        

        let liv = new Livro();
        liv.sinopse = sinopse;
        liv.isbn = isbn;
        liv.titulo = titulo;
        liv.quantidade_exemplares = quantidade_exemplares;
        liv.ano_publicacao = ano_publicacao;
        liv.exemplares_disponivel = exemplares_desponivel;
        liv.autor_id = autor_id;
        liv.editora_id = editora_id;


        const _livro = await AppDataSource.manager.save(liv);
        return res.status(201).json(_livro);
    }
}