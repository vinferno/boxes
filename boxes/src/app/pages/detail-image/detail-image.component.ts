import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'vf-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss']
})
export class DetailImageComponent implements OnInit {

  public id;
  public image;
  constructor(private route: ActivatedRoute, private imagesService: ImagesService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (param ) => {
      this.id = param.get('id');
      this.imagesService.getById({ _id: this.id}).subscribe( res => {
        this.image = res;
      });
    });
  }

  deleteImage() {
    this.imagesService.deleteImage({ _id: this.id}).subscribe( () => {
      this.router.navigate(['']);

    });
  }

}
