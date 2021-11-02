import { EmployeeBase } from "./employee-base";

export class EmployeeDate extends EmployeeBase<Date> {
  controlType = 'date';
}
