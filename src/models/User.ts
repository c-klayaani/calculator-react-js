export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    passwordResetToken: string;
    passwordResetTokenExpires: string;
    constructor(userResponse: any){
        this.id = userResponse.id;
        this.firstName = userResponse.firstName;
        this.lastName = userResponse.lastName;
        this.email = userResponse.email;
        this.password = userResponse.password;
        this.createdAt = userResponse.createdAt;
        this.updatedAt = userResponse.updatedAt;
        this.passwordResetToken = userResponse.passwordResetToken;
        this.passwordResetTokenExpires = userResponse.passwordResetTokenExpires;
    }
}