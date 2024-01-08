import { DotenvParseOutput, config } from "dotenv";
import { IConfigService } from "./config.interface.js";

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;

    constructor() {
        const { error, parsed } = config()
        if (error) {
            throw new Error('Not find dotenv file')
        }
        if (!parsed) {
            throw new Error('Not find variables in dotenv file')

        }
        this.config = parsed
    }

    get(key: string): string {
        const res = this.config[key]
        if (!res) {
            throw new Error('Dont have this key')
        }
        return res
    }
}