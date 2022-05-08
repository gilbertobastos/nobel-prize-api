import LaureateModel from '../models/Laureate.model';

/**
 * Interface for the repositories of Laureate.
 */
interface ILaureateRepository {
  /**
   * Return the laureate by id.
   * @param {string} id The id.
   */
  getLaureateById(id:string): typeof LaureateModel;

  /**
   * Return the laureate by the first name.
   * @param {string} firstName The first name.
   */
  getLaureatesByFirstName(firstName:string): Array<typeof LaureateModel>;

  /**
   * Return the laureate by the surname.
   * @param {string} surname The surname.
   */
  getLaureatesBySurname(surname:string): Array<typeof LaureateModel>;
}

export default ILaureateRepository;
