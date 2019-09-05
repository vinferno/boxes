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
  public ready = true;
  constructor(private imagesService: ImagesService) { }
  public keywords = [];

  ngOnInit() {
  }

  upload() {
    const formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("upload", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    formData.append("keywords", JSON.stringify(this.keywords));
    this.imagesService.upload(formData).subscribe((response) => {
        console.log('response received is ', response);
        this.ready = true;
        this.imageSrc = null;
        this.imagesService.goToImage(response._id);
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

  public addKeyword(keyword) {
    this.keywords.push(keyword);
  }

  public removeKeyword(keyword) {
    this.keywords.splice(this.keywords.indexOf(keyword), 1);
  }
}
