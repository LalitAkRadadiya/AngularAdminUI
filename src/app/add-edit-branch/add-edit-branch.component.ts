import { Component, OnInit, Input } from '@angular/core';
import { SharedService} from '../sharedservice.service';
@Component({
  selector: 'app-add-edit-branch',
  templateUrl: './add-edit-branch.component.html',
  styleUrls: ['./add-edit-branch.component.scss']
})
export class AddEditBranchComponent implements OnInit {

  constructor(private service : SharedService) {}
  @Input() companyList: any;


  branchId = '';
  branchName = '';
  address= '';
  ngOnInit(): void {
  }

  saveAdded(){
    console.log('val', this.branchId, this.branchName, this.address, this.companyList.id);

    console.log(this.companyList.companyBarnch);
    var val = {
      id : this.companyList.id,
      Email : this.companyList.Email,
      Name: this.companyList.Name,
      totalEmployee : this.companyList.totalEmployee,
      totalBranch: this.companyList.totalBranch,
      companyBarnch :{
          branchId : this.branchId,
          branchName :  this.branchName,
          address : this.address
      }
    }
    
    // var val = {
    //  id : this.companyList.id,
    //  Email : this.companyList.Email,
    //  Name : this.companyList.Name,
    //  totalEmployee : this.companyList.totalEmployee,
    //  totalBranch: this.companyList.totalBranch
     
    // };
    this.service.editList(val).subscribe(res => {
      console.log('list addedd');
      // this.toastr.success('Added SuccessFully!');
    });
  }
}
