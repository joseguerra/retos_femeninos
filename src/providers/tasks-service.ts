import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the TasksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TasksService {

	db: SQLite = null;

  constructor() {
    this.db = new SQLite();
  }

  create(token: string,name: string){
  	let sql = "INSERT INTO tasks(token,name) VALUES(?,?)";
  	return this.db.executeSql(sql,[token,name]);
  }

  createTable(){  	
  	let sql = "CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT,name TEXT)";
  	return this.db.executeSql(sql,[]);
  }

  getAll(){
  	let sql = "SELECT * FROM tasks";
  	return this.db.executeSql(sql, []);
  }

  getToken(){
  	let sql = "SELECT token, name FROM tasks";
  	return this.db.executeSql(sql, []);
  }

	openDataBase(){		
		return this.db.openDatabase({
			name: 'data.db',
			location: 'default'
		})	
	}  
}
