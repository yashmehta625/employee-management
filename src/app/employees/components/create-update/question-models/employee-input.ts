import { EmployeeBase } from "./employee-base";

export class EmployeeInput extends EmployeeBase<string | number> {
  controlType = 'input';
}
