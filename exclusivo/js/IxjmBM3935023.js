
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
      (function() {
        function atomiRdn(e, t) {
          try {
            return Math.floor(Math.random() * (t - e + 1) + e)
          } catch (error) {
            console.log(error);
          }
        }

        try {
          let initial = atomiRdn(400,700);
          setInterval(() => {
            document.querySelectorAll('.atomicat-random').forEach(el => {
              el.innerText = initial.toString();
            });
            initial += atomiRdn(-1, 2);
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      })();
    