import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './_models/Game';
import { CasinoService } from './_services/casino.service';
import { SplitInterpolation } from '@angular/compiler';
import { concat, count } from 'rxjs';

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
  board: Array<number>[] = [];

  constructor(private gameService: CasinoService) { }

  ngOnInit(): void {
    //this.gameService.getAll().subscribe(x => this.Games = x);
    this.Spin();
  }
  
  Spin():void{
    this.board = [];

    this.board.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);
    this.board.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);
    this.board.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]); // Assign type baseret på hvilket nummer det er?? Typen kan være et billede

    
    //console.log(document.getElementById("celle1")?.appendChild(test));

    var counter: number;
    counter = 0;
    
    var imageID = document.getElementById("celle1");

    imageID?.parentNode?.removeChild(imageID);

    for( var test123213: number = 0;test123213 < 9; test123213++){
      //document.getElementById("celle" + test123213)!.removeChild(imageID);
    }

    

    // Create et element baseret på hvilket tal der ligger i vores board. Først når tallet er gået igennem en if statement laver vi elementet
    this.board.forEach(element => {


      element.forEach(x => {
        var test = document.createElement("img");
        test.id = "imgid"
        if(x === 1){
        
        test.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
        }
        
        counter++;
        var testern = document.getElementById("celle" + counter)?.appendChild(test);
        console.log(testern);
        //testern?.append(test);
        console.log(x);
      });
    });



    //document.getElementById("celle" + "1")!.innerHTML = this.board[0][0].toString();
    //document.getElementById("celle" + "2")!.innerHTML = this.board[0][1].toString();
    //document.getElementById("celle" + "3")!.innerHTML = this.board[0][2].toString();

    //document.getElementById("celle" + "4")!.innerHTML = this.board[1][0].toString();
    //document.getElementById("celle" + "5")!.innerHTML = this.board[1][1].toString();
    //document.getElementById("celle" + "6")!.innerHTML = this.board[1][2].toString();

    //document.getElementById("celle" + "7")!.innerHTML = this.board[2][0].toString();
    //document.getElementById("celle" + "8")!.innerHTML = this.board[2][1].toString();
    //document.getElementById("celle" + "9")!.innerHTML = this.board[2][2].toString();

    
  }
}
