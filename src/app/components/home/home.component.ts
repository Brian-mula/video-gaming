import { APIResponse, Game } from './../../models';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort:string ="";
  public games:Array<Game>=[];

  constructor(
    private httpService:HttpService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit',params['game-search'])
      }else{
        this.searchGames('metacrit');
      }
    });
  }
searchGames(sort:string,search?:string):void{
  this.httpService.getGameList(sort,search).subscribe((gameList:APIResponse<Game>)=>{
    this.games=gameList.results;
    console.log(gameList)
  })
}
openGameDetails(id:number):void{
  this.router.navigate(['details',id]);
}
}
