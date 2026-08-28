---
sidebar_position: 3
slug: /install-windows-11
---

# install windows 11

Windows 11 is the best fit when your PC has more than 8 GB of RAM and modern hardware. Choose it for current security features, modern driver support, and the newest Windows features.

## download windows 11

Choose the regular release or LTSC. LTSC is intended for systems that need a minimal, long-term servicing setup; the regular release is the better default for most PCs.

<div className="downloadChoices">
  <a className="button button--primary button--lg" href="https://buzzheavier.com/k1g5we7lqkw9" target="_blank" rel="noopener noreferrer">Windows 11</a>
  <a className="button button--secondary button--outline button--lg" href="https://buzzheavier.com/2gtemvaqgfm3" target="_blank" rel="noopener noreferrer">Windows 11 LTSC</a>
</div>

## write the usb with rufus

1. Download [Rufus from its official website](https://rufus.ie/).
2. Connect an empty USB drive with at least 8 GB of space.
3. Select the USB drive and the Windows 11 ISO in Rufus.
4. In **Image option**, keep the standard Windows installation option unless you specifically need an unsupported-hardware install.
5. When Rufus shows the Windows User Experience dialog, enable **Remove requirement for 4 GB+ RAM, Secure Boot, and TPM 2.0** if your PC does not meet those requirements.
6. Keep the remaining recommended settings, then start the write process. Everything on the USB will be erased.
7. When it finishes, safely eject the USB and continue to [setup](/setup).

## why enterprise?

Enterprise editions expose additional Group Policy settings. This gives you finer control over telemetry and diagnostic-data policies than Home, while still keeping security updates available. It does not remove every form of data collection, so review each policy rather than disabling security features blindly.

:::warning check compatibility first
Windows 11 normally expects TPM 2.0, Secure Boot, UEFI, and at least 4 GB of RAM. IoT Enterprise editions have relaxed hardware requirements and can help on unsupported systems; see the [Windows 11 IoT setup guide](https://massgrave.dev/windows10_eol#windows-11-iot-enterprise-editions). Windows 11 24H2 still requires a CPU with SSE4.2 and POPCNT; there is no bypass for those instructions. Check your CPU on [CPU-World](https://www.cpu-world.com/) before installing.
:::
