function solution(numbers) {
  numbers = numbers.sort();
  var arr = [];
  var res = 0;

  for (var i = 0; i < 10; i++) {
    arr.push(i);
  }

  var fil = arr.filter((n) => !numbers.includes(n));

  for (var i = 0; i < fil.length; i++) {
    res += Number(fil[i]);
  }

  return res;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
