const { Video, Creator } = require('../models/index.js');

class Controller {
  static getRootHandler(req, res) {
    // Me-render halaman index
    // Tidak membutuhkan data apapun

    res.send('index');
  }

  static getVideoRootHandler(req, res) {
    // Me-render halaman videos
    // Membutuhkan sebuah parameter
    //   dataVideos <--- array of video dari Model Video

    res.send('getVideoRoot');    
  }

  static getCreatorRootHandler(req, res) {
    // Me-render halaman creators
    // Membutuhkan sebuah parameter
    //    dataCreators <--- array of video dari Model Creator

    res.send('getCreatorRoot');
  }

  static getCombinationRootHandler(req, res) {
    // Menampilkan data dalam bentuk JSON

    res.send('getCombinationRoot');
  }
}

module.exports = Controller;