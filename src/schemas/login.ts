import { object, string, type TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginSchema:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          default: user@example.com
 *        password:
 *          type: string
 *          default: password
 */

const payload = {
    username: string({
      required_error: "Title is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
};

export const loginSchema = object({
  ...payload,
});

export type LoginSchema = TypeOf<typeof loginSchema>;
