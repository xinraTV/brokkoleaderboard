# ---------------------------
#   Import Libraries
# ---------------------------
import os
import sys
import json
import codecs
import time

import clr
clr.AddReference("IronPython.SQLite.dll")
clr.AddReference("IronPython.Modules.dll")

# ---------------------------
#   [Required] Script Information
# ---------------------------
ScriptName = "Brokkoleaderboard"
Website = "https://github.com/xinraTV/brokkoleaderboard"
Description = "Right click -> insert api key"
Creator = "xinraTV"
Version = "1.0.0"

# ---------------------------
#   Define Global Variables
# ---------------------------
global lastUpdate
lastUpdate = 0


def Init():
    return


def Execute(data):
    return


def Tick():
    global lastUpdate
    if time.time() >= lastUpdate + 10:
        lastUpdate = time.time()
        with codecs.open(os.path.join(os.path.dirname(__file__), "toplist.json"), encoding="utf-8-sig", mode="w+") as f:
            json.dump(Parent.GetTopCurrency(10), f, encoding="utf-8")
    return
