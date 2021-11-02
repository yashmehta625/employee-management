import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Employee } from '../../model/employee.model';
import * as fromEmployee from '../actions/employee.actions';




export const employeeFeatureKey = 'employee';

export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();


export interface EmployeeState extends EntityState<Employee> {
  selectedEmployeeId: string,
  creating: boolean,
  created: boolean,
  loading: boolean,
  loaded: boolean,
  deleting: boolean,
  deleted: boolean,
  error: string;
}


export const defaultEmployee: EmployeeState = {
  ids: [],
  entities: {},
  selectedEmployeeId: "",
  creating: false,
  created: false,
  loading: false,
  loaded: false,
  deleting: false,
  deleted: false,
  error: "",
};


export const initialState = employeeAdapter.getInitialState(defaultEmployee);

export function employeeReducer(state = initialState, action: fromEmployee.EmployeeActions): EmployeeState {
  switch (action.type) {

    case fromEmployee.EmployeeActionTypes.LoadEmployees: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromEmployee.EmployeeActionTypes.LoadEmployeesSuccess: {
      return employeeAdapter.setAll(action.payload.employees, {
        ...state,
        loading: false,
        loaded: true
      })
    }

    case fromEmployee.EmployeeActionTypes.LoadEmployeesFailure: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload.error
      };
    }

    case fromEmployee.EmployeeActionTypes.LoadEmployee: {
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedEmployeeId: action.payload.id
      };
    }

    case fromEmployee.EmployeeActionTypes.CreateEmployee: {
      return {
        ...state,
        creating: true,
        created: false
      };
    }

    case fromEmployee.EmployeeActionTypes.CreateEmployeeSuccess: {
      return employeeAdapter.addOne(action.payload.employee, {
        ...state,
        creating: false,
        created: true
      })
    }

    case fromEmployee.EmployeeActionTypes.CreateEmployeeFailure: {
      return {
        ...state,
        creating: false,
        created: true,
        error: action.payload.error
      };
    }

    case fromEmployee.EmployeeActionTypes.UpdateEmployee: {
      return {
        ...state,
        creating: true,
        created: false
      };
    }

    case fromEmployee.EmployeeActionTypes.UpdateEmployeeSuccess: {
      return employeeAdapter.updateOne({id: action.payload.employee.id!, changes: action.payload.employee}, {
        ...state,
        creating: false,
        created: true
      })
    }

    case fromEmployee.EmployeeActionTypes.UpdateEmployeeFailure: {
      return {
        ...state,
        creating: false,
        created: false,
        error: action.payload.error
      };
    }

    case fromEmployee.EmployeeActionTypes.DeleteEmployee: {
      return {
        ...state,
        deleting: true,
        deleted: false
      };
    }

    case fromEmployee.EmployeeActionTypes.DeleteEmployeeSuccess: {
      return employeeAdapter.removeOne(action.payload.id, {
        ...state,
        deleting: false,
        deleted: true
      })
    }

    case fromEmployee.EmployeeActionTypes.DeleteEmployeeFailure: {
      return {
        ...state,
        deleting: false,
        deleted: false,
        error: action.payload.error
      };
    }

    default:
      return state;
  }
}
