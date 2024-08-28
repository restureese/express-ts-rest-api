/**
 * @openapi
 * components:
 *  schemas:
 *    ResponseSchema:
 *      type: object
 *      required:
 *        - status
 *        - data
 *        - message
 *        - errors
 *      properties:
 *        status:
 *          type: number
 *        data:
 *          type: object
 *          default: {}
 *        message:
 *          type: string
 *        errors:
 *          type: object
 */

interface ResponseSchema {
    status: number,
    data: any,
    message: string,
    errors: any,
}

export type { ResponseSchema }