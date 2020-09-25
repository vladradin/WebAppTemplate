import { Authorize } from "../decorators/authorization";
import { HttpPost } from "../decorators/http-verbs";


@Authorize()
export class LoginController {
    private username: string;
    private password: string;

    @Authorize()
    @HttpPost()
    start() {
        return 'masina';
    }
}