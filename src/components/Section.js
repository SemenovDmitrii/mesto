export class Section {
  constructor ({data, renderer}, containerSelector) {
    this.data = data;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  };

  renderItems() {
    this.data.forEach(element => {
      this._renderer(element);
    })
  };

  addItem(element, method) {
    if ( method == 'prepend') {
      this._containerSelector.prepend(element)
    } else if (method == 'append') {
      this._containerSelector.append(element)
    }
  };
}