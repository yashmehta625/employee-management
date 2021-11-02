import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';

import { Employee } from 'src/app/employees/model/employee.model';
import { EmployeeBase } from '../../question-models/employee-base';
import { EmployeeDate } from '../../question-models/employee-date';
import { EmployeeInput } from '../../question-models/employee-input';
import { EmployeeRadio } from '../../question-models/employee-radio';
import { EmployeeSelect } from '../../question-models/employee-select';
import { EmployeeTextArea } from '../../question-models/employee-textarea';
import { EmployeeToogle } from '../../question-models/employee-toggle';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(employee?: Employee) {
    const questions: EmployeeBase<string | boolean | number | Date>[] = [
      new EmployeeInput({
        value: employee ? employee.firstName : undefined,
        key: 'firstName',
        label: 'First Name',
        required: true,
        order: 1,
        controlType: 'input',
        type: 'text',
        placeholder: "Enter first name",
        validators: [Validators.required],
        class: 'full-width',
        error: 'Enter valid first name and is required.'
      }),

      new EmployeeInput({
        value: employee ? employee.lastName : undefined,
        key: 'lastName',
        label: 'Last Name',
        required: true,
        order: 2,
        controlType: 'input',
        type: 'text',
        placeholder: "Enter last name",
        validators: [Validators.required],
        class: 'full-width',
        error: 'Enter valid last name and is required.'
      }),

      new EmployeeInput({
        value: employee ? employee.contact : undefined,
        key: 'contact',
        label: 'Contact',
        required: true,
        order: 3,
        controlType: 'input',
        type: 'number',
        placeholder: "Enter contact number",
        validators: [Validators.required],
        class: 'full-width',
        error: 'Enter valid contact and is required.'
      }),

      new EmployeeInput({
        value: employee ? employee.email : undefined,
        key: 'email',
        label: 'Email',
        required: true,
        order: 4,
        controlType: 'input',
        type: 'email',
        placeholder: "Enter email address",
        validators: [Validators.required, Validators.email],
        class: 'full-width',
        error: 'Enter valid email and is required.'
      }),

      new EmployeeTextArea({
        value: employee ? employee.address : undefined,
        key: 'address',
        label: 'Address',
        required: true,
        order: 5,
        controlType: 'textarea',
        placeholder: "Enter address",
        validators: [Validators.required],
        class: 'full-width',
        error: 'Enter valid address and is required.'
      }),

      new EmployeeDate({
        value: employee ? new Date(employee.doj!) : undefined,
        key: 'doj',
        label: 'Date Of Joining',
        required: true,
        order: 6,
        controlType: 'date',
        placeholder: "MM/DD/YYYY",
        validators: [Validators.required],
        class: 'full-width',
        error: 'Enter valid date of joining and is required.'
      }),

      new EmployeeSelect({
        value: employee ? employee.gender : undefined,
        key: 'gender',
        label: 'Gender',
        required: true,
        order: 7,
        options: [
          {key : 'male', value: 'Male'},
          {key : 'female', value: 'Female'},
          {key : 'others', value: 'Others'},
        ],
        placeholder: "Select gender",
        validators: [Validators.required],
        class: 'full-width',
        error: 'Select valid gender and is required.'
      }),

      new EmployeeInput({
        value: employee ? employee.salary : undefined,
        key: 'salary',
        label: 'Salary',
        required: true,
        order: 8,
        controlType: 'input',
        type: 'number',
        validators: [Validators.required],
        class: 'full-width',
        error: 'Enter valid salary and is required.'
      }),

      new EmployeeToogle({
        value: employee ? employee.wfh : false,
        key: 'wfh',
        label: 'Work From Home',
        required: true,
        order: 9,
        controlType: 'toggle',
        validators: [],
        class: 'full-width mb-3'
      }),

      new EmployeeRadio({
        value: employee ? employee.department : undefined,
        key: 'department',
        label: 'Department',
        required: true,
        order: 10,
        options: [
          {key : 'developer', value: 'Developer'},
          {key : 'sales/marketing', value: 'Sales / Marketing'},
          {key : 'admin', value: 'Admin'},
        ],
        controlType: 'radio',
        validators: [Validators.required],
        class: 'full-width mb-3'
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}

