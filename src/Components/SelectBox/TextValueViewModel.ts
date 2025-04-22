export default class TextValueViewModel {
    
  Text: String = "";
  Value: Number = 0;

  constructor(text: String, value: Number) {
    this.Text = text;
    this.Value = value;
  }
}
