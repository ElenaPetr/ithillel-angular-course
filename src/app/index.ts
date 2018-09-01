// import { find } from 'lodash';
// import { IUser2 } from './interfaces/user';

// // let abc: string = 'hello';
// // // abc = 1;

// // let count: number = 1;

// // // count = '1';

// // let isActive: boolean = true;
// // isActive = false;


// // let amount: number[] = [1, 2, 3];

// let amount1: string[] = ['1', 'abc', 'acc'];
// let list: number[] = [1, 2, 3];


// let x: [string, ...(number | string)[]] = ['1', 2, 2, '2'];

// // let n: string | number | boolean = '1';
// // n = 2;

// // let y: (number | string)[] = [];


// // enum Color { Red, Green, Blue }
// // let c: Color = Color.Blue;

// // console.log(c);


// // enum Size {
// //   X = '20',
// //   S = '23',
// //   XS = '25'
// // }

// // console.log(Size.S);

// // let userType: 'admin' | 'user';

// // // tslint:disable-next-line:no-any
// // let test: any;


// // function warnUser(): void {
// //   // tslint:disable-next-line:no-console
// //   console.log('This is my warning message');
// // }

// // function sum(a: number, b: number, ...ya: number[]): number {
// //   // tslint:disable-next-line:no-console
// //   console.log('This is my warning message');
// //   const restSum: number = ya.reduce((acc: number, next: number) => acc + next, 0);
// //   return Number(a) + b + restSum;
// // }

// // sum(1, 2);

// // // sum(1, '2');
// // sum(1, 2, 3);

// // console.log(sum(1, 2, 3, 4));


// // // Math.random
// // // HTMLDivElement

// // // const button: HTMLButtonElement | null = window.document.querySelector('.my-button');

// // // button.addEventListener('click', () => {});

// // // let v: undefined = undefined;
// // // let mm1234: null = null;

// interface ICarProperty {
//   readonly maxSpead: number;
//   engine: number;
//   color: string;
// }

// interface ICar extends ICarProperty {
//   start(): void;
//   stop(): void;
//   setSpead(spead: number): number;
// }

// class Car implements ICar {
//   private _speed: number = 0;

//   public constructor(
//     public maxSpead: number,
//     public engine: number,
//     public color: string,
//   ) {
//   }


//   public start(): void {
//     console.log('start');
//   }

//   public stop(): void {
//     console.log('stop');
//   }

//   public setSpead(speed: number): number {
//     if (speed < 0 || this.maxSpead < speed) {
//       // tslint:disable-next-line:no-console
//       console.log('max speed limit');
//       return 0;
//     }
//     this._speed = speed;
//     return speed;
//   }
// }

// const car1: ICar  = new Car(120, 1.8, 'red');


// car1.start();
// console.log(car1.setSpead(10));


// const sum: (a: number, b: number) => number = (a: number, b: number) => a + b;

// // function identity<Y>(arg: Y[]): Y[] {
// //   return arg;
// // }


// // const num: number[] = identity([1]);
// // const str2: string[] = identity('2');

// type CustomData<T> = {
//   isLoading: boolean,
//   isLoaded: boolean,
//   data: T[]
// };

// type Account = {
//   title: string
// };

// const users: CustomData<IUser2> = {
//   isLoading: false,
//   isLoaded: false,
//   data: []
// };

// const accounts: CustomData<Account> = {
//   isLoading: false,
//   isLoaded: false,
//   data: []
// };


// // class IUser3 {
// //   public constructor(public user: string, public active: boolean, public age?: number) {
// //   }
// // }

// // const users2: IUser[] = [
// //   { 'user': 'barney', 'active': false },
// //   { 'user': 'fred', 'active': false },
// //   { 'user': 'pebbles', 'active': true }
// // ];
// // console.log(users2);


// // function findUser() {
//   // const user: IUser | undefined = find(users, (item: IUser) => item.user === 'barney');

// //   if (!user) {
// //     console.log('cant fin user');
// //     return;
// //   }

// //   console.log(user.active);
// // }

// // const a: number = 1;
// // a = 2
// // const testUser: IUser = { 'user': 'barney', 'active': false };
// // testUser.active = true;
// // testUser.user = 'string';
