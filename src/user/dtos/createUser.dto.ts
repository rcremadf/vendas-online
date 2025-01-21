export interface CreateUserDto{
    name:string;
    email:string;
    phone:string;
    cpf: string;
    password: string;
    typeUser:string;
    createdAt:Date;
    updatedAt:Date;

}