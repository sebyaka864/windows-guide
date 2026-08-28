---
sidebar_position: 4
slug: /install-windows-10
---

# install windows 10

Windows 10 is the better fit for older hardware, legacy drivers, or software that has not been tested on Windows 11. Check the support and update situation before committing to a long-term installation.

## download windows 10

This is the Windows 10 download supplied for the guide.

<div className="downloadChoices">
  <a className="button button--primary button--lg" href="https://buzzheavier.com/5eerq83cpgwi" target="_blank" rel="noopener noreferrer">download windows 10</a>
</div>

This download is **Windows 10 IoT Enterprise 22H2**. Windows 10 LTSC is not recommended here because the available release is older.

## write the usb with rufus

1. Download [Rufus from its official website](https://rufus.ie/) or use the [direct Rufus 4.15 mirror](https://github.com/pbatard/rufus/releases/download/v4.15/rufus-4.15.exe).
2. Connect an empty USB drive with at least 8 GB of space.
3. Select the USB drive and the Windows 10 ISO in Rufus.
4. Keep the recommended settings, then start the write process. Everything on the USB will be erased.
5. When it finishes, safely eject the USB and continue to [setup](/setup).

:::tip keep your license in mind
Install the same edition already linked to your device's digital license when possible, such as Home or Pro. This gives Windows the best chance of activating automatically after setup.
:::
