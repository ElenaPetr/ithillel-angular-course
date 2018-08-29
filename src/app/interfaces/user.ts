interface IParametrs {
  color?: string;
}

export interface IUser2 extends IParametrs {
  user: string;
  active: boolean;
  age?: number;
}