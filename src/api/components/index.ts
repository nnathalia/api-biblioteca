import { Router } from 'express';
import { BaseRoutes } from './base/base.router';
//import { UserRoutes } from './users/user.routes';
//import { DespesaRoutes } from './despesa/despesa.routes';

/**
 * Init component routes
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}`, new BaseRoutes().routes());
 // router.use(`${prefix}/users`, new UserRoutes().routes());
 router.use(`${prefix}/pessoa`, new BaseRoutes().routes());

}