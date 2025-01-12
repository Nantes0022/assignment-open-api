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
exports.GroceryController = void 0;
const common_1 = require("@nestjs/common");
const grocery_service_1 = require("./grocery.service");
const decorators_1 = require("@nestjs/common/decorators");
let GroceryController = class GroceryController {
    constructor(groceryService) {
        this.groceryService = groceryService;
    }
    async getGroceryPricing() {
        return this.groceryService.getGroceryPricing();
    }
    async getGroceryByName(name) {
        return this.groceryService.getGroceryByName(name);
    }
};
exports.GroceryController = GroceryController;
__decorate([
    (0, decorators_1.Get)('pricing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroceryController.prototype, "getGroceryPricing", null);
__decorate([
    (0, decorators_1.Get)('pricing/:name'),
    __param(0, (0, decorators_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroceryController.prototype, "getGroceryByName", null);
exports.GroceryController = GroceryController = __decorate([
    (0, common_1.Controller)('grocery'),
    __metadata("design:paramtypes", [grocery_service_1.GroceryService])
], GroceryController);
//# sourceMappingURL=grocery.controller.js.map