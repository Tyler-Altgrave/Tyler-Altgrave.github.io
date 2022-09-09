##  Nintendo Switch Console Prep
-   First, initialize the console
-   Then, format your SD card to work with your switch
-   Next, cofigure any settings you want to carry over to the CFW
-   Then, delete any saved internet networks and enable airplane mode

---

##  Downloads, SD Card Prep
-   Download the latest [Hekate Bootloader](https://github.com/CTCaer/hekate/releases)
    -   Copy The Bootloader Folder To The SD Card
    -   Copy The Payload .Bin To The RCMLoader over USB
-   Download the latest [Atmosphere Firmware](https://github.com/Atmosphere-NX/Atmosphere/releases)
    -   Extract All Of The Folders To The SD Card
-   Download The Latest Sigpatched (Google Them)
    -   Extract All Of The Folders To The SD Card
-   Download the latest [Lockpick_RCM Payload](https://github.com/dezem/SAK/releases/)
    -   Place the .bin file in the `/bootloader/payloads` folder

---

##  Create The emuMMC
-   Turn off the switch
-   Insert the SD Card
-   Insert the RCM Jig
-   Plug in the RCMLoader
-   Switch the RCMLoader to the blue profile (Hold +)
-   Hold Vol + & Power on the switch
-   emuMMC > Create emuMMC > SD Partition > Create A Backup > 29 FULL
-   emuMMC > Create emuMMC > SD Partition > Part 1
-   Finally, you should see the emuMMC is now "Enabled!"

---

##  Dump Yopur Switches Keys
-   Hekate Main Menu > Payloads > Lockpick_RCM.bin
-   If asked, select SysNAND
-   Files will be dumped to `/switch/title.keys` & `/switch/prod.keys`
    -   Copy these fiels to your desktop to use with SAK

---

##  Launch The CFW
-   Main Menu > Launch > CFW(emuMMC)
-   Verify The Switch Is Using The emuMMC and Atmosphere
    -   Settings > System > Current Version **[xx.x.x|AMS x.x.x|E]**

---

##  Installing NSP From Windows
[Goldleaf NRO](https://github.com/XorTroll/Goldleaf/releases) | [Switch Army Knife - SAK](https://github.com/dezem/SAK/releases/) | [Quark.jar](https://github.com/XorTroll/Goldleaf/releases) | [Zadig Driver](https://zadig.akeo.ie/) | [Java Runtime Environment](https://www.java.com/en/download/manual.jsp)


1.  Launch Goldleaf on the Switch
2.  Connect the switch to the PC via USB
3.  Launch Zadig and updated the "Goldleaf" devices Driver to "libusbK (v#.#.#.#)
4.  Install Java Runtime Environment
5.  Launch Quark to install NSP's
    1.  Select `Add New Path` and select the folder containing your NSP files
    2.  Install NSP Games From Goldleaf using the `Remote PC (via USB)` option

---

##  Installing NSP From USB Drive
-   Create an NSP folder at a USB Drive
-   Downlaod NSP Files From NSW2U
    -   Or Download XCI/NSZ and Convert Them With SAK
-   Launch Goldleaf On The Switch
-   Install NSP Games From The USB Drive to The SD Card

---

##  Installing NSP From SD Card
-   Create an NSP folder at the SD Card Root
-   Downlaod NSP Files From NSW2U
    -   Or Download XCI/NSZ and Convert Them With SAK
-   Launch Goldleaf On The Switch
-   Install NSP Games From The SD Card to The SD Card

---

##  Install Edizon + Cheat Overlay
[Edizon NRO](https://github.com/WerWolv/EdiZon/releases) | [ovlEdiZon.ovl](https://github.com/WerWolv/EdiZon/releases) | [nx-ovlloader.zip](https://github.com/WerWolv/nx-ovlloader/releases/) | [ovlmenu](https://github.com/WerWolv/Tesla-Menu/releases) | 

1.  Turn off the switch and insert the SD card into the PC
2.  Extract the Edizon.nro file to `/switch/`
3.  Extract nx-ovlloader to `/`
4.  Extract the ovlmenu.ovl to `/switch/.overlays/`
5.  Extract the ovlEdiZon.ovl to `/switch/.overlays/`
6.  Disable "Auto-Enable Cheats for Atmosphere"
    1.  Open `/atmosphere/config_templates/system_settings.ini`
    2.  Change `; dmnt_cheats_enabled_by_default = u8!0x1` to `dmnt_cheats_enabled_by_default = u8!0x0`
    3.  Move `/atmosphere/config_templates/system_settings.ini` to `/atmosphere/config/system_settings.ini` 
    4.  Reboot the switch into CFW
7.   Launch the overlay using `[L] + [D-Pad Down] + [Right Thumbstick Button]` while in-game

---

##  Save Modifying
[SSBU Unlocker](https://github.com/CapitanRetraso/Ultimate-Smasher/releases/) | [MK8 Unlocker](https://gamebanana.com/mods/50150)

-   Use Edizon To Backup Your Saves
-   Copy The Save Files To Your Desktop
-   Make A Duplicate Of The Timestamped Directory
-   Rename The Duplicate to "100%"
-   Overwrite The Renamed Backup Files
-   Restore The 100% Save Using Edizon 