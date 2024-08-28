import { Router, type Response, type Request } from "express";
import { loginSchema, type LoginSchema } from "@/schemas/login";
import validate from "@/middlewares/validate";
import { successResponse, unauthorizedResponse } from "@/utils/response";
import { AuthService } from "@/services/auth";

const router = Router();

/**
   * @openapi
   * '/auth/login':
   *  post:
   *     tags:
   *     - Auth
   *     summary: Login
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/LoginSchema'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ResponseSchema'
   */
router.post('/login', validate(loginSchema), async (req: Request<{}, {}, LoginSchema>, res: Response) => {
    const accessToken = await AuthService.login(req.body.username, req.body.password);
    if(!accessToken){
        const message = 'Username or password is wrong'
        return unauthorizedResponse(res, message)
    }
    const data = {
        'access_token': accessToken
    }

    return successResponse(res, data)
})

export default router