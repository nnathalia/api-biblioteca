import { Router } from "express";
import { ContatoController } from "./contato.controller";

export class ContatoRoutes{
    private router: Router = Router();

    private controller: ContatoController;
     
    constructor() {
        this.controller = new ContatoController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.post('/', this.controller.createContato);
    }

    public routes(): Router {
        return this.router;
    }

}