import {Name} from './Name'

export class Country {
    isoCode: string;
    name: Name[];
    officialLanguages: string[];
    constructor(countryResponse: any){
        this.isoCode = countryResponse.isoCode;
        this.name = countryResponse.name.map(
            (nameResponse: any) => new Name(nameResponse)
        );
        this.officialLanguages = countryResponse.officialLanguages;
    }
}