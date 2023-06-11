import { Router } from "express";
import { EmprestimoController } from "./emprestimo.controller";

export class EmprestimoRoutes{
    private router: Router = Router();

    private controller: EmprestimoController;
     
    constructor() {
        this.controller = new EmprestimoController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.post('/', this.controller.createEmprestimo);
    }

    public routes(): Router {
        return this.router;
    }

}