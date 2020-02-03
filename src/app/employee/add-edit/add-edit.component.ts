import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  id: string;
  employee;
  departmentData;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private api: ApiService,
    private location: Location
  ) { }

  employeeAddForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', Validators.required],
    mobile: ['', [Validators.required]],
    address: ['', Validators.required],
    gender: ['', Validators.required],
    department: ['', Validators.required],
    hireDate: ['', Validators.required],
    permanentEmployee: [false, Validators.required]
  });

  ngOnInit() {
    this.departmentData = this.api.getAllDepartmentData();
    if (this.router.snapshot.paramMap.get('id')) {
      this.id = this.router.snapshot.paramMap.get('id');
      this.api.getOneEmployeeData(this.id).subscribe(data => {
        this.employee = data;
        this.employeeAddForm.setValue({
          name: this.employee.name,
          email: this.employee.email,
          mobile: this.employee.mobile,
          address: this.employee.address,
          gender: this.employee.gender,
          department: this.employee.department,
          hireDate: this.employee.hireDate,
          permanentEmployee: this.employee.permanentEmployee
        });
      });
    }
  }

  /**
   * To perform Add or Update operation on form submit
   */
  onSubmit() {
    if (this.router.snapshot.paramMap.get('id')) {
      this.location.back();
      this.api.updateEmployeeData(this.id, this.employeeAddForm.value);
    } else {
      this.location.back();
      this.api.addEmployeeData(this.employeeAddForm.value);
    }
  }

}
