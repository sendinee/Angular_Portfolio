import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies:[{name:"Java, J2EE, Spring, C#",percent:50,remark:'average'}, {name:"PHP",percent:60,remark:'good'},{name:"Android, Symfony",percent:60,remark:'good'},{name:"Python, C++",percent:60,remark:'good'}, {name:"JavaScript, BootStrap, Angular", percent:70,remark:'very-good'}, {name:"HTML, CSS",percent:85,remark:'excellent'}],
    tools:[{name:"GitHub, GitLab, GitKranken",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:60,remark:'good'},{name:"MySql, MariaDB, MongoDB",percent:60,remark:'good'},{name:"Docker",percent:50,remark:'average'},{name:"CMS (Wordpress, Wix)",percent:40,remark:'average'},{name:"Cloud (OVH)",percent:90,remark:'excellent'}],
    methodologies:[{name:"Scrum",percent:56,remark:'good'},{name:"Uml",percent:40,remark:'average'},{name:"Design Thinking",percent:70,remark:'good'},{name:"Agile, V, Cascade",percent:70,remark:'very-good'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




