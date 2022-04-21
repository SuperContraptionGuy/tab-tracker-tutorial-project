// just a heartbeat echo
module.exports = {
  reply(req, res) {
    res.send({ // send back json response
      message: 'The server is alive!',
    });
  },
};
