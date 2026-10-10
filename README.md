My name is Huguette Parvine ISIMBI.

# HuguettePortfolio

## 1. Student Information

* **Student name:** Huguette Parvine ISIMBI
* **Registration number:** 25/27647
* **Verification code:** MOB-A2-7647
* **Application name:** HuguettePortfolio
* **Version:** 1.0.0
* **Course:** Mobile Application Development
* **Institution:** INES Ruhengeri
* **Test device:** Redmi 14C
* **Android version:** Android 14 (UP1A.231005.007)

## 2. Repository and Release Links

* **GitHub repository:** https://github.com/pari2004-eng/MOB_A2_REGDIGITS
* **GitHub release:** https://github.com/pari2004-eng/MOB_A2_REGDIGITS/releases/tag/v1.0.0

The GitHub release contains the Android APK and demonstration video.

## 3. Purpose

HuguettePortfolio is a personal mobile portfolio application developed for the Mobile Application Development assignment. It presents my profile, skills, education, projects, and professional information in a mobile application.

## 4. Features

* Home screen displaying my name and profile information.
* Profile photo selection, preview, replacement, and removal.
* Skills and education timeline.
* Projects list with individual project details.
* Profile editor with controlled input fields.
* Field-level validation messages for invalid or incomplete information.
* Local persistence of saved profile information.
* Bottom-tab navigation between application screens.
* Navigation to project details and back to the projects list.
* About screen displaying student information, registration number, verification code, application name, and version.
* Android APK distribution through GitHub Releases.
* Offline access to the tested application screens.

## 5. Technologies Used

* React Native
* Expo
* TypeScript
* Expo Router
* AsyncStorage
* Expo Image Picker
* Expo Application Services (EAS)

## 6. Project Structure

The project contains the following main files and folders:

* `src/app/` — application screens and routes.
* `src/components/` — reusable application components.
* `assets/` — images and application assets.
* `docs/MOB_A2_REGDIGITS_UIUX.pdf` — UI/UX documentation.
* `README.md` — project documentation.
* `AI_USE.md` — AI-use declaration.
* `DECLARATION.md` — student declaration.
* `TEST_LOG.md` — application test log.
* `app.json` — Expo application configuration.
* `eas.json` — EAS build configuration.
* `package.json` — project dependencies and scripts.
* `tsconfig.json` — TypeScript configuration.

## 7. Installation and Setup

### Prerequisites

Install Node.js and npm.

### Steps

1. Clone or download the GitHub repository.

2. Open a terminal in the project directory.

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Follow the Expo instructions to run the application on a compatible device.

**Note:** Expo Go is intended for development and testing. Use the installed standalone APK to verify installation and offline operation.

## 8. Android APK Build

The Android APK was built using Expo Application Services (EAS) with the preview profile.

Build command:

```bash
npx eas-cli build --platform android --profile preview
```

The APK was published as:

`MOB_A2_REGDIGITS.apk`

Download it from the GitHub release:

https://github.com/pari2004-eng/MOB_A2_REGDIGITS/releases/tag/v1.0.0

## 9. Testing

The application was tested during development on a Redmi 14C running Android 14 (UP1A.231005.007).

### Confirmed tests

* The installed application launched successfully.
* The Home, Skills, Projects, and About screens remained accessible with Airplane Mode enabled and Wi-Fi turned off.

### Additional tests

The following tests should be marked as passed only after confirming each result:

* Opening project details and returning to the Projects screen.
* Selecting, previewing, replacing, and removing a profile photo.
* Checking profile editor validation messages.
* Saving valid profile information.
* Confirming saved information remains available after completely closing and reopening the app.
* Checking the student information displayed on the About screen.

The detailed test results are recorded in `TEST_LOG.md`.

## 10. Release Information

* **Release version:** v1.0.0
* **Release title:** HuguettePortfolio v1.0.0
* **APK filename:** `MOB_A2_REGDIGITS.apk`
* **Demo video filename:** `MOB_A2_REGDIGITS_DEMO.mp4`

**Release URL:**

https://github.com/pari2004-eng/MOB_A2_REGDIGITS/releases/tag/v1.0.0

Both the APK and demonstration video are attached to the published GitHub release.

## 11. UI/UX Documentation and Evidence

The UI/UX documentation is available at:

`docs/MOB_A2_REGDIGITS_UIUX.pdf`

Supporting evidence files include:

* `TEST_LOG.md`
* `DECLARATION.md`
* `AI_USE.md`

These documents should accurately represent the application, development process, and tests performed.

## 12. Data Use and Privacy

The application is intended to keep portfolio information available locally on the device. The implementation should be checked to confirm exactly how profile fields and the selected profile photo are stored.

The project does not claim to use a remote server or cloud account for portfolio storage.

## 13. Known Limitations

* The application focuses on presenting portfolio information and saving profile data locally.
* Only the screens and behaviours actually tested should be reported as passed.
* Project descriptions must accurately represent work completed by the student. Conceptual projects should be identified as such.
* The final submission should be checked against the lecturer's assignment instructions.

## 14. Final Git Commit

The latest documentation changes were committed and pushed to the GitHub repository.

The commit hash shown here must be updated after this final README edit is committed:

`To be updated after the final commit.`

Repository: https://github.com/pari2004-eng/MOB_A2_REGDIGITS

## 15. Responsible Use of AI

AI assistance was used during development for learning, troubleshooting, and documentation support. This included guidance on the Expo project structure, navigation, profile editing, validation, data persistence, documentation, and Android APK building.

I am responsible for reviewing, understanding, testing, and verifying the submitted application. The project descriptions, screenshots, testing results, source code, and supporting documents must accurately represent my work and comply with institutional requirements.
