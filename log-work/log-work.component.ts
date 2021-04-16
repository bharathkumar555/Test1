import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { UserTicketEditComponent } from '../user-ticket-edit/user-ticket-edit.component';



import { Log } from '../Log';
import {TicketService} from '../ticket.service';

//import { LogWorkComponent } from '../log-work/log-work.component';

@Component({
  selector: 'app-log-work',
  templateUrl: './log-work.component.html',
  styleUrls: ['./log-work.component.scss']
})
export class LogWorkComponent implements OnInit {
  ticketForm!: FormGroup;
  

  logwork : Log;

  constructor(
    public dialog: MatDialogRef<LogWorkComponent>,private ticketService: TicketService
  ) {
    this.logwork={"ticketId":0,"timeSpent":0,"timeRemaining":0,"date":"","description":""};
   }

  ngOnInit(): void {4

    //console.log("user id  for dialog :",this.usert.received_data.title);
    this.ticketForm = new FormGroup({
      timeSpent: new FormControl(''),
      timeRemaining: new FormControl(''),
      date: new FormControl(''),
      description: new FormControl(''),
    });
  }
  get timeSpent() {
    return this.ticketForm.get('timeSpent') as FormControl;

  }
  get timeRemaining() {
    return this.ticketForm.get('timeRemaining') as FormControl;

  }
  get date() {
    return this.ticketForm.get('date') as FormControl;
  }

  get description() {
    return this.ticketForm.get('description') as FormControl;
  }

  addToLog(){
    
    console.log(this.date.value);

    this.logwork={"ticketId":101,"timeSpent":this.timeSpent.value,"timeRemaining":this.timeRemaining.value,"date":this.date.value,"description":this.description.value};
    
    this.ticketService.updateLogWork(this.logwork).subscribe((log: Log[]) => {
      console.log(log);
     }
      , (error) => {
        console.log(error);
      });
    //this.dialog.close();

    
  }

  /*savelog(){
    console.log(this.date);
  }*/

}
