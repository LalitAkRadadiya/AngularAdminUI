import { Component, OnInit } from '@angular/core';
import { SharedService } from './sharedservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  title = 'AngularAssignment';
  constructor(private service : SharedService){}
  getListData : any;
  getBranchList : any;
  companyList : any;

  ActivateAddEditServiceComp = false;
  ngOnInit(): void {
   this.refreshList();
   
  }
  refreshList(){
    this.service.getList().subscribe(data=>{
      console.log('data', data);
      this.getListData = data;
      this.companyList = data;
    });
  }
  
  addList(){
    this.ActivateAddEditServiceComp = true;
    console.log('addlist wokring');
  }
  editList(val: any){
    this.companyList = val;
    this.ActivateAddEditServiceComp = true;
  }
  deleteList(val : any){
    this.service.deleteList(val.id).subscribe(data=>{
      this.refreshList();
    });
  }
  closeClick(){
    this.ActivateAddEditServiceComp = false;
    this.refreshList();
  }

  private loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
    }
}
