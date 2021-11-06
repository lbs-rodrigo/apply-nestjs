import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(): string[] {
        return ['erica', 'rodrigo','lola'];
    }
}
