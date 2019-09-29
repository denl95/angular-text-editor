import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  htmlContent: string;
  constructor(private textService: TextService) {
  }
  ngOnInit() {
    this.htmlContent = this.textService.text;
  }
}
