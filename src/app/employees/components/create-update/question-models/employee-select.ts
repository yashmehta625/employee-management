import { EmployeeBase } from "./employee-base";

export class EmployeeSelect extends EmployeeBase<string> {
  controlType = 'select';
}
