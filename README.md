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
