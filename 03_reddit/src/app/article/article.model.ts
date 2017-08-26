export class Article {
    title: string;
    link: string;
    votes:number;

    constructor (title:string, link: string, votes?:number){
        this.title=title;
        this.link=link;
        this.votes=votes || 0; //default 0 and optional
    }
// return domai of link
// e.g. if this.link = http://foo.com/path/to/bar
// will return foo.com
    domain(): string {
        try {
          const domainAndPath: string = this.link.split('//')[1];
          return domainAndPath.split('/')[0];
        } catch (err) {
          return null;
        }
      }
}
