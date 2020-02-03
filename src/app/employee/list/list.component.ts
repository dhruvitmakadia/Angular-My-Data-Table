import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // object to store employee data
  employeeData: object;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.employeeData = this.api.getAllEmployeeData();
  }

  /**
   * get employee id and make api call for delete operation
   * @param event get employee id of particular record
   */
  viewMsg(event: number) {
    this.api.deleteEmployeeData(event);
  }

  /**
   * display pop-up form for add new record
   */
  insertForm() {
    document.getElementById('myModal').style.display = 'block';
  }
}
