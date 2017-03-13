import { Component } from '@angular/core';
import { GitHub} from '../../providers/git-hub';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public gitRepos;
  public username;
  constructor(public navCtrl: NavController, private gitHub: GitHub) {
    
  }

  getGitHubRepos() {
    this.gitHub.getRepos(this.username).subscribe(data=> {
      this.gitRepos = data.json();
    }, error => {
      console.error(error);
    },
    () => {
      console.log('get repos completed');
    });

  }

}
