angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    hanldeVideoListEntryClick: '<',
    index: '<'
  },
  templateUrl:`src/templates/videoListEntry.html`,
  controller: function(){
    this.handleClick = () => {
      this.hanldeVideoListEntryClick();
    };

  }
});
