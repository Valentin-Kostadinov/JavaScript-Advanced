function solve() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Cannot initialize abstract class");
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(battery) {
      if (battery.constructor.name != "Battery") {
        throw new TypeError("Invalid type");
      }
      this._battery = battery;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(keyboard) {
      if (keyboard.constructor.name != "Keyboard") {
        throw new TypeError("Invalid type");
      }
      this._keyboard = keyboard;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(monitor) {
      if (monitor.constructor.name != "Monitor") {
        throw new TypeError("Invalid type");
      }
      this._monitor = monitor;
    }
  }

  return { Keyboard, Monitor, Battery, Computer, Laptop, Monitor, Desktop };
}

let app = solve();

let battery = new app.Battery("Lenovo", 24);
let laptop = new app.Laptop("Acer", 255, 16, 500, 1400, "red", battery);
let keyboard = new app.Keyboard("Reddragon", 0.1);
let monitor = new app.Monitor("Alienware", 26, 24);
let desktop = new app.Desktop("Lenovo", 1000, 16, 500, keyboard, monitor);
