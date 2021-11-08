import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';


import { MaterailModule } from '../materail/materail.module';

import { EmployeesRoutingModule } from './employees.-routing.module';
import * as fromEmployee from './store/reducers/employee.reducer'
import { EmployeeEffects } from './store/effects/employee.effects';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { CreateUpdateQuestionComponent } from './components/create-update/create-update-question/create-update-question.component';
import { ViewDeleteComponent } from './components/view-delete/view-delete.component';
import { CustomValidatorsDirective } from './components/create-update/custom-validators/custom-validators.directive';


@NgModule({
  declarations: [
    CreateUpdateComponent,
    CreateUpdateQuestionComponent,
    ViewDeleteComponent,
    CustomValidatorsDirective,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employee', fromEmployee.employeeReducer),
    EffectsModule.forFeature([EmployeeEffects]),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterailModule
  ],
  providers: [DatePipe],
})
export class EmployeesModule { }
