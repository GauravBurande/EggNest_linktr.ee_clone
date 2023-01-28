I built this linktr.ee clone using
*NextJS
*ContextAPI
*Firebase
*TailwindCSS.

You can visit the webapp here: [eggnest.netlify.app](https://eggnest.netlify.app/)

I just saw a video from youtube making linktree ui clone, so I decided to build the linktree clone with all priority-zero features.
This is one of my fav project till now.I'm still fixing some bugs.

I changed the data structure of user's socials links and the other links so many times, because first I was just building the frontend and when I started working on backend I did a little more thinking and changed the data structure of socials links from an array of objects to just an object and kept the links data structure as an array of objects.

I decided that there will be three different sign In methods, Google, Twitter and Github, But I couldn't log in to the twitter developer portal because there were bugs in the twitter app and I couldn't get my number verfied and I needed my account with a verified number to login to twitter developer portal. So, I just implemented only the Google and GitHub sign In methods.

I wasn't sure what to name this webapp so I just named it eggnest, I don't know what I was thinking about.

Using firebase for backend and playing with data structure of links and configuring authentication, designing the front-end was so fun.
I enjoyed building this webapp the most.

I thought if there's a new user let's create a userData object and fill it with email the profile image link and blank socials and links, and send that data to the firestore. Later I was having an bug because it takes time to add a document to the firestore collection and I was fetcing the same document after routing to the home page after authentication of the new user, but I fixed it.

I wasn't sure what to use for state management, but this was not a big app, so I just decided to go with the contextAPI instead.

I am still learning TypeScript, so sorry for a hell lot of "any".