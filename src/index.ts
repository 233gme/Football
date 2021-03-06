import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('db.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} times!`);
