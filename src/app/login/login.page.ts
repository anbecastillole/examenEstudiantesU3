import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string
  public pass: string
  constructor( private studentService: StudentService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
 
 async login() {
    if (this.user == "admin" && this.pass == "123") {
      this.studentService.adminSi()
      this.router.navigate(['/home'])
      this.user = ""
      this.pass = ""
    } else {
      if (this.alumnoValidado()) {
        this.router.navigate( ['/view-student'],
          {
            queryParams: { controlnumber: this.user.toString() }
          })
        this.user = ""
        this.pass = ""
      } else {
        this.loginAlert();
      }
    }
  }

  alumnoValidado(): Boolean {
    let st = this.studentService.getStudentByControlNumber(this.user)
    if (st) {
      if (st.nip.toString() == this.pass) return true
       else  return false
    } else return false
    
  }

  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos. Revise',
      buttons: [
        {
          text: 'OK',
          role: 'confirm'
        },
      ],
    });
    await alert.present();
  }
}
