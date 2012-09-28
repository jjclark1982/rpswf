li class: "user", ->
  header class: "header", ->
    h3 @user.toLabel()
  dl class: "content", ->
    dt "Email:"
    dd @user.get("email")
    dt "Name:"
    dd @user.get("name")
  footer class: "footer", ->
    menu ->
      menuItem "Edit", urlFor(@user, action: "edit")
