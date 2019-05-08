import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'testing';
  serverCreated = false;
  servers = ['tServer1', 'tServer2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was creted';
  }

  onUpdateServerName(event: Event) {
    console.log(event)
    //this.serverName = event.target.value; / ok but typescript needs:
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
