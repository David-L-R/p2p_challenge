![rick and morty hero](https://user-images.githubusercontent.com/31222514/191508663-af4f0fea-709c-4b0b-99f7-4e7fe3ae5b85.jpg)

# The Rick & Morty Challenge

To complete this challenge you will have to fix all known bugs (and maybe unknown bugs as well!) and add different features.

Later, you will be reviewing each other's code and thus, you should write all code in a new bracnh.

## GIT

Start by forking the repository:
<img width="1920" alt="fork the repo" src="https://user-images.githubusercontent.com/31222514/191513308-049b4ef7-cde8-42d4-b53c-f9a6ae67ef26.png">

Then clone it:

<img width="1918" alt="clone" src="https://user-images.githubusercontent.com/31222514/191513317-103cebe5-3773-4503-be00-9ef3fab9b5ef.png">

```bash
$ git clone <link_to_repo>
```

In order to create a new branch you can code in, follow the instructions:

```base
# Create a new bracnh
$ git checkout -b solution
```

Every time you complete a bug or create a feature:

```bash
# stage files
$ git add .

# save changes
$ git commit -m"<which bug/feature you solved>"

# update GitHub for the first time
$ git push -u origin solution

# any next update
$ git push
```

## Design

<img width="1917" alt="design" src="https://user-images.githubusercontent.com/31222514/191509476-1473e462-ba15-47f4-9701-ad8abb7e14b9.png">

- Green: The navbar have dropdowns and a search bar that will filter the list of characters
- Blue: Each character has a "choose" button. Pressing on it will remove the character from the main list and move it to the "chosen" list
- Red: Each chosen character has a "remove" button. Pressing on it will remove it from the "chosen" list and put it back into the main list

## Bugs

### Bug 1 - Cards are not showing up

No card is shown!

There is supposed to be a function that shows the cards already, but for some reason it does not work.

### Bug 2 - Filters have too many options

When opening the dropdown of each filter, there are too many options.

For example, in the Gender dropdown, instead of:

- male
- female
- unknown

We have many male... many females...

### Bug 3 - Filters don't work

Choosing one of the options does not filter the cards..
When choosing something for each input, all characters are shown.

### Bug 4 - Choosing does not remove from list

Choosing a character should remove it from list

### Bug 5 - Remove button

Pressing on remove button, does not remove the character from the "chosen" list.

## Refactoring

### Refactor - createCards() function

In this function we are filtering over and over again.

Refactor the function in a way that will allow you to filter according to all inputs without filtering more than once.

## Features

### Feature 1 - Limit the number of characters in the team

When choosing characters, prevent the user from choosing more than 5 characters.
Make sure to give proper feedback to the user about it.

### Feature 2 - Limit the amount of point in a team

When choosing characters for a team, prevent the user from choosing characters that together, their points are higher than 10000.

So for example, we can choose for a team:

- Rick (8500 points)
- Morty (250 points)
- Summer (1250 points)

Because together they have 10000.

But you cannot choose:

- Rick (8500 points)
- Beth (2750 points)

Because together they have more than 10000 points

### Feature 3 - Create missions

Create 3 different missions, which each require minimum amount of points. Once the user thinks they are ready, they can go on a mission (press on a button for a mission).

If the team's points are not enough, the user should be receive a feedback that the mission was failed.

If the points are high enough, they should receive a feedback that the mission was successful.

### More Features

This is up to you. There are so many things to do!
Feel free to add information to the data, if you want to create more complicated stuff.

For example:

Before starting a mission, you choose the position of each character.
There can be 4 positions:

- driver
- gun-man
- shield
- other

We divide by 2 the number of points of the driver, and triple the number of points of the gun-man. Just to make it more interesting...
