function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate: accelRate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.accelRate;
    },
    brake: function() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

var hatchback = makeCar(9, 7);

