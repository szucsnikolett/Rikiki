# JavaScript freestyle game - Oh Hell (Rikiki)

This project is our very first JavaScript application in Codecool. It took a 4(-1) days long sprint to implement after
one week of studying JavaScript.

The application is not:
- responsive
- unbreakable
- containing any kind of validation or cheat prevention

and we are well aware of the importance of the aforementioned features, however the goals of the sprint were
exercising basic JavaScript syntax, deliver a usable product to deadline, and showing off our ability to learn new
technologies in a very short period of time.

<hr>

#### The game

Oh Hell is a 4-man card game. The game flow consists of recurring bet and card playing rounds.
The object is to take exactly the number of tricks bid. In the end the player with the highest score wins.

For more detailed explanation you can read the rules [here](https://en.wikipedia.org/wiki/Oh_Hell).

We assumed that all four players use the same device and only one player can see the screen (the others turn their
backs). If you can see only one card in your hands after the first round, click anywhere to open the card fan.

<hr>

#### Requirements

- Python 3
- Virtual environment
- Any browser with JavaScript compiler

<hr>

#### Technologies

- Python web server (Flask)
- HTML
- CSS
- JavaScript

<hr>

#### How to run

- Install python 3.7 virtual environment
- Activate the environment and install requirements.txt from the root folder
- Run Flask server
- Navigate to the given localhost url on your browser

<hr>

#### How to play

You can read the rules by clicking on the "Game rules" button. Fill in the blanks, then
click on "We are ready!"! Player 1 starts the first round.

![main page]("https://github.com/szucsnikolett/Rikiki/blob/master/images/main.png")

Make your bet and click on "Ok"!

![bet round](https://github.com/szucsnikolett/Rikiki/blob/master/images/bet.png)

Play a card by clicking on it! Based on the rules you can't play any card and clicking on the forbidden
cards won't do anything.

![play card](https://github.com/szucsnikolett/Rikiki/blob/master/images/play-card.png)

Refreshing the page will start a new game with the current setup.

<hr>

#### Contributors

- [Ágnes Kadlót](https://github.com/kagnest)
- [Sipos Zoltán](https://github.com/siposzoltan03)
- [Szűcs Nikolett](https://github.com/szucsnikolett)

