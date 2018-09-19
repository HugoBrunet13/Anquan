import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  public employee;
  public display: boolean = false;


  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void{
    this.employeeService.getEmployee()
      .subscribe((response) => {
          this.employee = response;
          console.log(this.employee);
      },
      (err) => {
          alert(err['error']['errors']);
      }
    );
  }

}
