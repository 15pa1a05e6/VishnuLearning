var Barrel=function(x,y,src){
	this.x=x;
	this.y=y;
	this.src=src;
	this.p=0;
}

Barrel.prototype.setup=function(){
	this.elem=$('<img id="barrel" src="'+this.src+'" class="barrel">');
	this.elem.css({ top: this.y + 'px', left: this.x + 'px' });
	$('body').append(this.elem);
}


Barrel.prototype.rotateLeft=function(){
	console.log(this.p);
	this.elem.css('transform-origin' ,'50% 100%');
	if(this.p>-90){
		this.p=this.p-10;
	this.elem.css('transform' , 'rotate('+ this.p +'deg)');
	}
	}
   
Barrel.prototype.rotateRight=function(){
	this.elem.css('transform-origin' ,'50% 100%');
	if(this.p<90){
		this.p=this.p+10;
	this.elem.css('transform' , 'rotate('+ this.p +'deg)');
	}
	}
	
Barrel.prototype.shoot=function(){
	var bullet=new Bullet(
					//parseInt($(window).width()/2,$(window).height()/2,"bullet.svg");
					parseInt((this.x+this.elem.width()/2)-2),this.y+50,"bullet.svg");
					bullet.setup();
}
