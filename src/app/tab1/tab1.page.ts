import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  data: any;


  constructor(public photoService: PhotoService) {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  ngOnInit(){
    this.getInfo();
  }

  getInfo() {
    this.photoService.getInfo().then(val => {
      console.log(val);
      this.data = val;


    });
  }
}
