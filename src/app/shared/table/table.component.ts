import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // search string
  query = '';
  // sorting field default set to name
  key = 'name';
  // boolean flag for sorting sign
  reverse = false;

  constructor(private router: Router) { }
  // get employee data from parent component
  @Input() dataObject: object;
  // send employee id to parent component for operation
  @Output() sendMsg = new EventEmitter<number>();

  ngOnInit() {

  }

  /**
   * take field name and display sort sign according to flag
   * @param key take field name to sort
   */
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  /**
   * get employee id and return to parent component for delete operation
   * @param id employee id for delete operation
   */
  delete(id: number) {
    if (confirm('Are You Sure To Delete This Record?')) {
      this.sendMsg.emit(id);
    }
  }

  /**
   * get employee id and navigate to edit component for edit operation
   * @param id employee id for edit operation
   */
  edit(id: number) {
    this.router.navigate([`${this.router.url}/${id}`]);
    document.getElementById('myModal').style.display = 'block';
  }
}
