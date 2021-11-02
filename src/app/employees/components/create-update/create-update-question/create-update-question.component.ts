import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EmployeeBase } from '../question-models/employee-base';


@Component({
  selector: 'app-create-update-question',
  templateUrl: './create-update-question.component.html',
  styleUrls: ['./create-update-question.component.css']
})
export class CreateUpdateQuestionComponent implements OnInit {
  @Input() question!: EmployeeBase<string>;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[this.question.key].valid; }


}
