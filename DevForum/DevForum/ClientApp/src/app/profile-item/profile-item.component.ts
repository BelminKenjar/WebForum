import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {

  @Input() profiles: any;
  modalOptions: {
    size: 'lg';
  }
  closeResult: string
  isAuthenticated: boolean = false;

  constructor(private modalService: NgbModal, private authorizeService: AuthorizeService) {
    this.authorizeService.isAuthenticated().subscribe(data => {
      if(data)
      this.isAuthenticated = data;
    })
  }

  ngOnInit() {

  }

  @Input() public profile;
  open(content: any, profile: any) {
    this.profile = profile;
    this.modalService.open(content, this.modalOptions).result.then(
      (result) => {
        console.log(result);
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

}
