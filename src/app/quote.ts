export class Quote {
  showDescription: boolean;

  constructor( public id:number,
               public quoteText:string,
               public author:string,
               public quoteSubmitter:string, 
               public quoteUpVote: number=0,
               public quoteDownVote: number=0,

               public dateCreated:Date) {

  this.showDescription= false;
               }
              }
// export class Quote {

// showDescription= false;

//   constructor(
//     public id: number,
//     public name: string,
//     public description: string,
//     public submitter: string,
//     public completeDate: Date) {
// }
  // }
//contains properties of all inputs
