/* init */
"use strict";
jQuery(function($) {
   var defaults = {
      "size": 100,
      "ecLevel": "H"
   };
   $(".qrcode:not(.qrcode_inited)").livequery(function() {
      var $this = $(this),
          text = $this.text(),
          opts = $.extend({text: text}, defaults, $this.data());
      $this.empty();
      $this.qrcode(opts);
      $this.addClass("qrcode_inited");
   });
});
