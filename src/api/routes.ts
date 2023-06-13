import { Router } from "express";
import { registerRoutes } from "./components";
/**.]
 * Init Express REST routes
 *
 * @param {Router} router
 * @returns {void}
 */

export function initRoutes(router: Router): void {
    const prefix: string = '/api-biblioteca';

    registerRoutes(router, prefix)
}
