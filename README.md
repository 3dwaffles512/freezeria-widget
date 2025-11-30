# Freezeria Scoops Variable 🍨

This project is a small interactive widget built with the [Hello World CS widget template].  
It’s designed as a middle school–friendly introduction to **variables** using an ice cream shop theme.

## Overview

In this widget, students play the role of a worker at a “Freezeria” ice cream shop.  
The widget tracks the number of scoops in a sundae using a variable called `scoops`.

Students can:

- **Add Scoop +1** – increases `scoops`
- **Remove Scoop −1** – decreases `scoops` (but not below 0)
- **Serve Order** – celebrates, then resets `scoops` to the starting value

The current value of `scoops` is shown both as a **number** and as **ice cream emoji scoops** in a cup.

## Learning Goal

Help 6–8th grade students understand that:

- A **variable** is a name that stores a value.
- That value can **change over time** based on actions (button clicks).
- Code like:

  ```js
  scoops = scoops + 1;
  scoops = scoops - 1;
  scoops = 2;
