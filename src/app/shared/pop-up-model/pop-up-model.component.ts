import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pop-up-model',
  templateUrl: './pop-up-model.component.html',
  styleUrls: ['./pop-up-model.component.scss']
})
export class PopUpModelComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  /**
   * To open pop-up model
   */
  openModel() {
    document.getElementById('myModal').style.display = 'block';
  }

  /**
   * To close pop-up model
   */
  closeModel() {
    this.location.back();
    document.getElementById('myModal').style.display = 'none';
  }
}
