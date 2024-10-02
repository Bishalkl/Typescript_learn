interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
}

class Youtube implements TakePhoto, story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}
