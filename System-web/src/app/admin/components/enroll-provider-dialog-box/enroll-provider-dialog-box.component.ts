import { Component, OnInit, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Provider } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-enroll-provider-dialog-box',
  templateUrl: './enroll-provider-dialog-box.component.html',
  styleUrls: ['./enroll-provider-dialog-box.component.css']
})
export class EnrollProviderDialogBoxComponent implements OnInit {

  providers: Provider[] = [];

  newProvider: Provider = {
    id: '',
    name: '',
    rate: 0,
    isEnabled: ''
  };

  constructor(public dialogRef: MatDialogRef<EnrollProviderDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Provider,
    private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getAllProviders().subscribe(res => {
      this.providers = res;
    });
  }

  providerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    rate: new FormControl('', Validators.required),
  });

  enrollProvider(): void {
    this.providerService.enrollProvider(this.providerForm.value).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
