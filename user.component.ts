import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { userService } from "src/app/services/user.service";

interface User{
    id:number,
    email: string,
    avatar: string,
    name: string,
    role: string,
}

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})export class userComponent{
    user!:User[];
    constructor(private userGet: userService, private router:Router){}
    ngOnInit(){
        this.userGet.getAllUsers().subscribe((res:any)=>{this.user=res
            console.log('all users', this.user);
        });
    }
    userDetail(user:User){
        this.router.navigate(['userdetail', user.id])
    }
}