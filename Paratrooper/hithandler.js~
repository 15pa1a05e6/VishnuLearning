var Hithandler = function () {

}

Hithandler.prototype.checkHits = function () {
    var self = this;
   
    $('.bullet').each(function () {
 		
        var bullet = $(this);
        $('.heli').each(function () {
            var heli = $(this);
            var bx = bullet.position().left;
            var by = bullet.position().top;
            var ex = heli.position().left ;
            var ey = heli.position().top;
            if (bx > ex && bx < ex + 100 && by < ey + 100 && by > ey) {
                heli.attr('src', 'blast.gif').load(function(){
                    $(this).fadeOut(500, function() {
                        $(this).remove();
            
                    });
                });
                $('#killsound').get(0).load();
               $('#killsound').get(0).play();
                bullet.remove();
                
                return false;
                
            }
        })
    });
    setTimeout(function () {
        self.checkHits();
    }, 100);
}
