import { Action } from '@ngrx/store';
import { Employee } from '../../model/employee.model';

export enum EmployeeActionTypes {
  CreateEmployeeId = '[Employee] Create EmployeeId',
  CreateEmployeeIdSuccess = '[Employee] Create EmployeeId Success',
  CreateEmployeeIdFailure = '[Employee] Create EmployeeId Failure',

  CreateEmployee = '[Employee] Create Employee',
  CreateEmployeeSuccess = '[Employee] Create Employee Success',
  CreateEmployeeFailure = '[Employee] Create Employee Failure',

  LoadEmployees = '[Employee] Load Employees',
  LoadEmployeesSuccess = '[Employee] Load Employees Success',
  LoadEmployeesFailure = '[Employee] Load Employees Failure',

  LoadEmployee = '[Employee] Load Employee',
  LoadEmployeeSuccess = '[Employee] Load Employee Success',
  LoadEmployeeFailure = '[Employee] Load Employee Failure',

  UpdateEmployee = '[Employee] Update Employee',
  UpdateEmployeeSuccess = '[Employee] Update Employee Success',
  UpdateEmployeeFailure = '[Employee] Update Employee Failure',

  DeleteEmployee = '[Employee] Delete Employee',
  DeleteEmployeeSuccess = '[Employee] Delete Employee Success',
  DeleteEmployeeFailure = '[Employee] Delete Employee Failure',
}

export class CreateEmployeeId implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeId;
  constructor() { }
}

export class CreateEmployeeIdSuccess implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeIdSuccess;
  constructor(public payload: { id: string }) { }
}

export class CreateEmployeeIdFailure implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeIdFailure;
  constructor(public payload: { error: any }) { }
}

export class CreateEmployee implements Action {
  readonly type = EmployeeActionTypes.CreateEmployee;
  constructor(public payload: { employee: Employee }) { }
}

export class CreateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeSuccess;
  constructor(public payload: { employee: Employee }) { }
}

export class CreateEmployeeFailure implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeFailure;
  constructor(public payload: { error: any }) { }
}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;
}

export class LoadEmployeesSuccess implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeesSuccess;
  constructor(public payload: { employees: Employee[] }) { }
}

export class LoadEmployeesFailure implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeesFailure;
  constructor(public payload: { error: any }) { }
}

export class LoadEmployee implements Action {
  readonly type = EmployeeActionTypes.LoadEmployee;
  constructor(public payload: { id: string }) { }
}

export class UpdateEmployee implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployee;
  constructor(public payload: { employee: Employee }) { }
}

export class UpdateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployeeSuccess;
  constructor(public payload: { employee: Employee }) { }
}

export class UpdateEmployeeFailure implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployeeFailure;
  constructor(public payload: { error: any }) { }
}

export class DeleteEmployee implements Action {
  readonly type = EmployeeActionTypes.DeleteEmployee;
  constructor(public payload: { id: string }) { }
}

export class DeleteEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.DeleteEmployeeSuccess;
  constructor(public payload: { id: string }) { }
}

export class DeleteEmployeeFailure implements Action {
  readonly type = EmployeeActionTypes.DeleteEmployeeFailure;
  constructor(public payload: { error: any }) { }
}

export type EmployeeActions =
| CreateEmployeeId
| CreateEmployeeIdSuccess
| CreateEmployeeIdFailure
| CreateEmployee
| CreateEmployeeSuccess
| CreateEmployeeFailure
| LoadEmployees
| LoadEmployeesSuccess
| LoadEmployeesFailure
| LoadEmployee
| UpdateEmployee
| UpdateEmployeeSuccess
| UpdateEmployeeFailure
| DeleteEmployee
| DeleteEmployeeSuccess
| DeleteEmployeeFailure;

