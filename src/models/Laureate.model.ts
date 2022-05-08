/**
 * Model representing a laureate.
 */
class LaureateModel {
  private _id:string;
  /**
   * Get the id.
   */
  get id():string {
    return this._id;
  }

  private _firstName:string;
  /**
   * Set the first name.
   * @param {string} firstName The first name.
   */
  set firstName(firstName:string) {
    this._firstName = firstName;
  }
  /**
   * Get the first name.
   */
  get firstName(): string {
    return this._firstName;
  }

  private _surname:string;
  /**
   * Set the surname.
   * @param {string} surname The surname.
   */
  set surname(surname:string) {
    this._surname = surname;
  }
  /**
   * Get the surname.
   */
  get surname():string {
    return this._surname;
  }

  /**
   *
   * @param {string} id The id.
   * @param {string} firstName The first name.
   * @param {string} surname The surname.
   */
  constructor(id:string, firstName:string, surname:string) {
    this._id = id;
    this.firstName = firstName;
    this.surname = surname;
  }
}

export default LaureateModel;
