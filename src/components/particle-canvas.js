import React, { Component } from 'react';

class ParticleCanvas extends Component {
    constructor() {
        super();
        // this.theCanvas = this.refs.canvas;
        // this.ctx = this.refs.canvas.getContext("2d");

        this.sphereRad = 600;
        this.radius_sp=1.5;

        this.displayWidth = window.innerWidth; this.displayHeight = window.innerHeight;
        // this.timer = setInterval(this.updateCanvas, 10/10);
        this.wait = 1; 
        this.count = this.wait - 1;
        this.numToAddEachFrame = 8;
        this.particleList = {};
        this.recycleBin = {};
        this.particleAlpha = 1;
        this.r = 118; this.g = 228; this.b = 33;
        this.fLen = 320;
        this.m = null;
        this.projCenterX = this.displayWidth/2; this.projCenterY = this.displayHeight/2;
        this.zMax = this.fLen-2; 
        this.turnAngle = 0;
        this.turnSpeed = 0.125*Math.PI/1200;
        this.sphereCenterX = 0; this.sphereCenterY = 0; this.sphereCenterZ = -3 - this.sphereRad;
        this.particleRad = 5;
        this.zeroAlphaDepth = -750;
        this.randAccelX = this.randAccelY = this.randAccelZ = 0.1;
        this.gravity = -0;
        this.rgbString = "rgba("+this.r+","+this.g+","+this.b+",";

        this.p = null;
        this.outsideTest = null;
        this.nextParticle = null;
        this.sinAngle = null; this.cosAngle = null;
        this.rotX = null; this.rotZ = null;
        this.depthAlphaFactor = null;
        this.i = null; this.theta = null; this.phi = null;
        this.x0 = null; this.y0 = null; this.z0 = null;
    }

    componentDidMount() {
        this.init();
        this.updateCanvas();
    }
    
    init() {
        this.ctx = this.refs.canvas.getContext("2d");
        console.log("init particle canvas");
    }

    addParticle(x0,y0,z0,vx0,vy0,vz0) {
		var newParticle;
		// var color;
		
		//check recycle bin for available drop:
		if (this.recycleBin.first != null) {
			newParticle = this.recycleBin.first;
			//remove from bin
			if (newParticle.next != null) {
				this.recycleBin.first = newParticle.next;
				newParticle.next.prev = null;
			}
			else {
				this.recycleBin.first = null;
			}
		}
		//if the recycle bin is empty, create a new particle (a new ampty object):
		else {
			newParticle = {};
		}
		
		//add to beginning of particle list
		if (this.particleList.first == null) {
			this.particleList.first = newParticle;
			newParticle.prev = null;
			newParticle.next = null;
		}
		else {
			newParticle.next = this.particleList.first;
			this.particleList.first.prev = newParticle;
			this.particleList.first = newParticle;
			newParticle.prev = null;
		}
		
		//initialize
		newParticle.x = x0;
		newParticle.y = y0;
		newParticle.z = z0;
		newParticle.velX = vx0;
		newParticle.velY = vy0;
		newParticle.velZ = vz0;
		newParticle.age = 0;
		newParticle.dead = false;
		if (Math.random() < 0.5) {
			newParticle.right = true;
		}
		else {
			newParticle.right = false;
		}
		return newParticle;		
	}

    recycle(p) {
		//remove from particleList
		if (this.particleList.first === p) {
			if (p.next != null) {
				p.next.prev = null;
				this.particleList.first = p.next;
			}
			else {
				this.particleList.first = null;
			}
		}
		else {
			if (p.next == null) {
				p.prev.next = null;
			}
			else {
				p.prev.next = p.next;
				p.next.prev = p.prev;
			}
		}
		//add to recycle bin
		if (this.recycleBin.first == null) {
			this.recycleBin.first = p;
			p.prev = null;
			p.next = null;
		}
		else {
			p.next = this.recycleBin.first;
			this.recycleBin.first.prev = p;
			this.recycleBin.first = p;
			p.prev = null;
		}
	}	

