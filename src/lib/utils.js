import { JWT_ACCESS_SECRET } from "$env/static/private";
import jwt from "jsonwebtoken";

export function createJWT(data) {
    return jwt.sign({data}, JWT_ACCESS_SECRET);
}