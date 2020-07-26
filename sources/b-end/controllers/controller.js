const { Video, Creator } = require('../models/index.js');

class Controller {
  static getRootHandler(req, res) {
    // Me-render halaman index
    // Tidak membutuhkan data apapun

    res.render('index');
  }

  static getVideoRootHandler(req, res) {
    // Me-render halaman videos
    // Membutuhkan sebuah parameter
    //   dataVideos <--- array of video dari Model Video

    // res.send('getVideoRoot');

    Video.findAll({})
      .then((data) => {
        res.render('videos', {
          dataVideos: data
        })
      })
      .catch((err) => {
        res.send(err);
      });
    
  }

  static getCreatorRootHandler(req, res) {
    // Me-render halaman creators
    // Membutuhkan sebuah parameter
    //    dataCreators <--- array of video dari Model Creator

    // res.send('getCreatorRoot');

    Creator.findAll({})
      .then((data) => {
        res.render('creators', {
          dataCreators: data
        })
      })
      .catch((err) => {
        res.send(err);
      })
  }

  static getCombinationRootHandler(req, res) {
    // Menampilkan data dalam bentuk JSON

    // res.send('getCombinationRoot');

    Creator
      .findAll({
        // Jangan lupa menambahkan option include, valuenya berupa Array
        include: [
          Video
        ]
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  }
}

module.exports = Controller;