import { Injectable } from '@angular/core';
import { DbContext } from '../../data/dbContext';
import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private db?: Database<sqlite3.Database, sqlite3.Statement>;

  constructor(private dbContext: DbContext) {
    async () => (this.db = await dbContext.getDbInstance());
  }

  public async getCustommers(): Promise<Customer> {
    const customer = [] as Customer;

    return customer;
  }
}
