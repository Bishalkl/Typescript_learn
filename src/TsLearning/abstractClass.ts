abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log();
  }
}

const hc = new Instagram("Click", "imort");
console.log(hc);