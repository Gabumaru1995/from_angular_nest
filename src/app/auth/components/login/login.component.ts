import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
//import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  private authService=inject(AuthService)
  

  loginForm=new FormGroup({
    email:new FormControl("", [Validators.email, Validators.required]),
    password:new FormControl("", Validators.required)
  })
  funIngresar(){
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res)=>{
        console.log(res)
        //this.router.navigate(["/admin"])
      },
      (error)=>{
        console.log(error)
      }
    )
    //alert("Ingresando...")
  }
}
