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
          <div class="displayinfo">
            <div>Balance: {{Login.balance}} DKK  Indsats: {{Indsats}} DKK</div>
          </div>
          <div class="win">Test</div>
          <div class="SpinButton">
            <a class="SpinButtonUnderWrapper">
            <button type="button"(click)="Spin()">Spin</button>
            <svg>
              <g id="arrows">
                <path class="arrowone" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                <path class="arrowtwo" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                <path class="arrowthree" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
              </g>
            </svg>
            </a>
          </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  
  .displayinfo{
    margin:auto;
    width:150px;
    float:left;
  }
  .win{
    margin:auto;
    text-align: center;
    width:150px;
  }
  .SpinButton{
    margin:auto;
    float:right;
    width:150px;
  }
  .SpinButtonUnderWrapper{
    display:flex;
    padding: 10px 45px;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 40px;
    color:white;
    background: #6225E6;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
  }
  .path.one{
    transition: 0.4s;
    transform: translateX(-60%);
  }
  .path.two{
    transition: 0.4s;
    transform: translateX(-30%);
  }

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
    display:flex;
    justify-content:center;
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
