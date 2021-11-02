import { EmployeeBase } from "./employee-base";

export class EmployeeToogle extends EmployeeBase<boolean> {
  controlType = 'toggle';
}
