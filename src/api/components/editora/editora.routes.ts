import { Router } from "express";
import { EditoraController } from "./editora.controller";

export class EditoraRoutes{
    private router: Router = Router();

    private controller: EditoraController;
     
    constructor() {
        this.controller = new EditoraController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.post('/', this.controller.createEditora);
    }

    public routes(): Router {
        return this.router;
    }

}