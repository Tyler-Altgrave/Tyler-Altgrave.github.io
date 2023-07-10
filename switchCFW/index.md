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
-   Download The Latest ([Sigpatches](https://gbatemp.net/threads/sigpatches-for-atmosphere-hekate-fss0-fusee-package3.571543/))
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

##  Installing NSP From Windows (Bulk)
[Tinfoil NSP](https://tinfoil.io/Download) | [NUT File Transfer](https://github.com/blawar/nut/releases) | [Tinfoil Driver](https://github.com/blawar/nut/releases)


1.  Install the tinfoil driver
2.  Install the tinfoil NSP using goldleaf
3.  launch NUT on windows
4.  Scan for games
5.  Launch Tinfoil on the switch
    1.  Enable "Unsigned Code" (Up, Up, Down, Down, Left, Right, Left, Right, B, A +)
5.  Navigate to New Games and click "A" on a game
    1.  Include All DLC
    2.  Include Latest Update
5.  Navigate to queue to track the progress of the install
6.  Once finished, close Tinfoil for the game library top update


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
  
---

##  SSBU Mods
[Skyline](https://github.com/skyline-dev/skyline/releases) | [ARCropolis](https://github.com/Raytwo/ARCropolis/releases) | [SSBU Mods](https://gamebanana.com/mods/games/6498)

-   Download Both Zips
-   Extract ARCropolis to The root directory of the SD Card
-   Extract `exefs` to the SSBU contents directory `atmosphere\Ccontents\01006a800016e000` on the SD Card
-   Create a new directory in the `\ultimate` directory called "mods" 
-   Download Mods and extract them to the `\ultimate\mods` directory
    -   Each mod must be inside of a named folder, IE:
        -   `\ultimate\mods\ModNumberOne\fighter\`
        -   `\ultimate\mods\ModNumberTwo\sound\`
        -   `\ultimate\mods\ModNumberTwo\ui\`
        -   `\ultimate\mods\ModNumberThree\stage\`
  
---

##  Just Dance 2023, Offline Crack
[DBI MTP](https://github.com/rashevskyv/dbi/releases)

-   Extract the DBI.nro and dbi.config file to `/switch/DBI`
-   Install Just Dance 2023, The Updates and DLC
-   Start Just Dance
    -   Proceed until you can't go any further (generates save files)
-   Launch dbibackend.exe on the desktop
    -   Add the Nintendo Switch Folder
    -   Start Server
-   Connect the switch and launch the DBI applet
    -   Run MTP Responder
-   On windows
    -   Access the Nintendo Switch device
    -   Copy the `SD_Cache.0000, SD_Cache.0001 and SD_Cache.0002` directories to the `Nintendo Switch\7: Saves\Installed games\Just Dance®` directory
    -   Copy the `OfflineSaveNx.txt` file into the `Nintendo Switch\7: Saves\Installed games\Just Dance®\{{your username}}` directory
-   Once all files are transfered, launch the game and change the language backl to English
    -   Main Menu, Settings Icon, Speaker Icon, Bottom Option, English