import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  modalRef?: BsModalRef; userForm; hobbyItems: string[] = []; hobbyForm;
  config: ModalOptions = { backdrop: 'static' };

  constructor(
    private formBuilder: FormBuilder, private modalService: BsModalService,
  ) {
    this.hobbyForm = this.formBuilder.group({
      data: ['', [Validators.required]],
    });

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
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



}
