exec(function(){
  mote.io.remote = {
    api_version: '0.1',
    app_name: '2048',
    action: 'watching',
    twitter: '2048',
    display_input: false,
    init: function() {},
    update: function(force) {},
    blocks: [
      {
        type: 'buttons',
        data: [
          {
            press: function () {
              G.inputManager.emit("move", 3);
            },
            icon: 'chevron-left',
            hash: 'left'
          },
          {
            press: function () {
              G.inputManager.emit("move", 0);
            },
            icon: 'chevron-up',
            hash: 'up'
          },

          {
            press: function () {
              G.inputManager.emit("move", 2);
            },
            icon: 'chevron-down',
            hash: 'down'
          },
          {
            press: function () {
              G.inputManager.emit("move", 1);
            },
            icon: 'chevron-right',
            hash: 'right'
          },
        ]
      }
    ]};
});
