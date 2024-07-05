import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';


interface User {
  id: number,
  email: string,
  avatar: string,
  name: string,
  role: string,
}

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {
  userDetail = new FormGroup({
    name: new FormControl('')
  })
  user!:User;
  constructor(private userService: userService, private route: ActivatedRoute){}
  ngOnInit(){
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId){
      this.userService.getUserById(Number(userId)).subscribe((user:any)=>this.user = user);
    }
    }

  saveUser(){
    const {name}=this.userDetail.value;
    this.userService.updateUser(this.user, String(name)).subscribe((user:any)=>{
      this.user = user;
      console.log('updatedUser', this.user)
    });
  }

}
