import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

import { Employee } from '../model/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesRef: AngularFirestoreCollection<Employee>;
  constructor(private afs: AngularFirestore) {
    this.employeesRef = afs.collection<Employee>('employees');
  }
  getDocumentId() {
    return of(this.employeesRef.doc().ref.id);
  }

  create(data: Employee) {
    return new Observable<Employee>((observer) => {
      this.employeesRef.doc(data.id).set(data).then(
        () => {
          this.employeesRef.doc<Employee>(data.id).valueChanges().subscribe(
            employee => observer.next(employee),
            error => observer.error(error)
          );
        },
        (error: any) => observer.error(error)
      )
    })
  }

  getAll() {
    return this.employeesRef.valueChanges();
  }

  get(id: string) {
    return this.employeesRef.doc(id).valueChanges();
  }

  update(data: Employee) {
    return new Observable<Employee>((observer) => {
      this.employeesRef.doc(data.id).update(data).then(
        () => this.employeesRef.doc<Employee>(data.id).valueChanges().subscribe(
          (employee) => observer.next(employee),
          (error: any) => observer.error(error)
        ),
        (error: any) => observer.error(error)
      )
    })
  }

  delete(id: string) {
    return new Observable<string>((observer) => {
      this.employeesRef.doc(id).delete().then(
        () => observer.next(id),
        (error: any) => observer.error(error)
      )
    })
  }
}
