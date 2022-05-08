import NobelPrizeModel from '../models/NobelPrize.model';

/**
 * Interface for the repositories of Nobel Prize.
 */
interface INobelPrizeRepository {
  /**
   * Return the nobel prize by id.
   * @param {string} id The id.
   */
  getNobelPrizeById(id:string): NobelPrizeModel;

  /**
   * Return all nobel prizes by year.
   * @param {string} year The year.
   */
  getAllNobelPrizesByYear(year:string): Array<NobelPrizeModel>;

  /**
   * Return all nobel prizes of a laureate (only four have more than one
   * nobel prize).
   * @param {string} laureateId The laureate id.
   */
  getAllNobelPrizesByLaureate(laureateId:string):Array<NobelPrizeModel>;

  /**
   * Return all nobel prizes by category.
   * @param {string} category The category.
   */
  getAllNobelPrizesByCategory(category:string):Array<NobelPrizeModel>;
}

export default INobelPrizeRepository;
