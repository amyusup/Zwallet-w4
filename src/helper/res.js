module.exports = {
  ok: (result, res) => {
    //console.log(result);
    res.status(200).send({
      succes: true,
      // message: "Process executed successfully",
      data: result,
    });
  },

  client: (result, res) => {
    res.status(400).send({
      succes: false,
      data: result,
    });
  },

  server: (result, res) => {
    res.status(500).send({
      succes: false,
      data: result,
    });
  }
}