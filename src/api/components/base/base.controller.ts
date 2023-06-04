import { Request, Response } from "express";

export class BaseController {
    // Retorno do status 200

    public index(req: Request, res: Response){
        res.status(200).json({message: 'API-Biblioteca running...'});
    }

    //Informações sobre API-Biblioteca
    public info(req: Request, res:Response){
        res.status(200).json({
            name: 'API Rest - Biblioteca',
            mode:'Development',
            version: '1.0.0',
        });
    }
}