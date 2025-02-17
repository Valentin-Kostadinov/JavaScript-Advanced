solve = (worker) => {
    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

let worker = solve(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )