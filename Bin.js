class Bin {

        constructor(x, y, width, height){
            var bin_options = {
                isStatic : true
            }
            
            this.body = Bodies.rectangle(x, y, width, height, bin_options);
            this.width = width;
            this.height = height;
            World.add(myWorld, this.body)
        }

        display(){
            var pos = this.body.position;

            rectMode(CENTER);
            fill("red");
            noStroke();
            rect(pos.x, pos.y, this.width, this.height);
            rect(pos.x - 90, 525, 20, 100);
            rect(pos.x + 90, 525, 20, 100);
            
        }

}