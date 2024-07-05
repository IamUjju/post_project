import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";


interface User {
    id: number;
    email: string;
    avatar: string;
    name: string;
    role: string;
  }


@Injectable({
    providedIn: 'root'
})export class userService{
    constructor(public http: HttpClient){

    }

    getAllUsers(){
        return this.http.get('https://api.escuelajs.co/api/v1/users/').pipe(map((res:any)=>res));
    }

    getUserById(id:number){
        return this.http.get(`https://api.escuelajs.co/api/v1/users/${id}`);
    }

    updateUser(user:User, name:string){
        return this.http.put(`https://api.escuelajs.co/api/v1/users/${user.id}`, {name});
    }



}