---
sidebar_position: 5
---

# runtimes and components

some games and older applications depend on microsoft visual c++ packages, openal, xna, or directx. installing these components can fix missing-dll errors and launch problems.

:::tip do this after windows update
finish windows and microsoft store updates first. restart if asked, then continue here.
:::

## update the microsoft store

1. open the **microsoft store**.
2. go to **updates & downloads**.
3. select **check for updates** and let every update finish.

## install microsoft visual c++ redistributables

Install a runtime only when an application names it in an error message or its official requirements. For most current software, the [latest supported Visual C++ redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) is enough. Install both x64 and x86 on a 64-bit Windows PC when the application is 32-bit or you are unsure.

Avoid all-in-one runtime packs and long copy-paste commands. They make it difficult to see what changed and can install obsolete packages you do not need. If an older game specifically requires a 2005–2013 runtime, use the download linked by its publisher or Microsoft, then test the game before adding anything else.

:::tip keep troubleshooting narrow
Install one missing component, restart if requested, and test the affected app. A missing-DLL error is evidence for a targeted fix—not a reason to install every runtime at once.
:::

## additional components

- [openal installer](https://www.openal.org/downloads/oalinst.zip)
- [microsoft xna framework 4.0 redistributable](https://download.microsoft.com/download/a/c/2/ac2c903b-e6e8-42c2-9fd7-bebac362a930/xnafx40_redist.msi)
- [directx end-user runtime web installer](https://download.microsoft.com/download/1/7/1/1718ccc4-6315-4d8e-9543-8e28a4e18c4c/dxwebsetup.exe)

Download these only when an application requires them. Confirm that the download address is Microsoft or the component's official publisher, then restart before testing the app again.
