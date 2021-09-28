import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modalRef?: BsModalRef; userForm; hobbyItems: string[] = []; hobbyForm; reloadView = true;
  config: ModalOptions = { backdrop: 'static' };

  userList = JSON.parse(localStorage.getItem('userData') || '[]');

  todo = [
    'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'
  ];

  doneList = [
    'Walk Dog', 'Stretch', 'Code Stuff', 'Drag Stuff', 'Drop Stuff', 'Run', 'Walk',
    'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Dog Food'
  ]

  constructor(
    private formBuilder: FormBuilder, private modalService: BsModalService,
  ) {
    this.hobbyForm = this.formBuilder.group({
      data: ['', [Validators.required]],
    });

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      hobbiesArray: this.formBuilder.array([]),
    });

  }

  ngOnInit() {

  }

  addUser(data: any) {
    const oldInfo = JSON.parse(localStorage.getItem('userData') || '[]');
    localStorage.setItem('userData', JSON.stringify([...oldInfo, data]));
    this.hobbyForm.reset();
    this.modalService.hide();
    setTimeout(() => this.reloadView = false);
    setTimeout(() => this.reloadView = true);
  }

  get hobbiesArray() {
    return this.userForm.get('hobbiesArray') as FormArray;
  }

  addItem(data: any) {
    this.hobbyItems.push(data.data);
    this.hobbiesArray.push(this.formBuilder.control(data.data));
    this.hobbyForm.reset();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  hideModal(): void {
    this.modalService.hide();
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

  addNew() {
    this.todo.push(Math.random().toString(36).slice(2));
  }


}
