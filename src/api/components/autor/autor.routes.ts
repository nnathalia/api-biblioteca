import { Router } from "express";
import { AutorController } from "./autor.controller";

export class AutorRoutes{
    private router: Router = Router();

    private controller: AutorController;
     
    constructor() {
        this.controller = new AutorController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.post('/', this.controller.createAutor);
        this.router.put('/', this.controller.updateAutor);
       // this.router.delete('/', this.controller.deleteAutor);
        //this.router.get('/', this.controller.showAutor);
    }

    public routes(): Router {
        return this.router;
    }

}