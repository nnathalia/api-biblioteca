import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Livro } from "./livro.entity";

export class LivroController{

    public async list(req:Request, res:Response){

        const  livro = await AppDataSource.manager.find(Livro);
        res.status(200).json({ dados: livro });
    }

    public async create(req: Request, res: Response){

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

    public async update( req: Request, res: Response){
        const {cod} = req.params;

        const livro = await AppDataSource.manager.findOneBy(Livro, {id: parseInt (cod)});

        if(livro == null ){
            return res.status(404).json({ erro: 'Livro não encontrado!'});
        }

        let {sinopse, isbn, titulo, quantidade_exemplares, ano_publicacao, exemplares_desponivel, autor_id, editora_id} = req.body;

        livro.sinopse = sinopse;
        livro.isbn = isbn;
        livro.titulo = titulo;
        livro.quantidade_exemplares = quantidade_exemplares;
        livro.ano_publicacao = ano_publicacao;
        livro.exemplares_disponivel = exemplares_desponivel;
        livro.autor_id = autor_id;
        livro.editora_id = editora_id;

        const livro_salvo = await AppDataSource.manager.save(livro);

        return res.json(livro_salvo);
     }

     public async destroy(req: Request, res: Response){

        const {cod} = req.params;

        const livro = await AppDataSource.manager.findOneBy(Livro, {id: parseInt (cod)});

        if(livro == null ){
            return res.status(404).json({ erro: 'Livro não encontrado!'});
        }

        await AppDataSource.manager.delete(Livro, livro);

        return res.status(204).json();

     }

     public async show(req: Request, res: Response){

        const {cod} = req.params;

        const livro = await AppDataSource.manager.findOneBy(Livro, {id: parseInt (cod)});

        if(livro == null ){
            return res.status(404).json({ erro: 'Livro não encontrado!'});
        }

        return res.json(livro);

     }
}