import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  lastUpdate = new Date()
  constructor(private router: Router,) { 
    
  }

  ngOnInit() {
  }
  goto(lien){
    this.router.navigateByUrl(lien);
  }

}
