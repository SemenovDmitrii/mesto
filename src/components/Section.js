export class Section {
  constructor ({data, renderer}, containerSelector) {
    this._data = data;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  };

  renderItems() {
    this._data.forEach(element => {
      this._renderer(element);
    })
  };

  addItem(element) {
    this._containerSelector.prepend(element)
  };
}