import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GroceryService {

    private readonly apiHost = 'grocery-pricing-api.p.rapidapi.com';
  private readonly apiKey = '59d77c61efmsh9eedd98b36390c4p13f52fjsne0092e6c110f';

  constructor(private readonly httpService: HttpService) {}

  async getGroceryPricing(): Promise<any> {
    const url = `https://${this.apiHost}`;
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
        error.response?.data || 'Failed to fetch grocery pricing',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getGroceryByName(name: string): Promise<any> {
    const url = `https://${this.apiHost}`;
    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          params: { name },
          headers: {
            'x-rapidapi-host': this.apiHost,
            'x-rapidapi-key': this.apiKey,
          },
        }),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch grocery by name',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
