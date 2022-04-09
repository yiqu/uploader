export interface IFooterSection {
  title: string;
  links: IFooterLink[];
}

export interface IFooterLink {
  text: string;
  url: string;
}

export class FooterSection implements IFooterSection {
  constructor(public title: string, public links: IFooterLink[]) {
  }
}

export class FooterLink implements IFooterLink {
  constructor(public text: string, public url: string) {
  }
}
