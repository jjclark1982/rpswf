# Rock-Paper-Scissors With Friends

## Motivation

In order to compare different frameworks for building a game backend, we would like to specify a simple multiplayer online game with persistent history and nontrivial logic, then implement that in different frameworks. See [Cloak of Darkness](http://www.firthworks.com/roger/cloak/) for an example from a different field.

The server should provide a REST API, with support for

- logging in with some identity provider
- listing other players
- starting a game with a player
- playing a move in a game

## Specification
- The server should be runnable with [Heroku Foreman](https://toolbelt.heroku.com/) and generally conform to [The Twelve-Factor App](http://www.12factor.net/) philosophy
- The server should support encryption and possibly websockets or SPDY
- The client should be able to extract all the links it needs from the root page

### Login:
    POST /auth
        email: xxxxx@yyy.zzz
        password: ********
    POST /users/me
        facebook_token: XXXXX

### List players:
    GET /users?sort=last_played
    GET /users?sort=ranking
    GET /users/me/friends?sort=last_played

### List games:
    GET /games?filter=player:me
    GET /users/me/games (optional)

### Start a game:
    POST /games
        players: [alice, bob]
        moves: [{player: alice, move: rock}] (optional)
    GET /games/N
        players: [alice, bob]
        moves: [{player: alice, move: secret}]
- must validate that both players exist and are not the same person
- must validate that only legal moves were played
- must not send a client information that the user is not allowed to see (fog of war)

### Play a move on a game:
    POST /games/N/moves
        {player: bob, move: paper}
    PATCH /games/N (optional)
        moves: [..., {player: bob, move: paper}]
- must validate that the client is the player
- must validate that it was the player's turn and the move was legal
- should return the Game object with the most up-to-date results, i.e. who won
- should trigger notifications to interested parties

## Server Candidates

- Node + Tower.js (consider Iced or Fibers for coroutines)
- Ruby + Rails3 (consider Mongoid for db-independence)
- Python + Flask (consider gevent for coroutines)
- Node + Railway.js
- CouchApp (difficult to restrict data visibility)
- ServiceStack (difficult to host on generic platform)
