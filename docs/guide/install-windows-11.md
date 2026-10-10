---
sidebar_position: 3
slug: /install-windows-11
---

# install windows 11

Windows 11 is the best fit when your PC has more than 8 GB of RAM and modern hardware. Choose it for current security features, modern driver support, and the newest Windows features.

## download windows 11

<div className="downloadChoices">
  <a className="button button--primary button--lg" href="https://buzzheavier.com/k1g5we7lqkw9" target="_blank" rel="noopener noreferrer">en-us_windows_11_iot_enterprise_version_25h2_x64_dvd_67098cd6.iso</a>
</div>

## write the usb with rufus

1. download [rufus from its official website](https://rufus.ie/) or use the [direct rufus 4.15 mirror](https://github.com/pbatard/rufus/releases/download/v4.15/rufus-4.15.exe).
2. connect an empty usb drive with at least 16 gb of space.
3. select the usb drive and the windows 11 iso in rufus.

   ![rufus main window](/img/rufus/rufus-main.png)

4. in **image option**, keep the standard windows installation option unless you specifically need an unsupported-hardware install.
5. when rufus shows the windows user experience dialog, enable **remove requirement for 4 gb+ ram, secure boot, and tpm 2.0** if your pc does not meet those requirements.

   ![rufus customize windows installation options](/img/rufus/rufus-customize-options.png)

6. keep the remaining recommended settings, then start the write process. everything on the usb will be erased.

   ![rufus confirm operation](/img/rufus/rufus-confirm-operation.png)

7. when it finishes, safely eject the usb and continue to [setup](/setup).

## why enterprise?

Enterprise editions expose additional Group Policy settings. This gives you finer control over telemetry and diagnostic-data policies than Home, while still keeping security updates available. It does not remove every form of data collection, so review each policy rather than disabling security features blindly.
