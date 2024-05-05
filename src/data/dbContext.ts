import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import { Injectable } from '@angular/core';

// you would have to import / invoke this in another file

@Injectable({
  providedIn: 'root',
})
export class DbContext {
  private dbPromisse?: Promise<Database<sqlite3.Database, sqlite3.Statement>>;

  constructor() {
    this.initializeDb();
  }

  private async initializeDb() {
    try {
      this.dbPromisse = open({
        filename: './database.db',
        driver: sqlite3.Database,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  public async getDbInstance(): Promise<
    Database<sqlite3.Database, sqlite3.Statement> | undefined
  > {
    if (!this.dbPromisse) {
      await this.initializeDb();
    }

    return this.dbPromisse;
  }

  public async closeDb() {
    const db = await this.getDbInstance();

    if (db) {
      await db.close();
    }
  }
}
