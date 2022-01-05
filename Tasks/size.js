// Convert number to file size in bytes, kb, mb, and gb

const getRoundSize=size=>{
    if (size < 0 || typeof size != 'number') return '0';
    else {
      const exp = Math.floor(Math.log(size)/Math.log(1000));
      switch(exp){
        case 0: return (size+' b');
        case 1: return (Math.round(size / 1000) + ' kb');
        case 2: return (Math.round(size / 1000000) + ' mb');
        case 3: return (Math.round(size / 1000000000) + ' gb');
        default: return (Math.round(size / 1000000000000) + ' tb');
    }
  }
}
  
const result = getRoundSize(123456)
console.log(result)
