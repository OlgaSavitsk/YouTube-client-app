import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
