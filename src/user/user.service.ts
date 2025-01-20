import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users:User[] =  [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);
        const users = {
            ...createUserDto,
            id: this.createUser.length +1,
            password:passwordHashed
        }

        this.users.push(users);

        
        console.log('password', passwordHashed)

        return (users)
    }

    async getAllUser():Promise<User[]>{
        return this.users;
    }
}
