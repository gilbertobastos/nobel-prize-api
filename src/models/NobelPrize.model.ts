import LaureateModel from './Laureate.model';

/**
 * Model representing a nobel prize that has won.
 */
class NobelPrizeModel {
  private _id:string;
  /**
   * Get the id.
   */
  get id():string {
    return this._id;
  }

  private _year:number;
  /**
   * Set the year.
   * @param {number} year The year (integer)!
   */
  set year(year:number) {
    if (Number.isInteger(year)) {
      this._year = year;
    } else {
      throw new Error('The year supplied is not a integer!');
    }
  }
  /**
   * Get the year.
   */
  get year():number {
    return this._year;
  }

  private _category:string;
  /**
   * Set the category;
   * @param {string} category The category.
   */
  set category(category:string) {
    this._category = category;
  }
  /**
   * Get the category.
   */
  get category(): string {
    return this._category;
  }

  private _laureates:Array<LaureateModel> = [];
  /**
   * Set the laureates list.
   * @param {Array<LaureateModel>} laureates The laureates.
   */
  set laureates(laureates:Array<LaureateModel>) {
    this._laureates = laureates;
  }
  /**
   * Get laureates.
   */
  get laureates():Array<LaureateModel> {
    return this._laureates;
  }

  /**
   * Constructor.
   * @param {string} id The id.
   * @param {year} year The year.
   * @param {string} category The category.
   * @param {Array<LaureateModel>} laureates The laureates.
   */
  constructor(id:string, year:number, category:string,
      laureates:Array<LaureateModel>) {
    this._id = id;
    this.year = year;
    this.category = category;
    this.laureates = laureates;
  }
}

export default NobelPrizeModel;
