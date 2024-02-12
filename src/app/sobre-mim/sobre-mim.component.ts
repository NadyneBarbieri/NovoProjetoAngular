import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent implements OnInit {
  
  constructor(

    private router: Router

  ) { }

  ngOnInit() {

    window.scroll(0,0)

  }

}
