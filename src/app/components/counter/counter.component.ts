import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, NavigationStart, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private router: Router ) {

    this.router.events.subscribe((event: Event) => {

      if(event instanceof NavigationEnd || event instanceof NavigationStart && event instanceof NavigationCancel) {

        setTimeout(() =>{

          this.count();
          }, 1000);

      }

     });

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    this.count();

  }

  count(): any {
    let section_counter = document.querySelector('#box');

   let counters = document.querySelectorAll('.pa-counter-box .counter-value');

   let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;

      let speed = 50;
      counters.forEach((counte, index) => {
        const UpdateCounter = () => {
          if(counte instanceof HTMLElement) {
          const targetNumber:number | undefined = Number(counte.dataset['count']);
          console.log(targetNumber);

          const initialNumber = +counte.innerText;
          const incPerCount = targetNumber / speed;
          if (initialNumber < targetNumber!) {
            counte.innerText = String(Math.ceil(initialNumber + incPerCount));
            setTimeout(UpdateCounter, 50);
          }
        }
        }
        UpdateCounter();

        if (counte.parentElement!.style.animation) {
          counte.parentElement!.style.animation = '';
        } else {
          counte.parentElement!.style.animation = `slide-up 2s ease ${
            index / counters.length + 1
          }s`;
        }
      });
      observer.unobserve(section_counter!);
    },
    {
      root: null,
      threshold: window.innerWidth > 768 ? 0.4 : 0.2,
    }
  );



  CounterObserver.observe(section_counter!);

  }

}
