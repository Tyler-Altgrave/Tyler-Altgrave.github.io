##  Nintendo Switch Console Prep
-   First, initialize the console
-   Then, format your SD card to work with your switch
-   Next, cofigure any settings you want to carry over to the CFW
-   Then, delete any saved internet networks and enable airplane mode


##  Downloads, SD Card Prep
-   Download the latest [Hekate Bootloader](https://github.com/CTCaer/hekate/releases)
    -   Copy The Bootloader Folder To The SD Card
    -   Copy The Payload .Bin To The RCMLoader over USB
-   Download the latest [Atmosphere Firmware](https://github.com/Atmosphere-NX/Atmosphere/releases)
    -   Extract All Of The Folders To The SD Card
-   Download The Latest Sigpatched (Google Them)
    -   Extract All Of The Folders To The SD Card
-   Download the latest [Goldleaf NRO + Quark.jar](https://github.com/XorTroll/Goldleaf/releases)
    -   Extract The NRO File To The switch Folder
    -   Use Goldleaf On Switch To Install NPS's
    -   Use Quark.jar On Windows To Install NPS's Over USB
-   Download the latest [Lockpick_RCM Payload](https://github.com/dezem/SAK/releases/)
    -   Place the .bin file in the `/bootloader/payloads` folder
-   Download the latest [Switch Army Knife - SAK](https://github.com/dezem/SAK/releases/)
    -   Use This On Windows To Convert XCI/NSZ To NSP 

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
-   
##  Dump Yopur Switches Keys
-   Hekate Main Menu > Payloads > Lockpick_RCM.bin
-   If asked, select SysNAND
-   Files will be dumped to `/switch/title.keys` & `/switch/prod.keys`
    -   Copy these fiels to your desktop to use with SAK

##  Launch The CFW
-   Main Menu > Launch > CFW(emuMMC)
-   Verify The Switch Is Using The emuMMC and Atmosphere
    -   Settings > System > Current Version **[xx.x.x|AMS x.x.x|E]**

##  Installing NSP From Windows
-   Downlaod NSP Files From NSW2U
    -   Or Download XCI/NSZ and Convert Them With SAK
-   Launch Goldleaf On The Switch
-   Select `Add New Path` and select the folder containing your NSP files
-   Install NSP Games From Goldleaf using the `Remote PC (via USB)` option

##  Installing NSP From USB Drive
-   Create an NSP folder at a USB Drive
-   Downlaod NSP Files From NSW2U
    -   Or Download XCI/NSZ and Convert Them With SAK
-   Launch Goldleaf On The Switch
-   Install NSP Games From The USB Drive to The SD Card

##  Installing NSP From SD Card
-   Create an NSP folder at the SD Card Root
-   Downlaod NSP Files From NSW2U
    -   Or Download XCI/NSZ and Convert Them With SAK
-   Launch Goldleaf On The Switch
-   Install NSP Games From The SD Card to The SD Card