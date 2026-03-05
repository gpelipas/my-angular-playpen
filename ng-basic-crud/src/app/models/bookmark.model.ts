export class Bookmark {
  id?: any;
  name?: string;
  url?: string;
  dateSaved?: Date;
  active?: boolean;

  static newInstance(): Bookmark {
    let newInstance : Bookmark = {
      id : -1,
      name: '',
      url: '',
      dateSaved: undefined,
      active: false
    };

    return newInstance;
  }
}
