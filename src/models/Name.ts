export class Name {
    language: string;
    text: string;
    constructor(nameResponse: any){
        this.language = nameResponse.language;
        this.text = nameResponse.text;
    }
}