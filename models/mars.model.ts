export interface IMars {
  '675': The675
  '676': The675
  '677': The675
  '678': The678
  '679': The678
  '680': The678
  '681': The678
  sol_keys: string[]
}

export interface The675 {
  AT: At
  First_UTC: Date
  HWS: At
  Last_UTC: Date
  Month_ordinal: number
  Northern_season: string
  PRE: At
  Season: string
  Southern_season: string
  WD: The675_Wd
}

export interface At {
  av: number
  ct: number
  mn: number
  mx: number
}

export interface The675_Wd {
  '0': The0
  '1': The0
  '9'?: The0
  '10': The0
  '11': The0
  '12': The0
  '13': The0
  '14': The0
  '15': The0
  most_common: The0
  '2'?: The0
  '5'?: The0
}

export interface The0 {
  compass_degrees: number
  compass_point: string
  compass_right: number
  compass_up: number
  ct: number
}

export interface The678 {
  AT: At
  First_UTC: Date
  HWS: At
  Last_UTC: Date
  Month_ordinal: number
  Northern_season: string
  PRE: At
  Season: string
  Southern_season: string
  WD: The678_Wd
}

export interface The678_Wd {
  '0': The0
  '1': The0
  '2'?: The0
  '3'?: The0
  '5': The0
  '6': The0
  '7': The0
  '8': The0
  '9': The0
  '10': The0
  '11': The0
  '12': The0
  '13': The0
  '14': The0
  '15': The0
  most_common: The0
}
