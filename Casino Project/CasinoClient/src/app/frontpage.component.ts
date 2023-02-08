import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './_models/Game';
import { CasinoService } from './_services/casino.service';
import { SplitInterpolation } from '@angular/compiler';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      frontpage works!
    </p>

    <div class="SlotMaskine">
      <div id="celle1"></div>
      <div id="celle2"></div>
      <div id="celle3"></div>

      <div id="celle4"></div>
      <div id="celle5"></div>
      <div id="celle6"></div>

      <div id="celle7"></div>
      <div id="celle8"></div>
      <div id="celle9"></div>
    </div>
    <button type="button"(click)="Spin()">Spin</button>
  `,
  styles: [`
  .SlotMaskine{
    display: grid;
    grid-template-columns: auto auto auto;
  }
  `
  ]
})
export class FrontpageComponent implements OnInit {
  Games: Game[] = [];

  constructor(private gameService: CasinoService) { }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(x => this.Games = x);
    this.Spin();
  }
  
  Spin():void{

    var arr: number[][] = new Array();

    arr.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);
    arr.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);
    arr.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);

    document.getElementById("celle" + "1")!.innerHTML = arr[0][0].toString();
    document.getElementById("celle" + "2")!.innerHTML = arr[0][1].toString();
    document.getElementById("celle" + "3")!.innerHTML = arr[0][2].toString();

    document.getElementById("celle" + "4")!.innerHTML = arr[1][0].toString();
    document.getElementById("celle" + "5")!.innerHTML = arr[1][1].toString();
    document.getElementById("celle" + "6")!.innerHTML = arr[1][2].toString();

    document.getElementById("celle" + "7")!.innerHTML = arr[2][0].toString();
    document.getElementById("celle" + "8")!.innerHTML = arr[2][1].toString();
    document.getElementById("celle" + "9")!.innerHTML = arr[2][2].toString();
  }
}
