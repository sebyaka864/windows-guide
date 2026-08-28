---
sidebar_position: 5
slug: /telemetry
---

# easy telemetry disable for windows 10 and 11

Enterprise editions expose the Group Policy controls needed to reduce Windows diagnostic data. This guide applies the policy cleanly and shows how to verify the result. It does not remove security updates or promise that every form of data collection disappears.

## prerequisites

1. Upgrade to Enterprise if you are running Home or Pro. The edition can be changed through the **Change Edition** option in the Extras menu of [MAS](https://massgrave.dev/#Download__How_to_use_it).
2. Create a restore point and make sure you have administrator access.

## disable telemetry with group policy

1. Search for **Edit Group Policy**, or press `Win + R` and run `gpedit.msc`.
2. Open **Computer Configuration → Administrative Templates → Windows Components → Data Collection and Preview Builds**.
3. Open **Allow Telemetry** on Windows 10, or **Allow Diagnostic Data** on Windows 11.
4. Select **Enabled**, then choose **Security [Enterprise Only]** on Windows 10 or **Diagnostic data off** on Windows 11.
5. Select **Apply**, then **OK**. Restart Windows so the policy is refreshed.

## optional: disable windows error reporting

1. In Group Policy Editor, open **Computer Configuration → Administrative Templates → Windows Components → Windows Error Reporting**.
2. Open **Disable Windows Error Reporting**.
3. Select **Enabled**, then select **Apply** and **OK**.

## verify the policy

1. Open `regedit` as administrator.
2. Go to `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection`.
3. Confirm that `AllowTelemetry` is set to `0`.
4. For error reporting, open `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Windows Error Reporting` and confirm `Disabled` is set to `1`.

:::warning keep security updates enabled
Telemetry settings are separate from Windows Update. Keep security updates and Defender protections enabled, and review policies again after a major feature update.
:::
