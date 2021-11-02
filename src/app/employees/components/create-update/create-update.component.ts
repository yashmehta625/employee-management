import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

import { EmployeeBase } from './question-models/employee-base';
import { CreateEmployee, LoadEmployee, LoadEmployees, UpdateEmployee } from '../../store/actions/employee.actions';
import { Employee } from './../../model/employee.model'
import { selectEmployee, selectEmployeeCreated } from '../../store/selectors/employee.selectors';
import { QuestionService } from './from-services/question-service/question.service';
import { EmployeeControlService } from './from-services/employee-control-service/employee-control.service';


@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  questions: EmployeeBase<any>[] = [];
  form!: FormGroup;
  payLoad: Employee | undefined;
  employeeId : string | null = null;

  constructor(
    private store: Store,
    private questionService: QuestionService,
    private employeeControlService: EmployeeControlService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new LoadEmployees());
    if (this.employeeId) {
      this.store.dispatch(new LoadEmployee({ id: this.employeeId }));
      this.store.select(selectEmployee).pipe(
        mergeMap(employee => this.questionService.getQuestions(employee || undefined)),
      ).subscribe((questions: EmployeeBase<string | boolean | number | Date>[]) => {
        this.questions = questions;
        this.form =
          this.employeeControlService
            .toFormGroup(questions as EmployeeBase<string | boolean | number | Date>[]);
      })
    } else {
      this.questionService.getQuestions().subscribe(
        (questions: EmployeeBase<string | boolean | number | Date>[]) => {
          this.questions = questions;
          this.form = this.employeeControlService
            .toFormGroup(questions as EmployeeBase<string | boolean | number | Date>[]);
        })
    }
  }

  onSubmit() {
    let isAlerted = false
    this.payLoad = this.form.getRawValue();
    if (this.payLoad) {
      if(this.employeeId){
        this.payLoad.id = this.employeeId;
        this.payLoad.doj = this.payLoad.doj?.toString();
        this.store.dispatch(new UpdateEmployee({ employee: this.payLoad }))
        this.store.select(selectEmployeeCreated).subscribe(
          (data) => {
            if(data && !isAlerted){
              isAlerted = true;
              alert("Employee Updated Successfully");
            }
          },
          (error) => alert("Employee Update Failed" + error)
        )
      }else{
        this.payLoad.doj = this.payLoad.doj?.toString();
        this.store.dispatch(new CreateEmployee({ employee: this.payLoad }))
        this.store.select(selectEmployeeCreated).subscribe(
          (data) => {
            if(data && !isAlerted){
              isAlerted = true;
              alert("Employee Created Successfully");
            }
          },
          (error) => alert("Employee Create Failed :" + error)
        )
        this.form.reset();
      }
    }
  }

}
