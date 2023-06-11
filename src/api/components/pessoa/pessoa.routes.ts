import { Router } from "express";
import { PessoaController } from "./pessoa.controller";

export class PessoaRoutes{
    private router: Router = Router();

    private controller: PessoaController;
     
    constructor() {
        this.controller = new PessoaController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.post('/', this.controller.createPessoa);
    }

    public routes(): Router {
        return this.router;
    }

}