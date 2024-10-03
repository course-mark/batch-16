console.log("Start of Callback Hell");

// Level 1
setTimeout(() => {
  console.log("Level 1: Fetching user data...");

  // Level 2
  setTimeout(() => {
    console.log("Level 2: Fetching user's posts...");

    // Level 3
    setTimeout(() => {
      console.log("Level 3: Fetching comments on user's posts...");

      // Level 4
      setTimeout(() => {
        console.log("Level 4: Fetching likes on comments...");

        // Level 5
        setTimeout(() => {
          console.log("Level 5: Fetching reactions on likes...");

          // Level 6
          setTimeout(() => {
            console.log("Level 6: Fetching shares on posts...");

            // Level 7
            setTimeout(() => {
              console.log("Level 7: Fetching user's followers...");

              // Level 8
              setTimeout(() => {
                console.log("Level 8: Fetching user's messages...");

                // Level 9
                setTimeout(() => {
                  console.log("Level 9: Fetching message attachments...");

                  // Level 10
                  setTimeout(() => {
                    console.log("Level 10: Fetching message reactions...");
                    console.log("End of Callback Hell");
                  }, 1000);

                }, 1000);

              }, 1000);

            }, 1000);

          }, 1000);

        }, 1000);

      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
