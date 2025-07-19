import { HttpResponse, HttpRequest } from "../types/Http";
import { created } from "../utils/http";

export class SignUpController {
  static async handler(request: HttpRequest): Promise<HttpResponse> {
    return created({
      accessToken: "signin: token de acesso",
    });
  }
}
