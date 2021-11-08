import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { EmployeesService } from './../../service/employees.service'
import { EmployeeActionTypes } from './../actions/employee.actions';
import * as fromEmployee from './../actions/employee.actions';
import { Employee } from '../../model/employee.model';


@Injectable()
export class EmployeeEffects {

  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService) { }

  createId$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActionTypes.CreateEmployeeId),
    switchMap(() => this.employeesService.getDocumentId().pipe(
      map(id => new fromEmployee.CreateEmployeeIdSuccess({ id : id})),
      catchError(error => of(new fromEmployee.CreateEmployeeIdFailure({ error })))
    ))
  ))

  create$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActionTypes.CreateEmployee),
    map((action: fromEmployee.CreateEmployee) => action.payload),
    switchMap((payload: { employee: Employee }) => this.employeesService.create(payload.employee).pipe(
      map(employee => new fromEmployee.CreateEmployeeSuccess({ employee })),
      catchError(error => of(new fromEmployee.LoadEmployeesFailure({ error })))
    ))
  ))

  getAll$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActionTypes.LoadEmployees),
    switchMap(() => this.employeesService.getAll().pipe(
      map(employees => new fromEmployee.LoadEmployeesSuccess({ employees })),
      catchError(error => of(new fromEmployee.LoadEmployeesFailure({ error })))
    ))
  ))

  update$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActionTypes.UpdateEmployee),
    map((action: fromEmployee.UpdateEmployee) => action.payload),
    switchMap((payload: { employee: Employee }) => this.employeesService.update(payload.employee).pipe(
      map(employee => new fromEmployee.UpdateEmployeeSuccess({ employee })),
      catchError(error => of(new fromEmployee.UpdateEmployeeFailure({ error })))
    ))
  ))

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActionTypes.DeleteEmployee),
    map((action: fromEmployee.DeleteEmployee) => action.payload),
    switchMap((payload: { id: string }) => this.employeesService.delete(payload.id).pipe(
      map(id => new fromEmployee.DeleteEmployeeSuccess({ id: id })),
      catchError(error => of(new fromEmployee.DeleteEmployeeFailure({ error })))
    ))
  ))
}
