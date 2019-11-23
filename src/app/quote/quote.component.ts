import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Nelson Mandela', 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.', 'admin', new Date(1990, 5, 10)),
    new Quote(2, 'Mohandas Gandhi', 'Strength does not come from physical capacity. It comes from an indomitable will.', 'admin', new Date(1950, 3, 23)),
    new Quote(3, 'Rick Flores', 'We have to come for them before they come for us, it is that simple', 'admin', new Date(2012, 8, 17)),

  ];

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
       return (b.quoteUpVote) as any  - (a.quoteUpVote) as any;
     });
    }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm('Are you sure you want to delete this quote?');

      if (toDelete) {
      this.quotes.splice(index, 1);
      }
    }
  }

  upVoteQuote(isUpVoted, index) {
    if (isUpVoted) {
      this.quotes[index].quoteUpVote ++;
    }
  }

  downVoteQuote(isDownVoted, index) {
    if (isDownVoted) {
      this.quotes[index].quoteDownVote ++;
    }
  }

      addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.dateCreated = new Date();
      this.quotes.push(quote)
    }

  constructor() { }

  ngOnInit() {
  }

// showDescription= false;//boolean setting to hide and display

//   addNewQuote(quote) {
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength + 1;
//     quote.completeDate = new Date(quote.completeDate)
//     this.quotes.push(quote)
//   }

//     deleteQuote(isComplete, index) {
//     if (isComplete) {
//       let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

//       if (toDelete) { this.quotes.splice(index, 1) }//removes quote
//     }
//   }

//   toggleQuote() {
//     this.showDescription = !this.showDescription;//show or hide content
//   }



// ngOnInit() {
// }

}
