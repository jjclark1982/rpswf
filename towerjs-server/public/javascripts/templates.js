
Tower.View.cache = {
  'games/edit': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'games/index': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}<table summary="Table for Games" role="grid" class="table">\
  <thead>\
    <tr scope="row">\
    </tr>\
  </thead>\
  <tbody>\
{{#each game in App.gamesController.all}}    <tr class="game" scope="row" role="row">\
      <td role="gridcell">\
        <a {{action showGame game href=true}}>Show</a>\
        <span>|</span>\
        <a {{action editGame game href=true}}>Edit</a>\
        <span>|</span>\
        <a {{action destroyGame game}}>Destroy</a>\
      </td>\
    </tr>\
{{/each}}  </tbody>\
  <tfoot>\
    <tr scope="row">\
      <td colspan="3" role="gridcell">\
        <a {{action newGame game href=true}}>New Game</a>\
      </td>\
    </tr>\
  </tfoot>\
</table>\
'),
  'games/new': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'games/show': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<dl class="content">\
</dl>\
{{/with}}'),
  'moves/edit': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>Action:</label>\
{{view Ember.TextField valueBinding="action"}}{{#with errors}}          <span class="help-inline error">{{action}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Game:</label>\
{{view Ember.TextField valueBinding="gameID"}}{{#with errors}}          <span class="help-inline error">{{gameID}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'moves/index': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}<table summary="Table for Moves" role="grid" class="table">\
  <thead>\
    <tr scope="row">\
      <th abbr="action" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>Action</span>\
        </a>\
      </th>\
      <th abbr="gameID" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>GameID</span>\
        </a>\
      </th>\
    </tr>\
  </thead>\
  <tbody>\
{{#each move in App.movesController.all}}    <tr class="move" scope="row" role="row">\
      <td role="gridcell">{{move.action}}</td>\
      <td role="gridcell">{{move.gameID}}</td>\
      <td role="gridcell">\
        <a {{action showMove move href=true}}>Show</a>\
        <span>|</span>\
        <a {{action editMove move href=true}}>Edit</a>\
        <span>|</span>\
        <a {{action destroyMove move}}>Destroy</a>\
      </td>\
    </tr>\
{{/each}}  </tbody>\
  <tfoot>\
    <tr scope="row">\
      <td colspan="5" role="gridcell">\
        <a {{action newMove move href=true}}>New Move</a>\
      </td>\
    </tr>\
  </tfoot>\
</table>\
'),
  'moves/new': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>Action:</label>\
{{view Ember.TextField valueBinding="action"}}{{#with errors}}          <span class="help-inline error">{{action}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Game:</label>\
{{view Ember.TextField valueBinding="gameID"}}{{#with errors}}          <span class="help-inline error">{{gameID}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'moves/show': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<dl class="content">\
  <dt>Action:</dt>\
  <dd>{{action}}</dd>\
  <dt>Game:</dt>\
  <dd>{{gameID}}</dd>\
</dl>\
{{/with}}'),
  'users/edit': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>Email:</label>\
{{view Ember.TextField valueBinding="email"}}{{#with errors}}          <span class="help-inline error">{{email}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Name:</label>\
{{view Ember.TextField valueBinding="name"}}{{#with errors}}          <span class="help-inline error">{{name}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'users/index': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}<table summary="Table for Users" role="grid" class="table">\
  <thead>\
    <tr scope="row">\
      <th abbr="email" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>Email</span>\
        </a>\
      </th>\
      <th abbr="name" role="columnheader" scope="col" class="sortable asc" aria-sort="asc" aria-selected="aria-selected">\
        <a href="?sort=+">\
          <span>Name</span>\
        </a>\
      </th>\
    </tr>\
  </thead>\
  <tbody>\
{{#each user in App.usersController.all}}    <tr class="user" scope="row" role="row">\
      <td role="gridcell">{{user.email}}</td>\
      <td role="gridcell">{{user.name}}</td>\
      <td role="gridcell">\
        <a {{action showUser user href=true}}>Show</a>\
        <span>|</span>\
        <a {{action editUser user href=true}}>Edit</a>\
        <span>|</span>\
        <a {{action destroyUser user}}>Destroy</a>\
      </td>\
    </tr>\
{{/each}}  </tbody>\
  <tfoot>\
    <tr scope="row">\
      <td colspan="5" role="gridcell">\
        <a {{action newUser user href=true}}>New User</a>\
      </td>\
    </tr>\
  </tfoot>\
</table>\
'),
  'users/new': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<form>\
  <fieldset>\
    <ul class="fields">\
      <li class="control-group">\
        <div class="controls">\
          <label>Email:</label>\
{{view Ember.TextField valueBinding="email"}}{{#with errors}}          <span class="help-inline error">{{email}}</span>\
{{/with}}        </div>\
      </li>\
      <li class="control-group">\
        <div class="controls">\
          <label>Name:</label>\
{{view Ember.TextField valueBinding="name"}}{{#with errors}}          <span class="help-inline error">{{name}}</span>\
{{/with}}        </div>\
      </li>\
      <li>\
        <a {{action submit target="resource"}}>Submit</a>\
      </li>\
    </ul>\
  </fieldset>\
</form>\
{{/with}}'),
  'users/show': Ember.Handlebars.compile('{{#if getFlash.error}}<div class="alert alert-error">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Error!</h1>\
  <h4>{{getFlash.error}}</h4>\
</div>\
{{/if}}{{#if getFlash.success}}<div class="alert alert-success">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Success!</h1>\
  <h4>{{getFlash.success}}</h4>\
</div>\
{{/if}}{{#if getFlash.info}}<div class="alert alert-info">\
  <a class="close" data-dismiss="alert" href="#">\
    x\
  </a>\
  <h1>Important!</h1>\
  <h4>{{getFlash.info}}</h4>\
</div>\
{{/if}}{{#with resource}}<dl class="content">\
  <dt>Email:</dt>\
  <dd>{{email}}</dd>\
  <dt>Name:</dt>\
  <dd>{{name}}</dd>\
</dl>\
{{/with}}'),
  'welcome': Ember.Handlebars.compile('<h1>Welcome to Tower.js</h1>\
')
};

_.extend(Ember.TEMPLATES, Tower.View.cache);
