import { Response, Request } from "express";
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Autor } from "./autor.entity";

export class AutorController{

    public async list(req:Request, res:Response){

        const  autor = await AppDataSource.manager.find(Autor);
        res.status(200).json({ dados: autor });
    }

    public async createAutor(req: Request, res: Response){
        let nome = req.body.nome;
        let nacionalidade= req.body.nacionalidade;
        let data_nascimento = req.body.data_nascimento;
        let perfil = req.body.perfil;

        let aut = new Autor();
        aut.nome = nome;
        aut.nacionalidade = nacionalidade;
        aut.data_nascimento = data_nascimento;
        aut.perfil = perfil;
        
        const _autor = await AppDataSource.manager.save(aut);
        return res.status(201).json(_autor);
    }

    public async updateAutor(req: Request, res: Response){
        const {cod} = req.params;

        const autor = await AppDataSource.manager.findOneBy(Autor, {id: parseInt(cod)});

        if(autor == null){
            return res.status(404).json({erro:'Autor não encontrado!'});
        }

        let { nome, nacionalidade, data_nascimento, perfil } = req.body;

        autor.nome = nome;
        autor.nacionalidade = nacionalidade;
        autor.data_nascimento = data_nascimento;
        autor.perfil = perfil;

     const autor_salvo = await AppDataSource.manager.save(Autor);

     return res.status(200).json(autor_salvo);
        
    }


    //ESPACO DO DESTROY


    public async showAutor(req: Request, res:Response){
        const {cod} = req.params;

        const autor = await AppDataSource.manager.findOneBy(Autor, {id:parseInt(cod)});

        if(autor == null){
            return res.status(404).json({ erro: 'Autor não encontrado, tente novamente!'});
        }

        

        return res.status(200).json(autor);
    }


    
}