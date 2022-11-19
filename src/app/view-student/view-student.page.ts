import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {

  public student: Student;
  esAdmin: boolean = false;
  constructor(private studentService: StudentService, private aroute: ActivatedRoute, private router: Router) {
    this.esAdmin = studentService.esAdmin();
   }

  ngOnInit() { //se lanza cuand ose carga la página
    this.aroute.queryParams.subscribe(
      (params)=>{
        const res = params.get
        console.log(params.controlnumber+"Hola");
        this.student = this.studentService.getStudentByControlNumber(params.controlnumber);
      }
    ); //se utiliza ej promises de js
   

  }

  public editStudent(cn: string): void {
    //console.log(this.studentService.getStudentByControlNumber(cn));
    this.router.navigate(['/edit-student'], {
      queryParams: { cn: cn },
    });
  }

  
  logout(){
    this.router.navigate(['/login'], {
    });
  }

}
