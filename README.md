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

## 2. GitHub Repository and Release

* **GitHub repository:** https://github.com/pari2004-eng/MOB_A2_REGDIGITS
* **GitHub release:** https://github.com/pari2004-eng/MOB_A2_REGDIGITS/releases/tag/v1.0.0

The published GitHub release contains the Android APK and demonstration video.

## 3. Purpose

HuguettePortfolio is a personal mobile portfolio application developed for the Mobile Application Development assignment. It presents my personal profile, skills, education, projects, and other professional information through a mobile application built with React Native, Expo, and TypeScript.

## 4. Features

* Home screen displaying my name and profile information.
* Profile photo selection, preview, replacement, and removal.
* Skills and education timeline.
* Projects list with individual project details.
* Profile editor with controlled input fields.
* Input validation with field-level error messages.
* Local persistence of saved profile information.
* Bottom-tab navigation between application screens.
* Navigation to project details and back to the projects list.
* About screen containing student information, registration number, verification code, version, and data-use information.
* Android APK distribution through a GitHub release.

## 5. Technologies Used

* React Native
* Expo
* TypeScript
* Expo Router
* AsyncStorage
* Expo Image Picker
* Expo Application Services (EAS)

## 6. Project Structure

The main project files and folders include:

* `src/app/` — application screens and routes.
* `src/components/` — reusable application components.
* `assets/` — images and other application assets.
* `docs/MOB_A2_REGDIGITS_UIUX.pdf` — UI/UX documentation.
* `README.md` — project documentation.
* `AI_USE.md` — AI-use declaration.
* `DECLARATION.md` — student declaration.
* `TEST_LOG.md` — application testing record.
* `app.json` — Expo application configuration.
* `eas.json` — EAS build configuration.
* `package.json` — project dependencies and scripts.
* `tsconfig.json` — TypeScript configuration.

## 7. Installation and Setup

### Prerequisites

Install Node.js and npm before running the project locally.

### Steps

1. Clone or download the repository.

2. Open a terminal in the project directory.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Follow the Expo instructions to run the application on a compatible device.

**Note:** Expo Go is intended for development and testing. The published standalone Android APK should be used to verify installation and offline behaviour.

## 8. Android APK Build

The Android APK was built using Expo Application Services (EAS) with the preview profile.

Build command:

```bash
npx eas-cli build --platform android --profile preview
```

The resulting APK was downloaded and published as:

`MOB_A2_REGDIGITS.apk`

The APK is available from the GitHub release:

https://github.com/pari2004-eng/MOB_A2_REGDIGITS/releases/tag/v1.0.0

## 9. Testing

The following application behaviours were tested during development:

* Launching the application.
* Navigating between the bottom tabs.
* Opening project details and returning to the projects list.
* Selecting, previewing, replacing, and removing the profile photo.
* Checking profile editor validation messages.
* Saving valid profile information.
* Confirming saved profile information remains available after closing and reopening the application.

**Test device:** Redmi 14C.

**Android version:** Android 14 (UP1A.231005.007).

**Offline testing:** The application must be tested using the installed standalone APK with Airplane Mode enabled. Expo Go testing alone does not confirm offline operation.

Only mark a test as passed in `TEST_LOG.md` after confirming the result on the device. Record any failures or limitations honestly.

## 10. Release Information

* **Release version:** v1.0.0
* **Release title:** HuguettePortfolio v1.0.0
* **APK:** `MOB_A2_REGDIGITS.apk`
* **Demo video:** `MOB_A2_REGDIGITS_DEMO.mp4`

**Release URL:**

https://github.com/pari2004-eng/MOB_A2_REGDIGITS/releases/tag/v1.0.0

Both the APK and demo video are attached to the published GitHub release.

## 11. UI/UX Documentation and Evidence

The UI/UX documentation is located at:

`docs/MOB_A2_REGDIGITS_UIUX.pdf`

Supporting evidence files include:

* `TEST_LOG.md`
* `DECLARATION.md`
* `AI_USE.md`

These documents should accurately represent the application, development process, and tests performed.

## 12. Data Use and Privacy

The application is intended to keep portfolio information available locally on the device. The profile information and selected profile photo should be checked against the actual implementation before making a final statement about how each is stored.

The project does not claim to use a remote server or cloud account for portfolio storage.

## 13. Known Limitations

* The application focuses on presenting portfolio information and saving profile data locally.
* Offline operation must be confirmed using the installed standalone APK.
* The actual testing results must be recorded in `TEST_LOG.md`.
* Project descriptions must accurately represent the work completed. Conceptual projects should be identified as such.
* Any remaining assignment requirements should be checked against the lecturer's instructions before submission.

## 14. Final Git Commit

After all final documentation and testing updates have been completed, commit and push the changes.

To obtain the final commit hash, run:

```bash
git log -1 --format=%H
```

Record the resulting full commit hash here before final submission.

## 15. Responsible Use of AI

AI assistance was used during development for learning, troubleshooting, and documentation support. This included guidance on the Expo project structure, navigation, profile editing, validation, data persistence, documentation, and Android APK building.

I am responsible for reviewing, understanding, testing, and verifying the submitted application. The source code, project descriptions, screenshots, testing results, and supporting documents must accurately represent my work and comply with institutional requirements.
