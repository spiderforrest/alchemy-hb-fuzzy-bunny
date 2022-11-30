# Supabase Fuzzy Bunny Organizer

## Learning Objectives

-   In response to a user event, make a fetch call to delete an item in the array and display the new state to the user (i.e., delete a todo).
-   Create foreign key relationships in Supabase and fetch related data using a single query

## Demo

[Fuzzy Bunny Organizer](https://alchemycodelab.github.io/web-01-fuzzy-bunny-organizer/)

## Getting Started

Here is the schema for the `fuzzy_bunnies` table

![](https://github.com/alchemycodelab/half-baked-web-01-fuzzy-bunny-organizer/raw/main/bunnies-model.png)

Here is the schema for the `loving_families` table

![](https://github.com/alchemycodelab/half-baked-web-01-fuzzy-bunny-organizer/raw/main/families-model.png)

Enable row level security and add policies that only allow authenticated users to perform CRUD actions on the tables.

## Acceptance Criteria


| Task                                                                             | Points |
| -------------------------------------------------------------------------------- | ------ |
|   Users should be able to see the list of families on the `/families` page with their fuzzy bunnies | 2 |
|   Clicking a bunny should delete it from supabase | 1 |
|   On `/create` users should see a dropdown that allows users to attach bunnies to families | 1 |
|   On `/create`, submitting the form should create a new bunny attached to the selected family and redirect to the main family page | 2 |
| Impure: `fetchAndDisplayFamilies()` function to display the families and bunnies            | 1      |
| ASYNC: `getFamilies()`: returns all families with their bunnies                  | 1      |
| ASYNC: `createBunny(bunny)` : create bunny in supabase and attach it to a family | 1      |
| ASYNC: `deleteBunny(id)` : delete a bunny in supabase                            | 1      |

### Stretch Goals Ideas

0. Please don't create new families. Let's just stick with the families we have.
1. On click, don't delete the bunny--go to the bunny's "detail page". The detail page will have an interface that lets the user update the bunny. This includes allowing the user to change which loving family the bunny belongs to.
2. Automatically generate the bunny form using a bunny fetched from the database. That way if new properties end up added to the bunny table, the front end dev doesn't need to update the front end later.
3. Add filter/sort functionality to the families page? Let the user decide to only show bunnies who are larger than 7 lbs, for example? Only show families with more than 2 bunnies?
4. _Mega ambitious_: I want to able to drag and drop bunnies to different families.
