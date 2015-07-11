// Description
//   Get an inspiring question form serenize.me
//
// Commands:
//   hubot <serenize me> - <fetches a question>
//   hubot <serenize.me> - <fetches a question>
//   hubot <i have a problem> - <fetches a question>
//
// Author:
//   Serenize

module.exports = function(robot) {
  'use strict';

  robot.respond(/serenize me/i, function(res) {
    getQuestion(res);
  });

  robot.respond(/serenize\.me/i, function(res) {
    getQuestion(res);
  });
  
  robot.respond(/i have a problem/i, function(res) {
    getQuestion(res);
  });

  var getQuestion = function(res) {
    robot.http('http://www.serenize.me/api/question')
      .header('Accept', 'application/json')
      .get()(function(err, resp, body) {
        if (err) {
          res.send('Warum ist serenize.me offline? ' + err);
          return;
        }

        var data = JSON.parse(body);
        res.send(data.question);
      });
  };
};

