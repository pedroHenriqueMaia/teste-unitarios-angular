import { IInfo } from "../info/IInfo";
import { IPersonagem } from "../result/IPersonagem";

export interface IPersonagemResponse {
  info: IInfo;
  results: IPersonagem[];
}