import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from './_models/Game';
import { CasinoService } from './_services/game.service';
import { SplitInterpolation } from '@angular/compiler';
import { concat, ConnectableObservable, count } from 'rxjs';
import { Login } from './_models/Login';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="topwrapper">
    <div class="innerwrapper">
      <div class="SlotMaskine">
      <td id="celle1"></td>
      <td id="celle2"></td>
      <td id="celle3"></td>

      <td id="celle4"></td>
      <td id="celle5"></td>
      <td id="celle6"></td>

      <td id="celle7"></td>
      <td id="celle8"></td>
      <td id="celle9"></td>
      </div>
        <div class="slotbar">
          <div>Balance: {{Login.balance}} DKK | Indsats: {{Indsats}} DKK</div>
          <button type="button"(click)="Spin()">Spin</button>
      </div>
    </div>
  </div>
  `,
  styles: [`
  td{
    border:solid;
    width:100%;
    height:100%;
    max-height:200px;
    max-width:200px;
    min-width:200px;
    min-height:200px;
  }

  .slotbar{
    border:solid 2px;
    background: black;
    opacity: 0.6;
    color:white;
  }

  #imgid{
    min-height:100%;
  }

  .SlotMaskine{
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left: 10%;
    margin-right:10%;
    justify-content: center;
  }
  .innerwrapper{
    display:inline-block;
    border:solid;
    width:100%;
    margin-left: 10%;
    margin-right:10%;
    background: url(https://webmg.ru/wp-content/uploads/2022/11/i-99-3.jpeg);
    background-size:cover;
  }
  .topwrapper{
    position: fixed;
    width:100%;
    display:flex;
  }
  body,html{height:100%; width:100%; overflow-x: hidden;}
  `
  ]
})
export class FrontpageComponent implements OnInit {
  Games: Game[] = [];
  Login: Login = {loginID: 0, email: '', balance: 0, Password: ''};
  board: Array<number>[] = [];
  Indsats: number = 10;


  constructor(private gameService: CasinoService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.gameService.getAll().subscribe(x => this.Games = x);
    //this.loginService.getAll().subscribe(x => this.Login = x);
    this.loginService.getByID(1).subscribe(x => this.Login = x);
    this.Spin();
  }
  
  Spin():void{
    this.Login.balance -= this.Indsats;
    this.board = [];

    this.board.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);
    this.board.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]);
    this.board.push([Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)]); // Assign type baseret på hvilket nummer det er?? Typen kan være et billede

    
    //console.log(document.getElementById("celle1")?.appendChild(test));

    var counter: number;
    counter = 0;
    

    
    //imageID?.parentNode?.removeChild(imageID);

    for( var test123213: number = 0;test123213 < 9; test123213++){
      //document.getElementById("celle" + test123213)!.removeChild(imageID);
      document.getElementById("imgid")?.remove();
    }

    

    // Create et element baseret på hvilket tal der ligger i vores board. Først når tallet er gået igennem en if statement laver vi elementet
    this.board.forEach(element => {


      if(element[0] === element[1] && element[1] === element[2]){
        //this.gameService.SaveWin()
      }

      console.log(element);
      element.forEach(x => {

        
        //console.log(x);

        var test = document.createElement("img");
        test.id = "imgid"
        test.style.height = '100%';
        test.style.width = '100%';
        test.height = 170;
        test.width = 230;
        
        switch(x){
          case 0: 
            test.src = "https://www.clipartmax.com/png/middle/98-984354_vector-clip-art-slot-machine.png";
            break;

          case 1: 
            test.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
            break;

          case 2:
            test.src = "https://i.imgur.com/QJgrihz.jpeg"
            break;

          case 3:
            test.src = "https://theslotbuzz.com/wp-content/uploads/2021/12/Wild-Symbol-300x240.jpg"
            break;

          case 4:
            test.src = "https://w7.pngwing.com/pngs/276/896/png-transparent-slot-machine-slot-games-tc-casino-slots-machine-game-text-logo.png"
            break;

            case 5:
              test.src = "https://www.clipartmax.com/png/middle/86-865969_free-icons-png-lemon-slot-machine-png.png"
              break;
        }
        
        counter++;
        var testern = document.getElementById("celle" + counter)?.appendChild(test);
        //testern?.append(test);
      });
    });


    
  }

  WinUdregning(): void{



  }



}
