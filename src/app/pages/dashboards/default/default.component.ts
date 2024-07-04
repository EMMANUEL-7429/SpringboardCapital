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

 
  //openImage(index: number) {
    // Implement logic for opening an image from _album array
 // }
  handleFileInput(files: FileList): void {
    // Implement file handling logic here, such as uploading or displaying images
  }

  openImage(index: number): void {
    // Implement logic to open the clicked image
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
}

    /**
     * horizontal-vertical layput set
     */
     