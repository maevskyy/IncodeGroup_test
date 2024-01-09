import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import { IConfigService } from "./config/config.interface.js";
import { ConfigService } from "./config/config.service.js";
import winston from "winston";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorHandler.js";
import tablesRoutes from './routes/tables.routes.js'

class App {
    private app: Express;
    private port: number;
    private logger: winston.Logger;

    constructor(port: number, readonly configService: IConfigService) {
        this.app = express();
        this.port = port;

        this.config();
        this.rootRoutes()
        this.runServer(configService);

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
            ],
        });
        this.loogerConfig()
    }

    private config() {
        this.app.use(bodyParser.json({ limit: '30mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.text());

        this.app.use(cors({
            origin: 'http://localhost:5173',
            credentials: true
        }));
    }
    private rootRoutes() {
        this.app.use('/tables?', tablesRoutes)
    }

    private runServer(configService: IConfigService) {
        const mongoUrl = configService.get('MONGO_URL');
        if (!mongoUrl) {
            this.logger.error('MONGO_URL is not configured properly.');
            process.exit(1);
        }
        mongoose
            .connect(configService.get('MONGO_URL'))
            .then(() => {
                this.app.listen(this.port, () => {
                    this.logger.info(`Server running on http://localhost:${this.port}`);
                });
                this.logger.info('DB gooood')
            })
            .catch((err) => this.logger.error('DB bad :(', err))
    }

    private loogerConfig() {
        this.app.use(errorHandler);

        process.on('uncaughtException', (error) => {
            this.logger.error(`Uncaught Exception: ${error.message}`);
            process.exit(1);
        });

        process.on('unhandledRejection', (reason) => {
            this.logger.error(`Unhandled Rejection: ${reason}`);
            process.exit(1);
        });
    }
}

new App(8888, new ConfigService());
