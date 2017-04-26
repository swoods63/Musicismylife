function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    console.log(songList);
    // This is where you task begins
    var songs = document.getElementById("song-list")
    var template = ""
    for (var i = 0; i < 50; i++) {
      template += `
  <div class="row">
    <div class="col-lg-2"><img src = ${songList[i].albumArt}></div>
    <div class="col-lg-2"><p>${songList[i].artist}</p></div>
    <div class="col-lg-2"><p>${songList[i].title}</p></div>
    <div class="col-lg-2"><p>${songList[i].collection}</p></div>
    <div class="col-lg-2"><p>${songList[i].price}</p></div>
    <div class="col-lg-2"><audio controls>
    <source src="${songList[i].preview}" type="audio/ogg">
    </audio></div>
  </div>
  `
    }
    songs.innerHTML = template

  }

}



var itunesCtrl = new ItunesController()