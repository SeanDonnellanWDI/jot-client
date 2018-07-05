[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Sean Donnellan Jot Project - Client
API - https://jot-api.herokuapp.com/
Client - https://seandonnellanwdi.github.io/jot-client/

## The Assignment
Create a self-guided SPA project that requires a front end client and a back end api which communicate with each other. Must perform CRUD actions from the front end onto the back end.

## My Project Idea: Jot
Jot (or napkins, or morsel)
 - jot down your ideas
 - come back to them
 - categorize them
 - thought albums
 - future expansion:
   - Share them in a self contained social media platform.
   - Optional plagarism checker (for written work, music, video, visual, basically anything that can be checked for byte by byte matches)
   - individual idea archiving (update an idea, store the idea hiistory along with any comments at the time (like a commit))

I came up with this idea because I'm constantly reaching for my phone to write down lyrics in my notes app, but I have no way to easily organize the verses into one cohesive song - I have to copy and paste and rearrange line by line - what if the line or verse of lines were their own identity, could be categorized, and easily rearrangeable. Like a stack of napkins which you reach for to jot down ideas, they are in no particular order until you assign them an order. Anyone with several ideas everyday could use this. It can be private, it can be public, its your ideas, work it.

Highly non-assumptive - any idea, any reason, any order. It could be a to do list, a list of features, a way to keep track of collectables, a million dollar idea, a reminder, a song, a sketch (future expansion), a planner, and much much more. Are you thinking about it? Just jot it.

Like Twitter with version control, with public/private/unpublished capabilities, without a character limit.

"Jot" because of jotting down ideas
"Napkin" because of jotting down ideas on a napkin. double fold meaning: picasso's napkin, great idea

## Technologies Used
- Expo Marker and White Board
- Pencil and Paper
- Git
- Github
- Grunt
- HTML
- Bootstrap
- Handlebars
- JavaScript
- jQuery
- AJAX
- JSON
- Issue Cue

## Prepwork
- I completed the project practice (https://git.generalassemb.ly/SeanDonnellanWDI/full-stack-project-practice/blob/response/practice.md)

### Wireframes
- https://imgur.com/gallery/S2GJtFD

### User Stories
- As a songwriter, I want to organize my words, lines, verses, songs so that I can easily work on multiple ideas all at once.
- As a developer, I want thought albums so that I can plan features and connect .
- As an artist, I want jot my ideas down in my own personal artistic jargon so that I can write my good ideas down quickly and come back to them later.
- As a student, I want organize priority to my homework and evening tasks so that I can create peace of mind formyself by organizing my thoughts.
- As a busy parent, I want write down my to do list and grocery list so that I can get all my ideas down and then worry about organization and priority.

## Development Process
- Scaffold Jot table
- Create user authentication
- Create Jot CRUD functionality
- Build basic front end template
- Connect front end to back end
- Test thuroughly
- Deploy

## Obstacles
For this project I ran into several issues with Rails and Handlebars. Considering these are two new technologies to me it was expected that I would run into trouble, so I opened issue cues often:
https://git.generalassemb.ly/ga-wdi-boston/full-stack-project/issues?q=is%3Aissue+author%3ASeanDonnellanWDI+is%3Aclosed
Additionally, a major obstacle was wrapping my mind around my own concept. I revisited my ERD frequently and would constantly rediagram my plan. I believe this actually hindered my process because I was getting too far ahead of myself. Too often I would catch myself thinking of ideas which were unecessary to MVP, however I would diagram out my ERD just incase it would affect my Jots table. Occasionally it did, which then sidetracked my forward progress to MVP. Had I waited to redo my Jots table toward the end of my MVP development process, or thought harder about my idea while planning it, I would have saved myself a lot of time.

## Accomplishments
- Distinguishing the difference between opening the jot editor and actually updating the jot, two seperate events which interact with the handlebars template.
- Integrating functional Edit and delete buttons within Handlebars
- Removing a column on my own without needing to open an issue ticket (I actually read the error messages woohoo!)
- Feeling comfortable with the deployment process for the API and Client
- Getting my project to a point of completion by Tuesday so I could properly test it, and receive feedback from my peers as well, within a reasonable amount of time before my presentation on Thursday

## Unsolved Problems, Next Steps, and Nice-to-Have's
- Make this README better
- Integrate a drag and drop jQuery library
- Remove the joke user-facing messages. Make them actually informative and useful messages.
- Build, test, and connect the thoughts join table
- Actually style the website correctly
- Acquire 1 billion users
- Take down Twitter
