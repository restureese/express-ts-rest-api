import { Router, type Response, type Request } from "express";
import { successResponse, unauthorizedResponse } from "@/utils/response";
import bearerTokenMiddleware from '@/middlewares/jwt';
import ProfileService from "@/services/profile";

const router = Router();
router.use(bearerTokenMiddleware)

/**
   * @openapi
   * '/profile':
   *  get:
   *     tags:
   *     - Profile
   *     summary: Get Profile
   *     security:
   *        - bearerAuth: []  
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ResponseSchema'
   */
router.get('/', async (req: Request, res: Response) => {
    const data = await ProfileService.getProfile(req.currentUser)
    return successResponse(res, data)
})

export default router