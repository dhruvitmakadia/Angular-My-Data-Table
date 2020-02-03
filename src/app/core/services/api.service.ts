import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API URL for employee data
  API_EMPLOYEE = `${environment.BASE_URL}/employee`;
  // API URL for department data
  API_DEPARTMENT = `${environment.BASE_URL}/department`;

  constructor(private httpClient: HttpClient) { }

  /**
   * To get all employee data
   */
  getAllEmployeeData() {
    return this.httpClient.get(this.API_EMPLOYEE);
  }

  /**
   * get employee id and return data of that id
   * @param id employee id for getting single record
   */
  getOneEmployeeData(id) {
    return this.httpClient.get(`${this.API_EMPLOYEE}/${id}`);
  }

  /**
   * get employee data and add new record to database
   * @param data employee data for insert operartion
   */
  addEmployeeData(data) {
    this.httpClient.post(`${this.API_EMPLOYEE}`, data).subscribe();
  }

  /**
   * get employee data and id for update particular record in database
   * @param id employee id for update operation
   * @param data emploee data for update operation
   */
  updateEmployeeData(id, data) {
    this.httpClient.patch(`${this.API_EMPLOYEE}/${id}`, data).subscribe();
  }

  /**
   * get employee id and delete record from database
   * @param id employee id for delete operation
   */
  deleteEmployeeData(id) {
    this.httpClient.delete(`${this.API_EMPLOYEE}/${id}`).subscribe();
  }

  /**
   * To get all department data
   */
  getAllDepartmentData() {
    return this.httpClient.get(this.API_DEPARTMENT);
  }
}
