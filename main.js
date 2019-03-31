var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

/**********************************************/

var player = new PLAYER(ctx)

/**********************************************/

var inLoop = false

/**********************************************/
document.addEventListener('keydown',onKeyDown)
document.addEventListener('keyup',onKeyUp)

var keydown = {w:false,a:false,s:false,d:false}
function onKeyDown(event) {
    switch (event.code) {
        case 'KeyW':
            if(keydown.w) return
            keydown.w=true
            player.moveDelta[0] += 0
            player.moveDelta[1] -= 1
            if(!inLoop){
                inLoop=true
                gfxLoop('w')
            }
            break
        case 'KeyA':
            if(keydown.a) return
            keydown.a=true
            player.moveDelta[0] -= 1
            player.moveDelta[1] += 0
            if(!inLoop){
                inLoop=true
                gfxLoop('a')
            }
            break
        case 'KeyS':
            if(keydown.s) return    
            keydown.s=true
            player.moveDelta[0] += 0
            player.moveDelta[1] += 1
            if(!inLoop){
                inLoop=true
                gfxLoop('s')
            }
            break
        case 'KeyD':
            if(keydown.d) return
            keydown.d=true
            player.moveDelta[0] += 1
            player.moveDelta[1] += 0
            if(!inLoop){
                inLoop=true
                gfxLoop('d')
            }
            break  
    }     
}

function onKeyUp(event) {
    if(['KeyW','KeyA','KeyS','KeyD'].includes(event.code)){
        switch (event.code) {
            case 'KeyW':
            keydown.w=false
            player.moveDelta[0] += 0
            player.moveDelta[1] += 1
            break
            case 'KeyA':
            keydown.a=false
            player.moveDelta[0] += 1
            player.moveDelta[1] += 0
            break
            case 'KeyS':
            keydown.s=false
            player.moveDelta[0] += 0
            player.moveDelta[1] -= 1
            break
            case 'KeyD':
            keydown.d=false
            player.moveDelta[0] -= 1
            player.moveDelta[1] += 0
            break
        }
        
    } 
}

function gfxLoop(key){
    if(!Object.keys(keydown).some(function(key){return keydown[key]==true})) {inLoop = false; return}
    window.requestAnimationFrame(gfxLoop.bind(this,key))
    player.move()
    return
}

/**********************************************/

player.setColor('rgb(0,0,255)')
player.appear()

/**********************************************/


