import { Injectable } from '@angular/core';
import {Student} from "../models/student"; //1

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[]; //2
  private admin: boolean = false; //?
  constructor() { 
    this.students = [ //3
      {
        controlnumber: "18401099",
        age: 22,
        career: "ISC",
        curp: "CALA000417MNTSLNA6",
        email: "anbecastillole@ittepic.edu.mx",
        name: "Ana Bertha Castillo Leal",
        nip: 6719,
        photo: "https://picsum.photos/600/?random=1"
      },
      {
        controlnumber: "18401087",
        age: 22,
        career: "ISC",
        curp: "BEIA000202HZTSLNA6",
        email: "advabenavidesib@ittepic.edu.mx",
        name: "Andrian Valentin Benavides Ibarra",
        nip: 1313,
        photo: "https://picsum.photos/600/?random=2"
      },
      {
        controlnumber: "17401091",
        age: 22,
        career: "IM",
        curp: "LEOA651017HZTSLNA6",
        email: "iarjonavizcaino@ittepic.edu.mx",
        name: "Israel Arjona Vizcaíno",
        nip: 5820,
        photo: "https://picsum.photos/600/?random=3"
      }
    ];
  }

  public getStudents(): Student[]{
    return this.students;
  }
  public removeStudent(pos:number){
    this.students.splice(pos,1);
  }
  public getStudentByControlNumber(cn: string) : Student {
    let item: Student;
    item = this.students.find(
      (student)=>{
        return student.controlnumber === cn;
      }
    );
    return item;
  }

  public newStudent(student:Student) : void {
      this.students.push(student);
  }
  
  public editStudent(st: Student) {
    this.students.find((student)=> {
      if(student.controlnumber===st.controlnumber)
        student=st 
    });
  }
  esAdmin(){
    return this.admin;
  }

  adminSi(){
    this.admin=true;
  }

  adminNo(){
    this.admin=false;
  }
}
