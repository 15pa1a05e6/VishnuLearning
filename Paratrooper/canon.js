var Canon=function(x,y,img){
	this.x=x;
	this.y=y;
	this.elem=null;
	this.src=img;
}

Canon.prototype.setup=function(){
	this.elem = $('<img id="canon' + this.id + '" src="' + this.src + '" class="canon">');
	 this.elem.css({ top: this.y + 'px', left: this.x + 'px' });
	$('body').append(this.elem);
}
