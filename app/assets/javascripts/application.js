// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery3
//= require popper
//= require bootstrap
//= require handlebars.min
//= require_tree .

$(function(){
  attachListeners();
  compileTemplates();
})

function attachListeners() {
  attachEventFormListener();
  attachEventLinkListener();
  attachStarListener();
  attachCommentListener();
  attachEventsListener();
}

function compileTemplates() {
  Event.templateSource = $("#table-row-template").html();
  Event.template = Handlebars.compile(Event.templateSource);

  Event.showSource = $("#event-show-template").html();
  Event.showTemplate = Handlebars.compile(Event.showSource);

  Event.tableSource = $("#hb-upcoming-events").html();
  Event.trTemplate = Handlebars.compile(Event.tableSource);
}
