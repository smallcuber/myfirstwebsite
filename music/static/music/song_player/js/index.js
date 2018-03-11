$(document).ready(function() {

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  },[{
    title: "Cro Magnon Man",
    artist: "Mushroom Records",
    mp3: "http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
    oga: "http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
  }, {
    title: "Your Face",
    artist: "Ministry",
    mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
    oga: "http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
  }, {
    title: "Cyber Sonnet",
    artist: "You Am I",
    mp3: "http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
    oga: "http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
  }, {
    title: "Tempered Song",
    artist: "Shelter",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
  }, {
    title: "Hidden",
    artist: "Bad Religion",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
  }, {
    title: "Lentement",
    artist: "Apollo 440",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
  }, {
    title: "Lismore",
    artist: "Bloodhound Gang",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
  }, {
    title: "The Separation",
    artist: "Friendly Fires ",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
  }, {
    title: "Beside Me",
    artist: "Friendly Fires ",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
  }, {
    title: "Bubble",
    artist: "Skunkhour",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
  }, {
    title: "Stirring of a fool",
    artist: "The Meanies",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
  }, {
    title: "Partir",
    artist: "The Living End",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
  }, {
    title: "Thin Ice",
    artist: "Screaming Trees",
    mp3: "http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
    oga: "http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
  }], {
    swfPath: "../../dist/jplayer",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  }); // end jplayer initiate

  /* ======== Other Audio Player Functions ======== */
  $("#jquery_jplayer_1").on(
    $.jPlayer.event.ready + ' ' + $.jPlayer.event.play,
    function(event) {

      /* === ENABLE PLAYLIST ==== */

      var current = myPlaylist.current;
      var playlist = myPlaylist.playlist;
      $.each(playlist, function(index, obj) {
        if (index == current) {
          $(".jp-now-playing").html("<div class='jp-track-name'>" + obj.title + "</div> <div class='jp-artist-name'>" + obj.artist + "</div>");

        }
      });

      /* === VOLUME DRAGGING ==== */

      $('.jp-volume-bar').mousedown(function() {
          var parentOffset = $(this).offset(),
            width = $(this).width();
          $(window).mousemove(function(e) {
            var x = e.pageX - parentOffset.left,
              volume = x / width
            if (volume > 1) {
              $("#jquery_jplayer_1").jPlayer("volume", 1);
            } else if (volume <= 0) {
              $("#jquery_jplayer_1").jPlayer("mute");
            } else {
              $("#jquery_jplayer_1").jPlayer("volume", volume);
              $("#jquery_jplayer_1").jPlayer("unmute");
            }
          });
          return false;
        })
        .mouseup(function() {
          $(window).unbind("mousemove");
        });

      /* === ENABLE DRAGGING ==== */

      var timeDrag = false; /* Drag status */
      $('.jp-play-bar').mousedown(function(e) {
        timeDrag = true;
        updatebar(e.pageX);
      });
      $(document).mouseup(function(e) {
        if (timeDrag) {
          timeDrag = false;
          updatebar(e.pageX);
        }
      });
      $(document).mousemove(function(e) {
        if (timeDrag) {
          updatebar(e.pageX);
        }
      });

      //update Progress Bar control
      var updatebar = function(x) {

        var progress = $('.jp-progress');
        //var maxduration = myPlaylist.duration; //audio duration

        var position = x - progress.offset().left; //Click pos
        var percentage = 100 * position / progress.width();

        //Check within range
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }

        $("#jquery_jplayer_1").jPlayer("playHead", percentage);

        //Update progress bar
        $('.jp-play-bar').css('width', percentage + '%');
      };

      /* === Playlist Functions ==== */

      $('#playlist-toggle').on('click', function() {
        $('#playlist-wrap').stop().fadeToggle();
        $(this).toggleClass('playlist-is-visible');
      });

    }); // end jplayer event ready

}); // end document ready