import {Schema, model} from 'mongoose';
import ILaureate from './Laureate.model';

/**
 * Interface representing a nobel prize that has won.
 */
interface INobelPrize {
  id:string;
  year:number;
  category:string;
  laureates:Array<typeof ILaureate>;
}

const nobelPrizeSchema = new Schema<INobelPrize>({
  id: {type: String, require: true},
  year: {type: Number, require: true, validate: {
    validator: Number.isInteger,
    message: `'{VALUE}' is not a valid year.`,
  }},
});

const NobelPrizeModel = model<INobelPrize>('NobelPrize', nobelPrizeSchema);
export default NobelPrizeModel;
