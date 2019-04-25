class Circle {

  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.diameter = this.radius * 2;
  }

  get circumference(){
    return this.circumference = Math.PI * this.diameter;
  }

  get area(){
    return this.area = Math.PI * Math.pow(this.radius,2);
  }

  set diameter(newDiameter){
    this.radius = newDiameter/2;
  }

  set circumference(newCircumference){
    this.diameter = newCircumference / Math.PI;
  }

  set area(newArea){
    this.diameter = Math.sqrt(newArea / Math.PI);
  }

}
