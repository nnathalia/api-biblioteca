import { Router } from "express";
import { EnderecoController } from "./edereco.controller";

export class EnderecoRoutes{
    private router: Router = Router();

    private controller: EnderecoController;
     
    constructor() {
        this.controller = new EnderecoController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.post('/', this.controller.createEndereco);
    }

    public routes(): Router {
        return this.router;
    }

}