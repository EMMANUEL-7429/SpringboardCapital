import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  imageSrc1: string | ArrayBuffer | null = null;
  imageSrc2: string | ArrayBuffer | null = null;
 imageSrc3: string | ArrayBuffer | null = null;
  imageSrc4: string | ArrayBuffer | null = null;
  imageSrc5: string |ArrayBuffer |null=null;
  imageSrc6: string |ArrayBuffer |null=null;
 imageSrc: string | ArrayBuffer = "assets/images/imagenotfound.png";
 // imageSrc2: string | ArrayBuffer = "assets/images/imagenotfound.png";
  currentTab: number = 0;
  isValid: boolean = true;
  dashboard: FormGroup;
  breadCrumbItems: Array<{}>;
  memberDetails: any = {
    FullName: '',
    SearchName: '',
    IsPerson: false,
    Payroll: '',
    IdType: '0',
    IdNo: '',
    GenderId: '0',
    NationalityId: '0',
    RegistrationDate: '',
    DOB: '',
    NSSFNo: '',
    LevelofEducationId: '0',
    MaritalStatusId: '0',
    NHIFNo: '',
    CompanyRegistrationDate: '',
    CompanyCertificateNo: ''
  };
  @ViewChild('content') content;
  dashboardForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const employeeNo = localStorage.getItem('employeeNo');
    this.dashboardForm = this.fb.group({
      employeeNo: [employeeNo]
    });
  }

  successmsg() {}
  downloadPassport() {
    // Implement download logic for passport photo
  }

  handleProfilePhotoUpload(event: any) {
    // Implement upload logic for profile photo
  }
  onInputFullname() {
    // Implement logic for FullName input change if needed
  }
  submitForm(){}
  handleFileInput(files: FileList): void {}

  openImage(index: number): void {}

  onFileSelected(event: Event, imageIndex: number): void {
    console.log('File selected for image index:', imageIndex);
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        console.log('File loaded successfully, result:', reader.result);
        switch (imageIndex) {
          case 1:
            this.imageSrc1 = reader.result;
            break;
          case 2:
            this.imageSrc2 = reader.result;
            break;
          case 3:
            this.imageSrc3 = reader.result;
            break;
          case 4:
            this.imageSrc4 = reader.result;
            break;
            case 5:
            this.imageSrc5 = reader.result;
            break;
            case 6:
            this.imageSrc6 = reader.result;
            break;
          default:
            this.imageSrc = reader.result;
        }
      };
  
      reader.readAsDataURL(file);
    } else {
      console.log('No file selected');
    }
  }
  
  nextPrev(step: number) {
    this.currentTab += step;
  }
 
}
