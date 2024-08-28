import { type Request, type Response, type NextFunction } from "express";
import zod from "zod";
import { unprocessEntityResponse } from "@/utils/response";
const validate =
  (schema: zod.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      return unprocessEntityResponse(res, (error as zod.ZodError).flatten()['fieldErrors'] ?? {});
    }
  };

export default validate;
