import type { Response } from "express"
import type { ResponseSchema } from "@/schemas/response";

const unauthorizedResponse = (response: Response, message='Unauthorized') => {
    const responseBody: ResponseSchema = {
        status: 401,
        data: null,
        message: message,
        errors: {}
    }
    return response.status(401).json(responseBody)
}

const successResponse = (response: Response, data: any, message = 'Success') => {
    const responseBody: ResponseSchema = {
        status: 200,
        data: data,
        message: message,
        errors: {}
    }
    return response.status(200).json(responseBody)
}

const unprocessEntityResponse = (response: Response, errors: any, message = 'Unprocessable Entity') => {
    const responseBody: ResponseSchema = {
        status: 422,
        data: null,
        message: message,
        errors: errors
    }
    return response.status(422).json(responseBody)
}


export { unauthorizedResponse, unprocessEntityResponse, successResponse }