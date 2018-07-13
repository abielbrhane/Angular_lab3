import { OnInit, ElementRef,Renderer2, Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DbService } from '../db/db.service';
import { FarmProduction } from './farms.service';


@Component({
  selector: 'app-farms',
  template:`
  <ul>
  <li *ngFor="let farm of farms" (click)=onLink()> 
    <a [routerLink]="['/farm',farm.id]">
      {{farm.farm}}
    </a>
  </li>
  <router-outlet></router-outlet>
</ul>
  `,
  styles:['div{display:none};'],
  providers:[DbService]
})

export class FarmsComponent implements OnInit{

   subscription: Subscription;
  id: string;
  farms:FarmProduction[] = new Array<FarmProduction>();
  p: any;

  constructor(private activatedRoute:ActivatedRoute, private dbService:DbService,private e: ElementRef, private r: Renderer2){
     this.farms=this.dbService.getAllData();
     this.subscription = activatedRoute.params.subscribe((param: any) => this.id=param['id']);
  }

    ngOnInit(){
      this.onLink();
    }

    onLink(){
      if(this.id){
        if(this.p){
          this.r.removeChild(this.e.nativeElement, this.p);
        }
        this.p=this.r.createElement('p');
        const text = this.r.createText(this.dbService.getData(this.id));
        this.r.appendChild(this.p,text);
        this.r.appendChild(this.e.nativeElement,this.p);
      }

    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }

