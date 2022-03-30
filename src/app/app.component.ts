import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'innosid-browser-ng';
  names: string[] | undefined;
  selected: string | undefined;

  constructor(
    private httpClient: HttpClient) {
  }

  getNames(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080');
  }

  getModelURI(): string {
    return `http://localhost:8080/${this.selected}`
  }

  ngOnInit(): void {
    this.getNames()
      .subscribe({
        next: v => this.names = v,
        error: e => alert(e)
      })
  }
}
