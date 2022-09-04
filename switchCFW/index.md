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

##  Launch The CFW
-   Main Menu > Launch > CFW(emuMMC)
-   Verify The Switch Is Using The emuMMC and Atmosphere
    -   Settings > System > Current Version **[xx.x.x|AMS x.x.x|E]**