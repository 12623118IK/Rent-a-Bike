import { CreateBike } from "../common/interfaces";

export class BikeModel {
    async getAll() {
        // TODO: execute 'SELECT * FROM bikes' using your DB connection
        return [];
    }
    async getById(id: string) {
        return null;
    }
    async create(bike: CreateBike) {
        return null;
    }
    async update(id: string, data: any) {
        return null;
    }
    async delete(id: string) {
        return null;
    }
    async rent(id: string) {
        return null;
    }
    async unrent(id: string) {
        return null;
    }
}