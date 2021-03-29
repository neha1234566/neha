import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-launch-space-x',
  templateUrl: './launch-space-x.component.html',
  styleUrls: ['./launch-space-x.component.scss']
})
export class LaunchSpaceXComponent implements OnInit {
  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  launchDataArray = [];
  isLoading = false;
  launchYearSelectedIndex: any;
  showFilter = false;
  
  launches: any;
  
  launchesCount = 0;

  
  launchYear = [];
  uniqueLaunchYear = [];
  index = 0;
  
  launchStatus: string = "";
  landstatus: string = "";
  year: string = "";

  constructor(private spaceServe:SpaceService,public router:Router) {
    
     
   }

   ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.isLoading = true;
    this.spaceServe.getAllLaunches()
    .subscribe((response: any) => {
      // console.log(response);
      this.launchDataArray = response;
      this.isLoading = false;
    }, err => {
      console.log(err);
      this.isLoading = false;
    })
  }

  filterLaunchPrograms(index: number, year: string): any {
    // console.log(index, year);
    this.getFilteredLaunches(year);
    this.launchYearSelectedIndex = index;
    this.showFilter = true;
  }

  getFilteredLaunches(year: string): any {
    this.spaceServe.getLaunchesByYear(year)
    .subscribe((response: any) => {
      // console.log(response);
      this.launchDataArray = response;
    }, err => {
      console.log(err);
    })
  }

  clearFilter(): void {
    this.getAllLaunches();
    this.launchYearSelectedIndex = null;
    this.showFilter = false;
  }
  filterLaunch(event:any) {
    this.launchStatus = event.target.textContent.toLowerCase();
    this.router.navigate([""], {
      queryParams: { limit: 100, launch_status: this.launchStatus },
    });
    this.spaceServe.getLaunches(this.launchStatus).subscribe((res:any) => {
      this.launches = res;
      this.launchesCount = res.length;
    });
  }
  filter_land(event:any) {
    this.launchStatus = event.target.textContent.toLowerCase();

    if (this.launchStatus != "" && this.launchStatus != "" && this.year == "") {
      this.spaceServe
        .getLaunchLand(this.launchStatus, this.launchStatus)
        .subscribe((data) => {
          this.launches = data;
          this.launchesCount = data.length;
          this.router.navigate([""], {
            queryParams: {
              limit: 100,
              launch_status: this.launchStatus,
              land_status: this.launchStatus,
            },
          });
        });
    } else if (
      this.launchStatus != "" &&
      this.launchStatus != "" &&
      this.year != ""
    ) {
      this.spaceServe
        .getAll(this.year, this.launchStatus, this.launchStatus)
        .subscribe((data) => {
          this.launches = data;
          this.launchesCount = data.length;
          this.router.navigate([""], {
            queryParams: {
              limit: 100,
              launch_status: this.launchStatus,
              land_status: this.launchStatus,
              launch_year: this.year,
            },
          });
          return;
        });
    } else {
      this.spaceServe
        .getAllLand()
        .subscribe((res:any) => {
          this.launches = res;
          this.launchesCount = res.length;
          return;
        });
    }
  }
  filterYear(year: string) {
    this.year = year;
    this.router.navigate([""], {
      queryParams: { limit: 100, year: this.year },
    });
    this.spaceServe.getYear(this.year).subscribe((data) => {
      this.launches = data;
    });
  }

  // filterYear(year:any) {
  //   this.year = year;
  //   this.router.navigate([""], {
  //    // queryParams: { limit: 100, year: this.year },
  //   });
  //   this.spaceServe.getAllLaunches().subscribe((data) => {
  //     this.launches = data;
  //   });
  // }
 
}