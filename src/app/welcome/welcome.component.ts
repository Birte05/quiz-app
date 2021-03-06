import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public quiz: Quiz[];

  constructor(public questionService: QuestionsService) {
    questionService.getQuizzes().subscribe((response) => {
      this.quiz = response;
    });
  }

  ngOnInit(): void {
  }

}