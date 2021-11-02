import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EmployeeBase } from '../../question-models/employee-base';

@Injectable({
  providedIn: 'root'
})
export class EmployeeControlService {

  constructor() { }

  toFormGroup(questions: EmployeeBase<string | boolean | number | Date>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value ? question.value : '', question.validators)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
