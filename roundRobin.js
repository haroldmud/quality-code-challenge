function roundRobin(jobs,slice,index){
  let result = 0
  while(jobs[index] > 0){
    for(let i = 0 ; i <= jobs.length; i++){
      if(jobs[i] >= 0){
      result += jobs[i] <= slice ? jobs[i] : slice
      jobs[i] = jobs[i]-slice 
      }
      if(jobs[index] <= 0) break;
    }
  }
  return result
}
