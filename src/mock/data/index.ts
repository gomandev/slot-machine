export interface PrizeInterface {
  oneBar: BarInterface;
  twoBar: BarInterface;
  threeBar: BarInterface;
  seven: BarInterface;
  cherry: BarInterface;
}

export interface LineInterface {
  name: string;
  state: string;
  position: string;
}

export interface SliderInterface {
  name: string;
}

export interface MarksInterface {
  value: number;
  label: string;
}

export interface BarInterface {
  position?: number;
  tripletLineWin?: number;
  pairAnyLine?: number;
  bottomLineWin?: number;
  topLineWin?: number;
  centerLineWin?: number;
  combinedSeven?: number;
}

export const prizes: PrizeInterface = {
  oneBar: {
    position: 0,
    tripletLineWin: 10,
    pairAnyLine: 5,
  },
  twoBar: {
    position: 121,
    tripletLineWin: 20,
  },
  threeBar: {
    position: 242,
    tripletLineWin: 50,
  },
  seven: {
    position: 363,
    tripletLineWin: 150,
  },
  cherry: {
    position: 484,
    topLineWin: 2000,
    centerLineWin: 1000,
    bottomLineWin: 4000,
    combinedSeven: 75,
  },
};

export const lines: Array<LineInterface> = [
  { name: 'Top Line', state: 'select1', position: 'Left' },
  { name: 'Center Line', state: 'select2', position: 'Center' },
  { name: 'Bottom Line', state: 'select3', position: 'Right' },
];

export const sliders: Array<SliderInterface> = [
  { name: 'slider1' },
  { name: 'slider2' },
  { name: 'slider3' },
];

export const marks: Array<MarksInterface> = [
  {
    value: 1,
    label: 'BAR',
  },
  {
    value: 2,
    label: '2BAR',
  },
  {
    value: 3,
    label: '3BAR',
  },
  {
    value: 4,
    label: '7',
  },
  {
    value: 5,
    label: 'CHERRY',
  },
];
