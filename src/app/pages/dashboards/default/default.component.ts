import { Component, OnInit, ViewChild } from '@angular/core';



import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  imageSrc: string | ArrayBuffer = "assets/images/imagenotfound.png";
  imageSrc2: string | ArrayBuffer = "assets/images/imagenotfound.png";
  currentTab: number = 0;
  _album: any[] = [];
  isValid:boolean=true;
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
  constructor() {
  }

  ngOnInit() {}
  successmsg(){}
  //handleFileInput(file:FileList){}
  downloadPassport() {
    // Implement download logic for passport photo
  }

  handleProfilePhotoUpload(event: any) {
    // Implement upload logic for profile photo
  }
  onInputFullname() {
    // Implement logic for FullName input change if needed
  }

 
  
  handleFileInput(files: FileList): void {
    
  }

  openImage(index: number): void {
    
  }
  

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc2= reader.result;
        
      };

      reader.readAsDataURL(file);
    }
  }
  nextPrev(step: number) {
    this.currentTab += step;
   
}
}

  