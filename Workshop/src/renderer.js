const gameStart = document.querySelector(".game-start");
      const gameArea = document.querySelector(".game-area");
      const gameOver = document.querySelector(".game-over");
      const gameScore = document.querySelector(".game-score");
      const gamePoints = gameScore.querySelector(".points");

      gameStart.addEventListener("click", onGameStart);
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("keyup", onKeyUp);

        let state = initialState({
          areaWidth: gameArea.offsetWidth,
          attackWidth: 40,
          bugWidth: 60,
          bugHeight: 60,
        });

      function onGameStart() {
        gameStart.classList.add("hide");

        const wizard = document.createElement("div");
        wizard.classList.add("wizard");
        wizard.style.top = state.player.y + "px";
        wizard.style.left = state.player.x + "px";

        gameArea.appendChild(wizard); // vzemame gamearea koqto e chast ot dom durvoto i kum neq dobavqme novosuzdadeniq element

        state.player.width = wizard.offsetWidth;
        state.player.height = wizard.offsetHeight;
        
        state.player.w = wizard.offsetWidth
        state.player.h = wizard.offsetHeight

        window.requestAnimationFrame(frame(0));
      }


      const frame = t1 => t2 => { // t1 e poslednoto vreme koeto e bil izchislen nashiq frame t2 e nastoqshteto vreme
        if (t2 - t1 > game.frameLength) {
            state = next(state);
            draw(t2, state);
            state.scene.isActiveGame && window.requestAnimationFrame(frame(t2)); // znachi && e ako tova e true scene.isActiveGame togava izpulni window.requestAnimationFrame
        } else {
            window.requestAnimationFrame(frame(t1));
        }
      }

      function draw(timestamp, state) {
        // tuk imame cikul koito se vurti prez cqloto vreme koeto igrata e pusnata tova vaji za absoliutno vsichki igri
        const wizard = document.querySelector(".wizard");

        state.scene.score++; // na vseki frame shte dava po tochka

        // Add bugs
        if (
          timestamp - state.scene.lastBugSpawn >
          game.bugSpawnInterval + 5000 * Math.random()
        ) {
          let bug = document.createElement("div");

          bug.classList.add("bug");
          bug.x = gameArea.offsetWidth - 60;
          bug.style.left = bug.x + "px";
          bug.style.top = gameArea.offsetHeight - 60 * Math.random() + "px";

          gameArea.appendChild(bug);
          state.scene.lastBugSpawn = timestamp;

          state.bugs.push({
            x: gameArea.offsetWidth - 60,
            y: gameArea.offsetHeight - 60 * Math.random(),
            w: bug.offsetWidth,
            h: bug.offsetHeight,
            el: bug
          })
        }

        // Add clouds
        if (
          timestamp - state.scene.lastCloudSpawn >
          game.CloudSpawnInterval + 500 * Math.random()
        ) {
          let cloud = document.createElement("div");

          cloud.classList.add("cloud");
          cloud.x = gameArea.offsetWidth - 200;
          cloud.style.left = cloud.x + "px";
          cloud.style.top = gameArea.offsetHeight * Math.random() + "px";

          gameArea.appendChild(cloud);
          state.scene.lastCloudSpawn = timestamp;
        }

        // Modify bug position
        let bugs = document.querySelectorAll(".bug");
        // bugs.forEach((bug) => {
        //   bug.x -= game.speed * 2;
        //   bug.style.left = bug.x + "px";

        //   if (bug.x + bug.offsetWidth <= 0) {
        //     bug.parentElement.removeChild(bug);
        //   }
        // });
        
        state.bugs.forEach(b => b.el.style.left = b.x + 'px');

        // Modify cloud position
        let clouds = document.querySelectorAll(".cloud");
        clouds.forEach((cloud) => {
          cloud.x -= game.speed;
          cloud.style.left = cloud.x + "px";

          if (cloud.x + cloud.offsetWidth <= 0) {
            cloud.parentElement.removeChild(cloud);
          }
        });

        // Modify fireball position
        let fireBalls = document.querySelectorAll(".fire-ball");

        state.attacks.forEach(a => a.el.style.left = a.x + 'px');

        // Apply gravitation
        let isInAir = state.player.y + state.player.height < gameArea.offsetHeight;
        if (isInAir) {
          state.player.y += game.speed;
        }

        // tuka slagame na player-a realno kato natiskame strelkite da se murda plus da ima ogranichenie da ne izliza ot ekrana
        // Register user input
        if (keys.ArrowUp && state.player.y > 0) {
          state.player.y -= game.speed * game.movingMultiplier;
        }

        if (keys.ArrowDown && isInAir) {
          state.player.y += game.speed * game.movingMultiplier;
        }

        if (keys.ArrowLeft && state.player.x > 0) {
          state.player.x -= game.speed * game.movingMultiplier;
        }

        if (keys.ArrowRight && state.player.x + state.player.width < gameArea.offsetWidth) {
          state.player.x += game.speed * game.movingMultiplier;
        }

        if (
          keys.Space &&
          timestamp - state.player.lastTimeFiredFireBall > game.fireInterval
        ) {
          wizard.classList.add("wizard-fire");
          // Add Fireball
          addFireBall(state);
          state.player.lastTimeFiredFireBall = timestamp;
        } else {
          wizard.classList.remove("wizard-fire");
        }

        // Collision detection
        bugs.forEach((bug) => {
          if (isCollision(wizard, bug)) {
            gameOverAction();
          }

          // Tova tuk realno e za kato ucelish buga da izchezva da dava tochki i samiq fireball da izchezne shtoto e ucelil targeta
          fireBalls.forEach((fireBall) => {
            if (isCollision(fireBall, bug)) {
              state.scene.score += game.bugKillBonus;
              bug.parentElement.removeChild(bug);
              // fireBall.parentElement.removeChild(fireBall);
            }
          });
        });

        // Apply movement
        wizard.style.top = state.player.y + "px";
        wizard.style.left = state.player.x + "px";

        // Apply score
        gamePoints.textContent = state.scene.score;

        if (state.scene.isActiveGame) {
            return;
        }
        
      }

      