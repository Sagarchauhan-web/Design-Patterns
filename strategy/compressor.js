export class StoreImage {
  constructor(compressor, filter) {
    this.compressor = compressor;
    this.filter = filter;
  }

  store() {
    this.compressor.compress();
    this.filter.apply();
  }
}
