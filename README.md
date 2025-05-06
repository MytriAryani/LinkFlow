# LINK FLOW
Link Flow is a simple web application that allows user to share data (name and mobile number) via Bluetooth file sharing. Useful for quick, offline data transfer.

## Live Demo
https://link-flow-gamma.vercel.app/

## How it works:
1. The user enters their name and phone number in a form.
2. On clicking the "Share" button:
    - The data is converted into a .txt file.
    - The file is shared using the Web Share API if the device supports file sharing.
3. A status message is displayed to let the user know if the sharing was successful or not.

## Implemented Logic:
- Form validation ensures both fields are filled.
- Uses `navigator.canShare()` to check device support.
- Creates a `.txt` file from user data and shares it via `navigator.share()`.
- Displays success or error messages based on the share outcome.

## Setup:
**Clone the Repository:**
   git clone https://github.com/MytriAryani/link-flow-bluetooth.git  
   cd link-flow-bluetooth  
**Open index.html**

## Dependencies & Tools Used:
Google Fonts: Open Sans  
Web APIs:  
  navigator.canShare()  
  navigator.share()  
  Blob, File
  



   
