import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  // styleUrls: ['./session.component.scss']
})
export class SessionModalComponent implements OnInit {
  @Input() action : any;
  constructor(public activeModal: NgbActiveModal,
    public ngbActiveModal : NgbActiveModal,) { }

  ngOnInit() {
      // console.log('action => ' + this.action)
  }

  close() {
   this.ngbActiveModal.close();
   // this.dialogRef.close();
  }

}
