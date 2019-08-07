import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vf-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  uploadedFiles;
  constructor() { }

  ngOnInit() {
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    const formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('/api/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      })
  }
}
