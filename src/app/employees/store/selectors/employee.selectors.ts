import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { EmployeeState } from '../reducers/employee.reducer';
import { Employee } from '../../model/employee.model';

export interface AppState {
  employee: EmployeeState;
}

export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const selectFeature = createFeatureSelector<EmployeeState>('employee');;


const getEmployeeCreating = (state: EmployeeState) => state.creating;
const getEmployeeCreated = (state: EmployeeState) => state.created;

const getEmployeesLoading = (state: EmployeeState) => state.loading;
const getEmployeesLoaded = (state: EmployeeState) => state.loaded;

const getEmployeeDeleting = (state: EmployeeState) => state.deleting;
const getEmployeeDeleted = (state: EmployeeState) => state.deleted;

export const selectEmployees = createSelector(selectFeature, employeeAdapter.getSelectors().selectAll);

export const selectEmployee = createSelector(selectFeature, (employeeState) :Employee | null =>{
  if(!!employeeState && employeeState.selectedEmployeeId){
      return employeeState.entities[employeeState.selectedEmployeeId]!
  }else{
    return null;
  }
});


export const selectEmployeeCreating = createSelector(selectFeature, getEmployeeCreating);
export const selectEmployeeCreated = createSelector(selectFeature, getEmployeeCreated);

export const selectEmployeesLoading = createSelector(selectFeature, getEmployeesLoading);
export const selectEmployeesLoaded = createSelector(selectFeature, getEmployeesLoaded);

export const selectEmployeeDeleting = createSelector(selectFeature, getEmployeeDeleting);
export const selectEmployeeDeleted = createSelector(selectFeature, getEmployeeDeleted);








