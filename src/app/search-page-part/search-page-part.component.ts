import { Component, OnInit } from '@angular/core';
import { ExploreGhService } from '../explore-gh.service';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-search-page-part',
  templateUrl: './search-page-part.component.html',
  styleUrls: ['./search-page-part.component.css']
})
export class SearchPagePartComponent implements OnInit {

  foundUsers$: User[];
  foundUsersAmount: number;
  amountOfPages: number;
  currentPage:number;
  term: string;
  

  constructor(
    private exploreGhService: ExploreGhService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('term')) {
      this.term = this.route.snapshot.paramMap.get('term');
      this.search(this.term);
    }
  }

  search(term: string) {
    this.exploreGhService.getUsers(term.trim()).subscribe((data) => {
      this.foundUsers$ = data.items;
      if (data.total_count > 1000) {
        this.foundUsersAmount = 1000;
      } else {
        this.foundUsersAmount = data.total_count;
      }
      if ((this.foundUsersAmount/20)==0) {
        this.amountOfPages = this.foundUsersAmount / 20;
      } else {
        this.amountOfPages = Math.ceil(this.foundUsersAmount/20);
      }
      if (this.amountOfPages) {
        this.currentPage = 1;
      }
    })
  }

  getPage(page: number) {
    if (page <= this.amountOfPages && page >= 1){
      this.exploreGhService.getPage(this.term, page).subscribe((data) => {
        this.foundUsers$ = data.items;
        this.currentPage = page;
      })
    }
  }
}
