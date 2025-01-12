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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.McDonaldsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const mcdonalds_service_1 = require("./mcdonalds.service");
let McDonaldsController = class McDonaldsController {
    constructor(mcdonaldsService) {
        this.mcdonaldsService = mcdonaldsService;
    }
    async getCurrentMenu() {
        return this.mcdonaldsService.getCurrentMenu();
    }
    async getProductById(id) {
        return this.mcdonaldsService.getProductById(id);
    }
    async searchProducts(searchTerm, page = 1, pageSize = 30) {
        return this.mcdonaldsService.searchProducts(searchTerm, page, pageSize);
    }
};
exports.McDonaldsController = McDonaldsController;
__decorate([
    (0, decorators_1.Get)('currentMenu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], McDonaldsController.prototype, "getCurrentMenu", null);
__decorate([
    (0, decorators_1.Get)('product/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], McDonaldsController.prototype, "getProductById", null);
__decorate([
    (0, decorators_1.Get)('search'),
    __param(0, (0, decorators_1.Query)('search_term')),
    __param(1, (0, decorators_1.Query)('page')),
    __param(2, (0, decorators_1.Query)('page_size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], McDonaldsController.prototype, "searchProducts", null);
exports.McDonaldsController = McDonaldsController = __decorate([
    (0, common_1.Controller)('mcdonalds'),
    __metadata("design:paramtypes", [mcdonalds_service_1.McdonaldsService])
], McDonaldsController);
//# sourceMappingURL=mcdonalds.controller.js.map