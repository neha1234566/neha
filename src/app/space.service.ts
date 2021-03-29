import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  
  Url = "https://api.spacexdata.com/v3/launches?";
  constructor(private http:HttpClient) { }
  
  public getAllLaunches(): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100launch_success=true`);
  }
  public getAllLand(): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100land_success=true`);
  }
  
  public getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
  }

  getAll(launchYear: string, launchSuccess: string, landSuccess: string): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014launch_year=${launchYear}&launch_success=${launchSuccess}&land_success=${landSuccess}`
    );
  }

  getLaunchLand(launchSuccess: string, landSuccess: string): Observable<any> {
    return this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&limit=100&launch_success=${launchSuccess}&land_success=${landSuccess}`
    );
  }
  getYear(param: string): Observable<any> {
    return this.http.get(this.Url + "launch_year=" + param);
  }
  getLaunches(param:string): Observable<any> {
    return this.http.get(this.Url + "launch_success=" + param);
  }
}
