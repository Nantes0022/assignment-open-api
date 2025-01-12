"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.McdonaldsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const rxjs_1 = require("rxjs");
let McdonaldsService = class McdonaldsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiHost = 'mcdonald-s-products-api.p.rapidapi.com';
        this.apiKey = '59d77c61efmsh9eedd98b36390c4p13f52fjsne0092e6c110f';
    }
    async getCurrentMenu() {
        const url = 'https://mcdonald-s-products-api.p.rapidapi.com/us/currentMenu';
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                headers: {
                    'x-rapidapi-host': this.apiHost,
                    'x-rapidapi-key': this.apiKey,
                },
            }));
            return response.data;
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.response?.data || 'Failed to retrieve McDonald\'s menu', error.response?.status || enums_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getProductById(productId) {
        const url = `https://${this.apiHost}/us/products/${productId}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                headers: {
                    'x-rapidapi-host': this.apiHost,
                    'x-rapidapi-key': this.apiKey,
                },
            }));
            return response.data;
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.response?.data || 'Failed to retrieve product details', error.response?.status || enums_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async searchProducts(searchTerm, page = 1, pageSize = 30) {
        const url = `https://${this.apiHost}/us/products/search`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                params: {
                    search_term: searchTerm,
                    field_name: 'description',
                    page: page,
                    page_size: pageSize,
                },
                headers: {
                    'x-rapidapi-host': this.apiHost,
                    'x-rapidapi-key': this.apiKey,
                },
            }));
            return response.data;
        }
        catch (error) {
            throw new exceptions_1.HttpException(error.response?.data || 'Failed to search for products', error.response?.status || enums_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.McdonaldsService = McdonaldsService;
exports.McdonaldsService = McdonaldsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], McdonaldsService);
//# sourceMappingURL=mcdonalds.service.js.map