import { DatePipe } from '@angular/common';
import { Component, OnInit, PipeTransform, ɵɵstylePropInterpolate2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Employee } from '../../model/employee.model';
import { DeleteEmployee, LoadEmployees } from '../../store/actions/employee.actions';
import { selectEmployeeDeleted, selectEmployees } from '../../store/selectors/employee.selectors';

@Component({
  selector: 'app-view-delete',
  templateUrl: './view-delete.component.html',
  styleUrls: ['./view-delete.component.css']
})
export class ViewDeleteComponent implements OnInit {
  EMPLOYEES: Employee[] = [];
  employees!: Observable<Employee[]>;
  page = 1;
  pageSize = 4;
  collectionSize: number = 0;
  filter = new FormControl('');
  constructor(
    private store: Store,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadEmployees());
    this.store.select(selectEmployees).subscribe(
      (employees: Employee[]) => {
        this.EMPLOYEES = employees || [];
        this.collectionSize = employees.length;
        this.refreshEmployees();
      }
    );
    this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    ).subscribe((employee: Employee[]) => this.refreshSearchedEmployees(employee));
  }

  search(text: string): Employee[] {
    return this.EMPLOYEES.filter(employee => {
      const term = text.toLowerCase();
      return (employee.firstName + ' ' + employee.lastName).toLocaleLowerCase().includes(term)
        || employee.email?.includes(term)
        || employee.department?.includes(term)
        || employee.contact?.toString().includes(term)
        || employee.salary?.toString().includes(term)
        || this.datePipe.transform(employee.doj, 'MM/dd/yyyy')?.includes(term)
    });
  }

  refreshSearchedEmployees(employees: Employee[]) {
    this.employees = of(employees.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize))
  }

  refreshEmployees() {
    this.employees = of(this.EMPLOYEES.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize))
  }

  onDeleteEmployeeClick(id: string) {
    let isAlerted = false;
    this.store.dispatch(new DeleteEmployee({id: id}));
    this.store.select(selectEmployeeDeleted).subscribe(
      (data) => {
        if(data && !isAlerted){
          isAlerted = true;
          alert("Employee Deleted Successfully");
        }
      },
      (error) => alert("Failed to delete employee reason :" + error)
    )
  }

}
