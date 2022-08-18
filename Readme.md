# Shitstorm prototype

## Core tech

Ionic + Vue 3 with TypeScript.

## WIP

Some obvious next things to fix:

* simulated SMS scaling is off
* page heights are off – need to sort vertical scaling especially on mobile
* styling! It should be super quick to e.g. make it green now

## Run locally

ionic serve

## Page notes

Forecast page is reachable in 2 ways:

* after registration if a bad weather event is coming
* from SMS link otherwise

If you just registered it will include a line of copy (or "toast") saying you're signed up.

If you register when weather is OK you go to the standalone RegisteredConfirmationPage.
