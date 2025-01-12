import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Catch } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class McdonaldsService {
    private readonly apiHost = 'mcdonald-s-products-api.p.rapidapi.com';
    private readonly apiKey = '59d77c61efmsh9eedd98b36390c4p13f52fjsne0092e6c110f';

    constructor(private readonly httpService: HttpService) {}

    async getCurrentMenu(): Promise<any> {
        const url = 'https://mcdonald-s-products-api.p.rapidapi.com/us/currentMenu';

        try {
        const response = await firstValueFrom(
            this.httpService.get(url, {
            headers: {
                'x-rapidapi-host': this.apiHost,
                'x-rapidapi-key': this.apiKey,
            },
            }),
        );

        return response.data;
        } catch (error) {
        throw new HttpException(
            error.response?.data || 'Failed to retrieve McDonald\'s menu',
            error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
        }
    }

    async getProductById(productId: string): Promise<any> {
        const url = `https://${this.apiHost}/us/products/${productId}`;
    
        try {
          const response = await firstValueFrom(
            this.httpService.get(url, {
              headers: {
                'x-rapidapi-host': this.apiHost,
                'x-rapidapi-key': this.apiKey,
              },
            }),
          );
    
          return response.data;
        } catch (error) {
          throw new HttpException(
            error.response?.data || 'Failed to retrieve product details',
            error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
    }
    async searchProducts(searchTerm: string, page: number = 1, pageSize: number = 30): Promise<any> {
        const url = `https://${this.apiHost}/us/products/search`;
    
        try {
          const response = await firstValueFrom(
            this.httpService.get(url, {
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
            }),
          );
    
          return response.data;
        } catch (error) {
          throw new HttpException(
            error.response?.data || 'Failed to search for products',
            error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
    }
}
