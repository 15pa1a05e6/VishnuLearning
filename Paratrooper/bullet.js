var Bullet=function(x,y,src){
	this.x=x;
	this.y=y;
	this.src=src;
}

Bullet.prototype.setup=function(){
	var b =
    $('<img src="'+this.src+'" class="bullet">')
    .css({
        'top': this.y+20+'px',
        'left': this.x+'px'
    })
    .load(function() {
        $(this).animate({
            'top': '10px',//(Math.abs(barrel.p-5)-10)+'%',
						//'left':(barrel.p-51)+'%'
        }, 1000, "linear", function() {
            $(this).remove();
        })
    });
    $('body').append(b);
}
