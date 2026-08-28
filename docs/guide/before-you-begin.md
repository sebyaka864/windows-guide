---
sidebar_position: 2
slug: /before-you-begin
---

# before you begin

Optimization is only worthwhile when you can recover easily. Take care of the basics before changing Windows.

## back up what matters

Before changing Windows, copy anything you cannot replace to an external drive or a trusted cloud service. Include:

- personal files from Desktop, Documents, Pictures, and Downloads
- browser bookmarks, saved-password exports, and two-factor recovery codes
- game saves, project files, license keys, and any custom configuration
- your BitLocker recovery key, if device encryption is enabled

Open a few copied files from another device before continuing. A backup is only useful if it can actually be restored.

:::tip make a short checklist
Write down the apps you actually use and any non-default hardware settings. Reinstalling only what you need is one of the best ways to reduce clutter.
:::

## check your windows edition and activation

Open **Settings → System → Activation** and note whether Windows is activated and which edition you use (for example, Home or Pro). A digital license normally reactivates after reinstalling the same edition on the same device.

## create a recovery option

Keep a Windows installation USB and make sure you can sign in to your Microsoft account if you use one. Do not start a clean install until your backup has been checked from another device.

## choose windows 10 or windows 11

Choose the path that matches your hardware and software needs. Both options use an ISO and Rufus to create the installation USB.

<div className="installChoices">
  <a className="button button--primary button--lg" href="#windows-11">I want to install Windows 11</a>
  <a className="button button--secondary button--outline button--lg" href="#windows-10">I want to install Windows 10</a>
</div>

### windows 11

Windows 11 is the right choice for newer PCs that meet its hardware requirements, especially if you want the newest features, security baseline, and driver support. Download the ISO from [Microsoft's Windows 11 download page](https://www.microsoft.com/software-download/windows11), then use Rufus to write it to a USB drive.

### why enterprise?

Enterprise editions expose additional Group Policy settings for administrators. That gives you much finer control over telemetry and diagnostic-data policies than Home, and more control than a typical Pro setup. It does not make every form of data collection disappear, so review each policy and keep security updates enabled.

### windows 10

Windows 10 is the better fit for older hardware, legacy drivers, or software that has not been tested on Windows 11. Download the ISO from [Microsoft's Windows 10 download page](https://www.microsoft.com/software-download/windows10), then use Rufus to create the installation USB. Check the support and update situation before committing to a long-term installation.

### create the usb with rufus

1. Download the ISO for the Windows version you chose.
2. Download Rufus from its [official website](https://rufus.ie/).
3. Connect an empty USB drive (8 GB or larger) and open Rufus.
4. Select the USB drive, choose the ISO, and keep the recommended partition settings unless your PC documentation says otherwise.
5. Start the write process, confirming that you understand the USB will be erased.
6. Safely eject the USB when Rufus finishes, then continue to [clean install](/setup).

Whichever version you choose, install the same edition already linked to your device's digital license when possible (for example, Home or Pro). That gives Windows the best chance of activating automatically after setup.
