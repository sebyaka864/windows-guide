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

open **command prompt** and paste the following command. it installs supported x86 and x64 visual c++ redistributables with winget.

```bat
winget install --id=Microsoft.VCRedist.2005.x86 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2005.x64 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2008.x86 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2008.x64 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2010.x86 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2010.x64 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2012.x86 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2012.x64 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2013.x86 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2013.x64 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2015+.x86 -e --force -h --accept-package-agreements && winget install --id=Microsoft.VCRedist.2015+.x64 -e --force -h --accept-package-agreements
```

:::caution read the prompt before continuing
the command installs software packages. review winget's output and only continue if you are happy with what it is installing.
:::

## additional components

- [openal installer](https://www.openal.org/downloads/oalinst.zip)
- [microsoft xna framework 4.0 redistributable](https://download.microsoft.com/download/a/c/2/ac2c903b-e6e8-42c2-9fd7-bebac362a930/xnafx40_redist.msi)
- [directx end-user runtime web installer](https://download.microsoft.com/download/1/7/1/1718ccc4-6315-4d8e-9543-8e28a4e18c4c/dxwebsetup.exe)

download these only when an application requires them. after installation, restart before testing the app again.
