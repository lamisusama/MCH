import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class UsersModule {}
