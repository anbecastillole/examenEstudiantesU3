import { StudentService } from './../services/student.service';
import { Component } from '@angular/core';
import { Student} from "../models/student";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];

  constructor(private studentService:StudentService,  private alertController: AlertController,
    private router: Router) {
   
    this.students = this.studentService.getStudents();
  }
  
  public removeStudent(pos:number){
    this.studentService.removeStudent(pos);
    this.students = this.studentService.getStudents();
  }
  newStudent(){
    this.router.navigate(['/new-student'], {
    });
  }
  public getStudentByControlNumber(cn: string): void {

    this.router.navigate(
      ['/view-student'],
      {
        queryParams: {controlnumber: cn}
      }
    );
  }

  logout(){
    this.studentService.adminNo()
    this.router.navigate(['/login'], {
    });
  }

}
