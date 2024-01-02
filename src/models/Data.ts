import {User} from './User';

export class Data {
    user: User;
    JWTToken: string;
    JWTRefreshToken: string;
    constructor(dataResponse: any){
        this.user = new User (dataResponse.user);
        this.JWTToken = dataResponse.JWTToken;
        this.JWTRefreshToken = dataResponse.JWTRefreshToken;
    }
}