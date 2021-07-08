import {Coord} from "../coord.interface";

export interface City {
  id: number,
  name: string,
  coord: Coord,
  country: string,
  timezone: number,
  sunrise: number,
  sunset: number
}
