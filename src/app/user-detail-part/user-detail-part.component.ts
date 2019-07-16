import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExploreGhService } from '../explore-gh.service';

@Component({
  selector: 'app-user-detail-part',
  templateUrl: './user-detail-part.component.html',
  styleUrls: ['./user-detail-part.component.css']
})
export class UserDetailPartComponent implements OnInit {

  user;
  constructor(
    private exploreGhService: ExploreGhService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.showData();
  }

   showData() {
    const login = this.route.snapshot.paramMap.get('login');
    this.exploreGhService.getUser(login).subscribe((data) => this.user = {
      login: data.login,
      name: data.name,
      html_url: data.html_url,
      created_at: data.created_at,
      location: data.location,
      company: data.company,
      email: data.email,
      public_repos: data.public_repos,
      avatar_url: data.avatar_url
    });
    this.exploreGhService.getUserRepos(login).subscribe((data) => this.user.repos = data);
  }
}
