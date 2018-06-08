for(var i = 1; i <= 100; i++) {
  if( i % 3 === 0 && i % 5 === 0 ){
    console.log('15의 배수 ' + i + ' "fizzbuzz"');
  } else if ( i % 3 === 0) {
    console.log('3의 배수 ' + i + ' "fizz"');
  } else if ( i % 5 === 0) {
    console.log('5의 배수 ' + i + ' "buzz"');
  }
}
