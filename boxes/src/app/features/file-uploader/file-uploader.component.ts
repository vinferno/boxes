import { Component, OnInit } from '@angular/core';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'vf-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  public uploadedFiles;
  public imageSrc;
  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getAll().subscribe( res => {
      console.log('res', res[0].image.data.data);
      this.imageSrc = this.getSrcFromBuffer(res[0].image.data.data)
    });
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles);

  }

  upload() {
    const formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("upload", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.imagesService.upload(formData).subscribe((response) => {
        console.log('response received is ', response);
      });
  }
  public readURL(event: any): void {

    if (event.target.files && event.target.files[0]) {
      this.uploadedFiles = event.target.files;
      console.log(this.uploadedFiles);
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }


  getSrcFromBuffer(buf) {
    console.log('getSrcs')
    const arrayBufferView = new Uint8Array( buf );
    const blob = new Blob( [ arrayBufferView ], { type: "image/png" } );
    const urlCreator = window.URL;
    this.imageSrc = urlCreator.createObjectURL( blob );
  }
}
