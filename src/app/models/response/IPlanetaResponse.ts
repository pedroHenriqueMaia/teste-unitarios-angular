import { IInfo } from "../info/IInfo";
import { IPlaneta } from "../result/IPlaneta";

export interface IPlanetaResponse {
  info: IInfo;
  result: IPlaneta;
}