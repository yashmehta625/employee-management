import { EmployeeBase } from "./employee-base";

export class EmployeeRadio extends EmployeeBase<string> {
  controlType = 'radio';
}
