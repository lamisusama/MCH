import { NotificationService } from 'src/app/sharedFeatures/services/notification.service';
import { RegionsService } from './../../services/regions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEditRegionsViewModel } from '../../models/AddEdit-Regions.Model';

@Component({
  selector: 'app-regions-add-edit',
  templateUrl: './regions-add-edit.component.html',
  styleUrls: ['./regions-add-edit.component.css'],
})
export class RegionsAddEditComponent implements OnInit {
  model: AddEditRegionsViewModel = new AddEditRegionsViewModel();

  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private RegionsService: RegionsService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.extractUrlParams();
  }
  buildForm(): void {
    this.formGroup = this.fb.group({
      Region_NameAR: [null, [Validators.required]],
      Region_NameEN: [null, [Validators.required]],
      Region_Notes: [null, []],
      Region_IsDefault: [null, []],
    });
  }
  bindModelToForm() {
    this.formGroup?.controls['Region_NameAR']?.patchValue(
      this.model.Region_NameAR
    );
    this.formGroup?.controls['Region_NameEN']?.patchValue(
      this.model.Region_NameEN
    );
    this.formGroup?.controls['Region_Notes']?.patchValue(
      this.model.Region_Notes
    );
    this.formGroup?.controls['Region_IsDefault']?.patchValue(
      this.model.Region_IsDefault
    );
  }
  extractUrlParams() {
    let editId = this.route.snapshot.params['id'];
    /*    if (editId) {
      this.RegionsService.getByID(editId).subscribe((result) => {
        this.model = result;
        this.bindModelToForm();
      });
    } */
  }
  getControl(controlName: string): any {
    return this.formGroup?.controls[controlName];
  }
  backToList() {
    this.router.navigate(['/regions/list']);
  }
  save() {

    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) return;
    debugger
    this.collectModel();
    debugger
    this.RegionsService.AddRegions(this.model).subscribe((result) => {
      this.router.navigate(['/Regions/list']);
    });
    debugger


    /*     if (this.model.Region_NameAR == null) {
          this.RegionsService.AddRegions(this.model).subscribe((result) => {
            this.notificationService.showSuccessTranslated(
              '',
              'Dataset.dataSavedSuccessfuly'
            );
            this.router.navigate(['/RegionsService/list']);
          });
        } else {
          this.RegionsService.Update(this.model).subscribe((result) => {
            this.notificationService.showSuccessTranslated(
              '',
              'Dataset.dataUpdatedSuccessfuly'
            );
            this.router.navigate(['/RegionsService/list']);
          });
        } */
  }
  collectModel() {
    this.model.Region_NameAR = this.formGroup.value.Region_NameAR;
    this.model.Region_NameEN = this.formGroup.value.Region_NameEN;
    this.model.Region_Notes = this.formGroup.value.Region_Notes;
    this.model.Region_IsDefault = this.formGroup.value.Region_IsDefault;
  }
}
