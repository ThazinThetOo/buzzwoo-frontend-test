import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    private acceptedArray : any = [];
    public acceptedArraySubject = new BehaviorSubject<string[]>([]);
    public data : any;
    
    addToAccepted(item : any) {
        this.acceptedArray.push(item);
        this.acceptedArraySubject.next(this.acceptedArray);
    }

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    // return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
    return this.http.get(`https://opentdb.com/api.php?amount=5&category=9&type=multiple`);
  }

  setArray(data: any){
    this.data = data;
}
    getArray(){
        return this.data;
    }

}


