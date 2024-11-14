import { Request as ExpressRequest } from "express";
import type { JwtPayload } from 'jsonwebtoken';

export interface Request extends ExpressRequest {
  user?: JwtPayload;
}

