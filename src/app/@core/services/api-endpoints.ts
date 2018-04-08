import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiEndpoints {
    getAllCategories: string;
    getAllTenders: string;
    getByCategory: string;
    getByArea: string;
    constructor() {
        const base = environment.baseUrl;
        this.getAllCategories = `${base}tender-category/get-all`;
        this.getAllTenders = `${base}tender/get-all`;
        this.getByCategory = `${base}tender/get-by-category-id`;
        this.getByArea = `${base}tender/get-by-area-paginated`;
    }

    getAllCategory(){
        return this.getAllCategories;
    }

    getAllTender(){
        return this.getAllTenders;
    }
}
