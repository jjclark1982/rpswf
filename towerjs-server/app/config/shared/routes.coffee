Tower.Route.draw ->
  @resources 'users'
  @resources 'games'
  @resources 'moves'
  # @match '(/*path)', to: 'application#index'
  @match '/', to: 'application#welcome'
