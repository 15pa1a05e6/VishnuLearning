
var Trooper=function(x,y,imagesrc,id){
	this.x=x;
	this.y=y;
	this.id=id;
	this.src=imagesrc;
	this.elem=null;
}
Trooper.prototype.setup=function(){
console.log("trooper");
		this.elem = $('<img id="trooper' + this.id + '" src="' + this.src + '" class="trooper">');
    	this.elem.css({ top: this.y + 'px', left: this.x + 'px' })
    	.load(function() {
        $(this).animate({
            'top': '+20px'
        }, 2000, "linear", function() {
        
        		$(".trooper").attr("src","paratrooper.svg").load(function(){
        		console.log("paratrooper");
        		$(this).animate({
            'top': $(window).height()+'px'
            })
            $(this).remove();
        });
        })
        
    });
    	$('body').append(this.elem);	
}

