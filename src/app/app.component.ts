import { Component } from '@angular/core';
import { morseEncode, morseDecode } from './morse-coding';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isDecoding = false;
  public inputText = '';
  public translatedText = '';

  switchMode() {
    this.isDecoding = !this.isDecoding;
  }

  setInputLabel() {
    if (this.isDecoding) {
      return 'Enter text to decode';
    } else {
      return 'Enter text to encode';
    }
  }

  setTitle() {
    if (this.isDecoding) {
      return 'Morse Decoder';
    } else {
      return 'Morse Encoder';
    }
  }

  setSwitchText() {
    if (this.isDecoding) {
      return 'Switch to encoding mode';
    } else {
      return 'Switch to decoding mode';
    }
  }

  morseCode(textToEncode: string) {
    let encodedText = '';
    for (const char of textToEncode) {
      if (char !== ' ') {
        const encodedChar = morseEncode(char) ? morseEncode(char) : '';
        encodedText += encodedChar + ' ';
      } else {
        encodedText += '    ';
      }
    }
    return encodedText;
  }

  morseDecode(textToDecode: string) {
    textToDecode += ' ';
    let decodedText = '';
    let morseChar = '';
    let i = 0;
    for (const char of textToDecode) {
      if (char !== ' ') {
        i = 0;
        morseChar += char;
      } else {
        i += 1;

        if (i === 2) {
          decodedText += ' ';
        } else {
          decodedText += morseDecode(morseChar) ? morseDecode(morseChar) : '';
          morseChar = '';
        }
      }
    }
    return decodedText;
  }
}
