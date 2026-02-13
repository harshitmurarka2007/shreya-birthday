export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export interface Letter {
  id: string;
  title: string;
  content: string;
  from: string;
}

export interface GeneratedWish {
  text: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
