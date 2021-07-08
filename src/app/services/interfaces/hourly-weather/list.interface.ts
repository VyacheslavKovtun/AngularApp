import {Rain} from "./rain.interface";
import {Main} from "./main.interface";
import {Sys} from "./sys.interface";
import {Weather} from "../weather.interface";
import {Wind} from "./wind.interface";
import {Clouds} from "../clouds.interface";

export interface List {
  dt: number,
  main: Main,
  weather: Weather[],
  clouds: Clouds,
  wind: Wind,
  visibility: number,
  pop: number,
  rain: Rain,
  sys: Sys,
  dt_txt: string
}
