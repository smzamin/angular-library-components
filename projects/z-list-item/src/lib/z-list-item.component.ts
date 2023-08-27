import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'z-list-item',
  templateUrl: './z-list-item.html',
  styleUrls: ['./z-list-item.scss']
})
export class ZListItemComponent implements OnInit {

  userList = JSON.parse(localStorage.getItem('userData') || '[]');

  allUsers = this.userList;

  usersDetails = [
    { "firstName": "Rochelle ", "middleName": "J.", "lastName": "Lopez", "email": "rochelleJLopez@teleworm.us", "department": "Schucks Auto Supply", "hobbiesArray": ["Hiking", "Gardening"] },
    { "firstName": "Joe", "middleName": "N.", "lastName": "Marion", "email": "joeNMarion@rhyta.com", "department": "IT", "hobbiesArray": ["Angualr", "Java", "Python"] },
    { "firstName": "Bobby ", "middleName": "P.", "lastName": "Buzzle", "email": "BobbyPBuzzell@teleworm.us ", "department": "Machinery Mechanic", "hobbiesArray": ["Driving"] }];

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: any) {
    this.userList.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(this.userList));
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userList, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
