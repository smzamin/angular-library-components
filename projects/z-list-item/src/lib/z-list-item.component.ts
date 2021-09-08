import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'z-list-item',
  templateUrl: './z-list-item.html',
  styleUrls: ['./z-list-item.scss']
})
export class ZListItemComponent implements OnInit {

  userList = JSON.parse(localStorage.getItem('userData') || '[]');

  constructor() { }

  ngOnInit(): void {
  }

}
