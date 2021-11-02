import * as EmployeeActions from './employee.actions';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new EmployeeActions.LoadEmployees()).toBeTruthy();
  });
});
