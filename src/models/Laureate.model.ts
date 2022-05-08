import {Schema, model} from 'mongoose';

/**
 * Interface representing a laureate.
 */
interface ILaureate {
  id:string;
  firstName:string;
  surname:string;
}

const laureateSchema = new Schema<ILaureate>({
  id: {type: String, required: true},
  firstName: {type: String, required: true},
  surname: {type: String, required: true},
});

const LaureateModel = model<ILaureate>('Laureate', laureateSchema);
export default LaureateModel;
