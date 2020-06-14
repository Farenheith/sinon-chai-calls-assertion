import colors = require('colors/safe');

export const right = colors.green as (x: any) => string;
export const wrong = colors.red as (x: any) => string;
export const info = colors.white as (x: any) => string;
export const ids = colors.yellow as (x: any) => string;
export const matchers = colors.blue as (x: any) => string;
export const lack = colors.magenta as (x: any) => string;