    updateCanvas() {
        var _this = this;
        setInterval(function() {
            _this.ctx = _this.refs.canvas.getContext("2d");

            console.log(window.innerWidth);

            //if enough time has elapsed, we will add new particles.		
		    _this.count++;
            if (_this.count >= _this.wait) {
                    
                _this.count = 0;
                for (var i = 0; i < _this.numToAddEachFrame; i++) {
                    _this.theta = Math.random()*2*Math.PI;
                    _this.phi = Math.acos(Math.random()*2-1);
                    _this.x0 = _this.sphereRad*Math.sin(_this.phi)*Math.cos(_this.theta);
                    _this.y0 = _this.sphereRad*Math.sin(_this.phi)*Math.sin(_this.theta);
                    _this.z0 = _this.sphereRad*Math.cos(_this.phi);
            
                    //We use the addParticle function to add a new particle. The parameters set the position and velocity components.
                    //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
                    //it becomes unstuck).
                    var p = _this.addParticle(_this.x0, _this.sphereCenterY + _this.y0, _this.sphereCenterZ + _this.z0, 0.002*_this.x0, 0.002*_this.y0, 0.002*_this.z0);
            
                    //we set some "envelope" parameters which will control the evolving alpha of the particles.
                    p.attack = 50;
                    p.hold = 50;
                    p.decay = 100;
                    p.initValue = 0;
                    p.holdValue = _this.particleAlpha;
                    p.lastValue = 0;
            
                    //the particle will be stuck in one place until this time has elapsed:
                    p.stuckTime = 90 + Math.random()*20;
                    
                    p.accelX = 0;
                    p.accelY = _this.gravity;
                    p.accelZ = 0;
                }
            }
    
            //update viewing angle
            _this.turnAngle = (_this.turnAngle + _this.turnSpeed) % (2*Math.PI);
            _this.sinAngle = Math.sin(_this.turnAngle);
            _this.cosAngle = Math.cos(_this.turnAngle);

            //background fill
            var my_gradient=_this.ctx.createLinearGradient(0,0,0,_this.displayHeight);
            my_gradient.addColorStop(0,"#007962");
            my_gradient.addColorStop(1,"#4fb700");
            _this.ctx.fillStyle = my_gradient;
            // _this.ctx.fillStyle = 'rgba(0, 0, 0, 0.0)';
            _this.ctx.fillRect(0,0,_this.displayWidth,_this.displayHeight);
    
            //update and draw particles
            p = _this.particleList.first;
            while (p != null) {
                //before list is altered record next particle
                _this.nextParticle = p.next;
                
                //update age
                p.age++;
                
                //if the particle is past its "stuck" time, it will begin to move.
                if (p.age > p.stuckTime) {	
                    p.velX += p.accelX + _this.randAccelX*(Math.random()*2 - 1);
                    p.velY += p.accelY + _this.randAccelY*(Math.random()*2 - 1);
                    p.velZ += p.accelZ + _this.randAccelZ*(Math.random()*2 - 1);
                    
                    p.x += p.velX;
                    p.y += p.velY;
                    p.z += p.velZ;
                }
        
                /*
                We are doing two things here to calculate display coordinates.
                The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
                x and z (but the y coordinate will not change).
                Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
                */
                _this.rotX =  _this.cosAngle*p.x + _this.sinAngle*(p.z - _this.sphereCenterZ);
                _this.rotZ =  -_this.sinAngle*p.x + _this.cosAngle*(p.z - _this.sphereCenterZ) + _this.sphereCenterZ;
                _this.m =_this.radius_sp * _this.fLen/(_this.fLen - _this.rotZ);
                p.projX = _this.rotX*_this.m + _this.projCenterX;
                p.projY = p.y*_this.m + _this.projCenterY;
            
               //update alpha according to envelope parameters.
                if (p.age < p.attack+p.hold+p.decay) {
                    if (p.age < p.attack) {
                        p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
                    }
                    else if (p.age < p.attack+p.hold) {
                        p.alpha = p.holdValue;
                    }
                    else if (p.age < p.attack+p.hold+p.decay) {
                        p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
                    }
                }
                else {
                    p.dead = true;
                }
        
                //see if the particle is still within the viewable range.
                if ((p.projX > _this.displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>_this.displayHeight)||(_this.rotZ>_this.zMax)) {
                    _this.outsideTest = true;
                }
                else {
                    _this.outsideTest = false;
                }
        
                if (_this.outsideTest||p.dead) {
                    _this.recycle(p);
                }
        
                else {
                    //depth-dependent darkening
                    _this.depthAlphaFactor = (1-_this.rotZ/_this.zeroAlphaDepth);
                    _this.depthAlphaFactor = (_this.depthAlphaFactor > 1) ? 1 : ((_this.depthAlphaFactor<0) ? 0 : _this.depthAlphaFactor);
                    _this.ctx.fillStyle = _this.rgbString + _this.depthAlphaFactor*p.alpha + ")";
                    
                    //draw
                    _this.ctx.beginPath();
                    _this.ctx.arc(p.projX, p.projY, _this.m*_this.particleRad, 0, 2*Math.PI, false);
                    _this.ctx.closePath();
                    _this.ctx.fill();
                }
        
        p = _this.nextParticle;
    }
        }, 50);
        
    }

    render() {
        return (
            <div style={{
                position: 'absolute', 
                background: 'linear-gradient(180deg, #007962 0%, #4fb700 100%)',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                }}>
                <canvas ref="canvas" width={this.displayWidth} height={this.displayHeight} resize="true"/>
            </div>
        );
    }
}

export default ParticleCanvas;