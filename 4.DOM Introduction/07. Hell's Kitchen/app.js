function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick() {
      const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
      const workersParagraph = document.querySelector('#workers p');
       const input = document.querySelector('#inputs textarea').value;
       let arr = JSON.parse(input);

       let restaurants = {};

       arr.forEach((line) => {
           const tokens = line.split(' - ');
           const name = tokens[0];
           const workersArr = tokens[1].split(', ');
           let workers = [];

           for (let worker of workersArr) {
               const workerTokens = worker.split(' ');
               const salary = Number(workerTokens[1]);
               workers.push({name: workerTokens[0], salary});
           }

           if (restaurants[name]) {
               workers = workers.concat(restaurants[name].workers);
           }

           workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

           let bestSalary = workers[0].salary;
           let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length; // obikalq vsichkite rabotnici i sumira salary i go delim na duljinata na masiva za da vzemem averageSalary

           restaurants[name] = {
               workers,
               averageSalary,
               bestSalary
           };
       });

       let bestRestaurantSalary = 0;
       let best = undefined;

       for (const name in restaurants) {
           if (restaurants[name].averageSalary > bestRestaurantSalary) {
               best = {
                   name,
                   workers: restaurants[name].workers,
                   bestSalary: restaurants[name].bestSalary,
                   averageSalary: restaurants[name].averageSalary
               };
               bestRestaurantSalary = restaurants[name].averageSalary;
           }
       }

       
       bestRestaurantParagraph.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

       
       let workersResult = [];

       best.workers.forEach(worker => {
           workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
       });

       workersParagraph.textContent = workersResult.join(' ');
   }
}