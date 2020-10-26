import { BaseModel } from './BaseModel';
import { CoordinationModel } from './CoordinationModel';

export class LocationModel extends BaseModel{
    state: string;
    country: string;
    coord: CoordinationModel;
}