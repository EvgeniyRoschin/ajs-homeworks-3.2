// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

function sortHeroes(heroes) {
  heroes.sort((prev, next) => next.health - prev.health);

  return heroes;
}

export default sortHeroes;
