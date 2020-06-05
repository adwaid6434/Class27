class Rubber{
 constructor(body1,body2){
 var opt={
 bodyA : body1,
 bodyB : body2,
 stiffness : 0.5,
 length : 20
 }
 this.rubberband= Matter.Constraint.create(opt);
 World.add(world,this.rubberband);
 }
display(){
var point1 = this.rubberband.bodyA.position; 
var point2 = this.rubberband.bodyB.position;
push();
strokeWeight(5);    
line(point1.x,point1.y,point2.x,point2.y);    
pop();
}
} 