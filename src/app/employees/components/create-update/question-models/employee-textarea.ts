import { EmployeeBase } from "./employee-base";

export class EmployeeTextArea extends EmployeeBase<string> {
  controlType = 'textArea';
}
