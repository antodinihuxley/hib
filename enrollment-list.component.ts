import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Enroll } from 'src/app/shared/enroll.model';
import { Fields } from 'src/app/shared/fields.model';
import { Incoming } from 'src/app/shared/incoming.model';
import { SubFields } from 'src/app/shared/subfields.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css'],
})
export class EnrollmentListComponent implements OnInit {
  @Input() fieldsArr: Fields[];

  incoming: Incoming;
  enrolledFields: Fields[] = [];
  availableFields: Fields[] = [];

  subfieldsArr: SubFields[] = [];
  options: Enroll;
  showList = false;
  showDetail = false;
  showAddList = false;
  selectedField: Fields;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSelect(id: string) {
    this.showDetail = true;
    console.log(id);
    this.selectedField = this.incoming.fields.find((data) => (data.id = id));
    console.log(this.selectedField);
  }
}
