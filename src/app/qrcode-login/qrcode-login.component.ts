// import { Component, OnInit } from '@angular/core';
// import * as QRCode from 'qrcode'; // For generating QR codes

// @Component({
//   selector: 'app-qrcode-login',
//   templateUrl: './qrcode-login.component.html',
//   styleUrls: ['./qrcode-login.component.css']
// })
// export class QRCodeLoginComponent implements OnInit {
//   qrCodeImage: string = '';
//   userData = { userId: 12345, timestamp: Date.now() };

//   constructor() { }

//   ngOnInit(): void {
//     this.generateQRCode();
//   }

//   generateQRCode() {
//     const qrCodeText = JSON.stringify(this.userData);
//     QRCode.toDataURL(qrCodeText, (err, url) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       this.qrCodeImage = url;
//     });
//   }

//   onQRCodeScanned(data: string) {
//     const scannedData = JSON.parse(data);
//     // Perform login based on the scanned data (e.g., userId and timestamp)
//     console.log('Scanned Data:', scannedData);
//     // Implement your login logic here
//   }
// }
