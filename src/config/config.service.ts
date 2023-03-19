import { config, DotenvParseOutput } from 'dotenv';
import { IConfigService } from './config.inteface';

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput
    constructor(){
        const { error, parsed } = config()
        if(error || !parsed) {
            throw new Error('.env not found or empty')
        }
        this.config = parsed
    }

    get(key: string): string {
        const res = this.config[key]
        if(!res) {
            throw new Error(`${key} is not found in .env`)
        }
        return res
    }
}