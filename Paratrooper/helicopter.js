var Heli=function(x,y,src){
	this.src=src;
	this.x=x;
	this.y=y;
}
Heli.prototype.setup=function(){
	if(this.src === 'helicopter02.gif' || this.src === 'helicopter04.gif'){
	var b =
    $('<img src="'+this.src+'" class="heli">')
    .css({
        'top': this.y + 'px',
        'left': this.x + 'px'
    })
    
    .load(function() {
 			  	
        $(this).animate({
            'left': '10px',
            
        }, 5000, "linear", function() {
            $(this).remove();
        })
    });
    }
    if(this.src === 'helicopter01.gif' || this.src === 'helicopter03.gif'){
		var b =
    	$('<img src="'+this.src+'" class="heli">')
    .css({
        'top': this.y +100+ 'px',
        'left': 0+ 'px'
    })
    .load(function() {
        $(this).animate({
 						
            'left': $(window).width()+'px',
            
        }, 5000, "linear", function() {
        		
            $(this).remove();
        })
    });
    }
    $('body').append(b);
}

