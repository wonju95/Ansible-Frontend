import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit() {
    // this.router.navigate(['dashboard'], { relativeTo: this.route }); //첫 화면으로 dashboard 표기
  }
  

}
