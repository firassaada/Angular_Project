import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductOrder} from "../models/dto/product-order";
import {Endpoints} from "../utils/constant";

@Injectable({
  providedIn: 'root'
})
export class OrderRepositoryService {

  constructor(private httpClient: HttpClient) { }


  makeOrder(productToOrder : ProductOrder[]){
    return this.httpClient.post(
      Endpoints.makeOrder,
      {
        product : productToOrder
      }
    )
  }


  getOrders(){
    return this.httpClient.get(Endpoints.orders)
  }

}
