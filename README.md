## 🗒️ Answer

### README.md

```markdown
# Birthday Card Creator App

A simple and interactive React Native application that allows users to create custom birthday cards by uploading an image, adding a personalized message, and selecting a text color. Users can preview the card and make edits as needed.

## Features
- **Upload Images**: Select and display an image from the device's gallery.
- **Personalized Messages**: Add a custom birthday message with adjustable text color.
- **Preview Mode**: View the completed card before sharing or saving.
- **Edit Mode**: Easily make changes to the card after previewing.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Portia-Nelly-Mashaba/Birthday-Card.git
   cd birthday-card
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   - On Android:
     ```bash
     npx expo start --android
     ```
   - On iOS:
     ```bash
     npx expo start --ios
     ```
   - On Web:
     ```bash
     npx expo start --web
     ```

## Dependencies
- **React Native**: Framework for building cross-platform apps.
- **Expo**: Tools and services for building and deploying the app.
- **expo-image-picker**: For image selection from the device gallery.

## Usage
1. **Edit Mode**:
   - Tap on "Upload Image" to select a photo from the gallery.
   - Enter a birthday message in the text input field.
   - Choose a text color from the color picker.
   - Press "Display Card" to preview your card.

2. **Display Mode**:
   - View the selected image with the message displayed at the top.
   - Tap "Edit" to return to edit mode and make changes.

## Folder Structure
```
app/
├── (tabs)/
│   └── index.tsx  # Main screen implementation
└── assets/         # Images and other static assets
```

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add a feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

