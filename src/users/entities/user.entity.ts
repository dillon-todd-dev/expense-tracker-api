import { User } from "@prisma/client";

export class UserEntity implements User  {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: Date;
}
