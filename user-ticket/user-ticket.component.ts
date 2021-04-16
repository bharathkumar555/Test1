import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.scss']
})
export class UserTicketComponent implements OnInit {

  
  desc : string;

  id : number;

/*fruits: string[] = ['Apple', 'Orange', 'Banana'];*/

  
tickets: Array<Ticket> = [];

 

  constructor(private ticketService: TicketService,private router:Router, private route:ActivatedRoute) { 
    this.tickets = [];
    this.id=101;
  }

  /**
   * Retrieve all Customer from Backend
   */
  retrieveTicketsForCustomers() {
    this.ticketService.retrieveTicketsForCustomers(this.id).subscribe((tickets: Ticket[]) => {
                   this.tickets = tickets;
                   //console.log(this.tickets);
                  }
                  , (error) => {
                    console.log(error);
                  });
  }
  navigate(ticketid:any,title:any,desc:any,comments:any,status:any,estimatedtime:any,userid:any) {
    //alert("hi");
    let data=[{"ticketid":ticketid,"title":title,"desc":desc,"comments":comments,"status":status,"estimatedtime":estimatedtime,"userid":userid}];
    console.log("sent data :",data);
    this.router.navigate(["edit-ticket"],{queryParams:{data:JSON.stringify(data)}});
  }

  ngOnInit(): void {
    this.retrieveTicketsForCustomers();
  }


}
