

 export function printNumberOfStatuses(array:string[]) {
  let passedCount = 0;
  let failedCount = 0;
    for(const status of array) {
   if(status === "passed") {
    passedCount++;
   } else {
    failedCount++;
   }

}
 console.log(`Number of passed statuses :${passedCount}`);
 console.log(`Number of Failed statuses :${failedCount}`);
}

const statuses: string[] = ["passed", "failed", "passed", "failed", "failed"];
printNumberOfStatuses(statuses)



function printNumberOfStrings(array:string[]) {
  const counts: Record<string, number> = {};

  for (const item of array) {

    counts[item]=(counts[item]|| 0) + 1;
  }
  console.log("String counts:", counts);
}

function printNumberOfStringsMap(array:string[]) {
  const counts: Map<string, number> = new Map();

  for (const item of array) {

    counts.set(item, (counts.get(item) || 0) + 1);
  }
  console.log("String counts:", counts);
}



function printNumberOfStringsArray(array:string[]) {
  const unique = [...new Set(array)];
  const results = unique.map((value) => ({
    value,
    count: array.filter((item) => item === value).length,
  }));

  console.log("String counts array:", results);
}

const stringCount: string[] = ["passed", "failed", "passed", "failed", "failed","test","Hello","test","Orange","Apple","Orange"];
printNumberOfStrings(stringCount);