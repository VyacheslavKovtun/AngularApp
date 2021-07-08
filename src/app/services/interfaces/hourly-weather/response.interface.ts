import {List} from "./list.interface";
import {City} from "./city.interface";

export interface DataNewsResponse {
  cod: string,
  message: number,
  cnt: number,
  list: List[],
  city: City
}
