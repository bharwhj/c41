class Drops{


constructor(x,y){
var options={
friction:0.1,
restitution:0.1

}
this.body=Bodies.circle(x,y,7,options)
this.radius=7
World.add(world,this.body)







}
displaydrop()
{
fill("blue")
ellipseMode(CENTER)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)



}
updateY(){
if(this.body.position.y>height)
{
Matter.Body.setPosition(this.body,{x:random(0,175),y:random(0,300)})


}


}


}