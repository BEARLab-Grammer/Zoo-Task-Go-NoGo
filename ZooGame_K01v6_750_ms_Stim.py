#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.10),
    on August 13, 2022, at 16:32
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('2020.2.10')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.10'
expName = 'ZooGame_K01v6_750 ms Stim'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '01', 'eeg': False}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\jpdiaz\\Documents\\psychophysics\\PsychoPy\\Go-NoGo-Zoo-Task - Public\\ZooGame_K01v6_750_ms_Stim.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.ERROR)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Welcome1"
Welcome1Clock = core.Clock()
win.mouseVisible = False
text = visual.TextStim(win=win, name='text',
    text='Welcome to the Zoo!',
    font='Arial',
    pos=(0, 0.72), height=0.1, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
image_1 = visual.ImageStim(
    win=win,
    name='image_1', units='height', 
    image='stimuli/Zookeeper1.bmp', mask=None,
    ori=0, pos=(0, 0.02), size=(0.75,0.555),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
text_2 = visual.TextStim(win=win, name='text_2',
    text='default text',
    font='Arial',
    pos=(0, -0.7), height=0.08, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "OrangFam"
OrangFamClock = core.Clock()
fmsgN=0 
image_3 = visual.ImageStim(
    win=win,
    name='image_3', units='height', 
    image='stimuli/Orang2.bmp', mask=None,
    ori=0, pos=(-0.35, 0.25), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_4 = visual.ImageStim(
    win=win,
    name='image_4', units='height', 
    image='stimuli/Orang1.bmp', mask=None,
    ori=0, pos=(0.35, 0.25), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
image_5 = visual.ImageStim(
    win=win,
    name='image_5', units='height', 
    image='stimuli/Orang3.bmp', mask=None,
    ori=0, pos=(0, -0.18), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
text_orangfam = visual.TextStim(win=win, name='text_orangfam',
    text='default text',
    font='Arial',
    pos=(0, -0.855), height=0.068, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "Fred"
FredClock = core.Clock()
text_9 = visual.TextStim(win=win, name='text_9',
    text='Fred',
    font='Arial',
    pos=(0, -0.6), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
white_backgrnd1 = visual.Rect(
    win=win, name='white_backgrnd1',units='height', 
    width=(0.64, 0.48)[0], height=(0.64, 0.48)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
image_13 = visual.ImageStim(
    win=win,
    name='image_13', units='height', 
    image='stimuli/Orang2.bmp', mask=None,
    ori=0, pos=(0, 0), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "Sally"
SallyClock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='Sally',
    font='Arial',
    pos=(0, -0.6), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
white_backgrnd2 = visual.Rect(
    win=win, name='white_backgrnd2',units='height', 
    width=(0.64, 0.48)[0], height=(0.64, 0.48)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
image_14 = visual.ImageStim(
    win=win,
    name='image_14', units='height', 
    image='stimuli/Orang1.bmp', mask=None,
    ori=0, pos=(0, 0), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "Molly"
MollyClock = core.Clock()
text_17 = visual.TextStim(win=win, name='text_17',
    text='Molly',
    font='Arial',
    pos=(0, -0.6), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
white_backgrnd3 = visual.Rect(
    win=win, name='white_backgrnd3',units='height', 
    width=(0.64, 0.48)[0], height=(0.64, 0.48)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
image_15 = visual.ImageStim(
    win=win,
    name='image_15', units='height', 
    image='stimuli/Orang3.bmp', mask=None,
    ori=0, pos=(0, 0), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "Instructions"
InstructionsClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "ZooMap1"
ZooMap1Clock = core.Clock()
mapmsgN=0

# BrainProducts EEG Code Starts Here:
if expInfo['eeg']:
    from psychopy import parallel, core
    # "Serial Port (LFP1)"
    port = parallel.ParallelPort(address=0x378)
    # Send Start Marker (S1)
    port.setData( int("00000001", 2) )
    core.wait(0.2)
    port.setData(0) # set all pins back to low(0) 
zoomap = visual.ImageStim(
    win=win,
    name='zoomap', units='height', 
    image='stimuli/MapStop_Start1.bmp', mask=None,
    ori=0, pos=(0, 0.02), size=(1.3, 0.78),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
text_zoomap1 = visual.TextStim(win=win, name='text_zoomap1',
    text='default text',
    font='Arial',
    pos=(0, -0.85), height=0.07, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "Welcome2"
Welcome2Clock = core.Clock()
image_6 = visual.ImageStim(
    win=win,
    name='image_6', units='height', 
    image='stimuli/Zookeeper1.bmp', mask=None,
    ori=0, pos=(0, 0.02), size=(0.75,0.555),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
text_14 = visual.TextStim(win=win, name='text_14',
    text='Are you ready to help Zookeeper \nMelissa?',
    font='Arial',
    pos=(0, -0.7), height=0.1, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "OrangFam"
OrangFamClock = core.Clock()
fmsgN=0 
image_3 = visual.ImageStim(
    win=win,
    name='image_3', units='height', 
    image='stimuli/Orang2.bmp', mask=None,
    ori=0, pos=(-0.35, 0.25), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
image_4 = visual.ImageStim(
    win=win,
    name='image_4', units='height', 
    image='stimuli/Orang1.bmp', mask=None,
    ori=0, pos=(0.35, 0.25), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
image_5 = visual.ImageStim(
    win=win,
    name='image_5', units='height', 
    image='stimuli/Orang3.bmp', mask=None,
    ori=0, pos=(0, -0.18), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
text_orangfam = visual.TextStim(win=win, name='text_orangfam',
    text='default text',
    font='Arial',
    pos=(0, -0.855), height=0.068, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "PracticeReady"
PracticeReadyClock = core.Clock()
text_15 = visual.TextStim(win=win, name='text_15',
    text="Let's Practice!",
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=2, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "Prac"
PracClock = core.Clock()
pnumnogo=0
paccnogo=0
Fxation = visual.ShapeStim(
    win=win, name='Fxation', vertices='cross',units='height', 
    size=(0.08, 0.08),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
Stim = visual.ImageStim(
    win=win,
    name='Stim', units='height', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
Respond = keyboard.Keyboard()

# Initialize components for Routine "practiceWindow"
practiceWindowClock = core.Clock()
practice_window = keyboard.Keyboard()

# Initialize components for Routine "PracticeOut"
PracticeOutClock = core.Clock()
image = visual.ImageStim(
    win=win,
    name='image', units='height', 
    image='stimuli/MapFriends.bmp', mask=None,
    ori=0, pos=(-0.5, 0), size=(0.4, 0.294),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
OutPrac = visual.TextStim(win=win, name='OutPrac',
    text='Great job helping! ',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "ZooMap1"
ZooMap1Clock = core.Clock()
mapmsgN=0

# BrainProducts EEG Code Starts Here:
if expInfo['eeg']:
    from psychopy import parallel, core
    # "Serial Port (LFP1)"
    port = parallel.ParallelPort(address=0x378)
    # Send Start Marker (S1)
    port.setData( int("00000001", 2) )
    core.wait(0.2)
    port.setData(0) # set all pins back to low(0) 
zoomap = visual.ImageStim(
    win=win,
    name='zoomap', units='height', 
    image='stimuli/MapStop_Start1.bmp', mask=None,
    ori=0, pos=(0, 0.02), size=(1.3, 0.78),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
text_zoomap1 = visual.TextStim(win=win, name='text_zoomap1',
    text='default text',
    font='Arial',
    pos=(0, -0.85), height=0.07, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "Intro"
IntroClock = core.Clock()
intro = visual.TextStim(win=win, name='intro',
    text='Get Ready!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_12 = keyboard.Keyboard()

# Initialize components for Routine "BlockList"
BlockListClock = core.Clock()
accnogo=0
numnogo=0

Fixation2 = visual.ShapeStim(
    win=win, name='Fixation2', vertices='cross',units='height', 
    size=(0.08, 0.08),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
Stim2 = visual.ImageStim(
    win=win,
    name='Stim2', units='height', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.6, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "blankWindow"
blankWindowClock = core.Clock()
response_window = keyboard.Keyboard()

# Initialize components for Routine "OutBlock1"
OutBlock1Clock = core.Clock()
image_2 = visual.ImageStim(
    win=win,
    name='image_2', units='height', 
    image='sin', mask=None,
    ori=0, pos=(-0.65, 0), size=(0.294, 0.294),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
Feedback_text = visual.TextStim(win=win, name='Feedback_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_15 = keyboard.Keyboard()

# Initialize components for Routine "ZooMap2"
ZooMap2Clock = core.Clock()
image_7 = visual.ImageStim(
    win=win,
    name='image_7', units='height', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.02), size=(1.3, 0.78),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
text_break = visual.TextStim(win=win, name='text_break',
    text='default text',
    font='Arial',
    pos=(0, -0.855), height=0.068, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_13 = keyboard.Keyboard()

# Initialize components for Routine "Out"
OutClock = core.Clock()
text_18 = visual.TextStim(win=win, name='text_18',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_14 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Welcome1"-------
continueRoutine = True
# update component parameters for each repeat
wmsg1='This is Zookeeper Melissa.\nShe needs your help!'
text_2.setText(wmsg1)
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
Welcome1Components = [text, image_1, text_2, key_resp_2]
for thisComponent in Welcome1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Welcome1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Welcome1"-------
while continueRoutine:
    # get current time
    t = Welcome1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Welcome1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *image_1* updates
    if image_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_1.frameNStart = frameN  # exact frame index
        image_1.tStart = t  # local t and not account for scr refresh
        image_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_1, 'tStartRefresh')  # time at next scr refresh
        image_1.setAutoDraw(True)
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Welcome1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Welcome1"-------
for thisComponent in Welcome1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Welcome1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "OrangFam"-------
continueRoutine = True
# update component parameters for each repeat
ftmp=["These are Melissa's three orangutan friends, Fred, Sally and Molly.\n And they are going to be your helpers too.",
"Please remember her orangutan friends because you don’t want to put them in cages."]
fmsg=ftmp[fmsgN]
text_orangfam.setText(fmsg)
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
OrangFamComponents = [image_3, image_4, image_5, text_orangfam, key_resp_3]
for thisComponent in OrangFamComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
OrangFamClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "OrangFam"-------
while continueRoutine:
    # get current time
    t = OrangFamClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=OrangFamClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_3* updates
    if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_3.frameNStart = frameN  # exact frame index
        image_3.tStart = t  # local t and not account for scr refresh
        image_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
        image_3.setAutoDraw(True)
    
    # *image_4* updates
    if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_4.frameNStart = frameN  # exact frame index
        image_4.tStart = t  # local t and not account for scr refresh
        image_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
        image_4.setAutoDraw(True)
    
    # *image_5* updates
    if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_5.frameNStart = frameN  # exact frame index
        image_5.tStart = t  # local t and not account for scr refresh
        image_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
        image_5.setAutoDraw(True)
    
    # *text_orangfam* updates
    if text_orangfam.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_orangfam.frameNStart = frameN  # exact frame index
        text_orangfam.tStart = t  # local t and not account for scr refresh
        text_orangfam.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_orangfam, 'tStartRefresh')  # time at next scr refresh
        text_orangfam.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in OrangFamComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "OrangFam"-------
for thisComponent in OrangFamComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
fmsgN=1
# the Routine "OrangFam" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Fred"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
FredComponents = [text_9, white_backgrnd1, image_13, key_resp_4]
for thisComponent in FredComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
FredClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Fred"-------
while continueRoutine:
    # get current time
    t = FredClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=FredClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_9* updates
    if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_9.frameNStart = frameN  # exact frame index
        text_9.tStart = t  # local t and not account for scr refresh
        text_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
        text_9.setAutoDraw(True)
    
    # *white_backgrnd1* updates
    if white_backgrnd1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        white_backgrnd1.frameNStart = frameN  # exact frame index
        white_backgrnd1.tStart = t  # local t and not account for scr refresh
        white_backgrnd1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(white_backgrnd1, 'tStartRefresh')  # time at next scr refresh
        white_backgrnd1.setAutoDraw(True)
    
    # *image_13* updates
    if image_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_13.frameNStart = frameN  # exact frame index
        image_13.tStart = t  # local t and not account for scr refresh
        image_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_13, 'tStartRefresh')  # time at next scr refresh
        image_13.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in FredComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Fred"-------
for thisComponent in FredComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Fred" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Sally"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
SallyComponents = [text_10, white_backgrnd2, image_14, key_resp_5]
for thisComponent in SallyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
SallyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Sally"-------
while continueRoutine:
    # get current time
    t = SallyClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=SallyClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_10* updates
    if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_10.frameNStart = frameN  # exact frame index
        text_10.tStart = t  # local t and not account for scr refresh
        text_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
        text_10.setAutoDraw(True)
    
    # *white_backgrnd2* updates
    if white_backgrnd2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        white_backgrnd2.frameNStart = frameN  # exact frame index
        white_backgrnd2.tStart = t  # local t and not account for scr refresh
        white_backgrnd2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(white_backgrnd2, 'tStartRefresh')  # time at next scr refresh
        white_backgrnd2.setAutoDraw(True)
    
    # *image_14* updates
    if image_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_14.frameNStart = frameN  # exact frame index
        image_14.tStart = t  # local t and not account for scr refresh
        image_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_14, 'tStartRefresh')  # time at next scr refresh
        image_14.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in SallyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Sally"-------
for thisComponent in SallyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Sally" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Molly"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
MollyComponents = [text_17, white_backgrnd3, image_15, key_resp_6]
for thisComponent in MollyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
MollyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Molly"-------
while continueRoutine:
    # get current time
    t = MollyClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=MollyClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_17* updates
    if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_17.frameNStart = frameN  # exact frame index
        text_17.tStart = t  # local t and not account for scr refresh
        text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
        text_17.setAutoDraw(True)
    
    # *white_backgrnd3* updates
    if white_backgrnd3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        white_backgrnd3.frameNStart = frameN  # exact frame index
        white_backgrnd3.tStart = t  # local t and not account for scr refresh
        white_backgrnd3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(white_backgrnd3, 'tStartRefresh')  # time at next scr refresh
        white_backgrnd3.setAutoDraw(True)
    
    # *image_15* updates
    if image_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_15.frameNStart = frameN  # exact frame index
        image_15.tStart = t  # local t and not account for scr refresh
        image_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_15, 'tStartRefresh')  # time at next scr refresh
        image_15.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in MollyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Molly"-------
for thisComponent in MollyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Molly" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instructions"-------
continueRoutine = True
# update component parameters for each repeat
inmsg="The animals have gotten out of their cages!\n"\
      "You can help Zookeeper Melissa and her orangutan friends \n"\
      "by pressing the button when you see an animal.\n\n"\
      "Remember that the orangutans are helping.\n"\
      "Don't press the button when you see an orangutan friend!"
text_12.setText(inmsg)
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# keep track of which components have finished
InstructionsComponents = [text_12, key_resp_8]
for thisComponent in InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instructions"-------
while continueRoutine:
    # get current time
    t = InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_12* updates
    if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_12.frameNStart = frameN  # exact frame index
        text_12.tStart = t  # local t and not account for scr refresh
        text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
        text_12.setAutoDraw(True)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions"-------
for thisComponent in InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ZooMap1"-------
continueRoutine = True
# update component parameters for each repeat
maptmp=["Here is the map of the zoo and we are going to help Zookeeper Melissa in different areas.",
"Let’s begin at the Zoo entrance!"]
mapmsg = maptmp[mapmsgN]

text_zoomap1.setText(mapmsg)
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
ZooMap1Components = [zoomap, text_zoomap1, key_resp_7]
for thisComponent in ZooMap1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ZooMap1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ZooMap1"-------
while continueRoutine:
    # get current time
    t = ZooMap1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ZooMap1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *zoomap* updates
    if zoomap.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        zoomap.frameNStart = frameN  # exact frame index
        zoomap.tStart = t  # local t and not account for scr refresh
        zoomap.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(zoomap, 'tStartRefresh')  # time at next scr refresh
        zoomap.setAutoDraw(True)
    
    # *text_zoomap1* updates
    if text_zoomap1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_zoomap1.frameNStart = frameN  # exact frame index
        text_zoomap1.tStart = t  # local t and not account for scr refresh
        text_zoomap1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_zoomap1, 'tStartRefresh')  # time at next scr refresh
        text_zoomap1.setAutoDraw(True)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ZooMap1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ZooMap1"-------
for thisComponent in ZooMap1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
mapmsgN=1
# the Routine "ZooMap1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Welcome2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
Welcome2Components = [image_6, text_14, key_resp_9]
for thisComponent in Welcome2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Welcome2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Welcome2"-------
while continueRoutine:
    # get current time
    t = Welcome2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Welcome2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_6* updates
    if image_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_6.frameNStart = frameN  # exact frame index
        image_6.tStart = t  # local t and not account for scr refresh
        image_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
        image_6.setAutoDraw(True)
    
    # *text_14* updates
    if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_14.frameNStart = frameN  # exact frame index
        text_14.tStart = t  # local t and not account for scr refresh
        text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
        text_14.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Welcome2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Welcome2"-------
for thisComponent in Welcome2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Welcome2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "OrangFam"-------
continueRoutine = True
# update component parameters for each repeat
ftmp=["These are Melissa's three orangutan friends, Fred, Sally and Molly.\n And they are going to be your helpers too.",
"Please remember her orangutan friends because you don’t want to put them in cages."]
fmsg=ftmp[fmsgN]
text_orangfam.setText(fmsg)
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
OrangFamComponents = [image_3, image_4, image_5, text_orangfam, key_resp_3]
for thisComponent in OrangFamComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
OrangFamClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "OrangFam"-------
while continueRoutine:
    # get current time
    t = OrangFamClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=OrangFamClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_3* updates
    if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_3.frameNStart = frameN  # exact frame index
        image_3.tStart = t  # local t and not account for scr refresh
        image_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
        image_3.setAutoDraw(True)
    
    # *image_4* updates
    if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_4.frameNStart = frameN  # exact frame index
        image_4.tStart = t  # local t and not account for scr refresh
        image_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
        image_4.setAutoDraw(True)
    
    # *image_5* updates
    if image_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_5.frameNStart = frameN  # exact frame index
        image_5.tStart = t  # local t and not account for scr refresh
        image_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
        image_5.setAutoDraw(True)
    
    # *text_orangfam* updates
    if text_orangfam.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_orangfam.frameNStart = frameN  # exact frame index
        text_orangfam.tStart = t  # local t and not account for scr refresh
        text_orangfam.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_orangfam, 'tStartRefresh')  # time at next scr refresh
        text_orangfam.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in OrangFamComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "OrangFam"-------
for thisComponent in OrangFamComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
fmsgN=1
# the Routine "OrangFam" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "PracticeReady"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
PracticeReadyComponents = [text_15, key_resp_10]
for thisComponent in PracticeReadyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PracticeReadyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "PracticeReady"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = PracticeReadyClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PracticeReadyClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_15* updates
    if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_15.frameNStart = frameN  # exact frame index
        text_15.tStart = t  # local t and not account for scr refresh
        text_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
        text_15.setAutoDraw(True)
    if text_15.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_15.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            text_15.tStop = t  # not accounting for scr refresh
            text_15.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_15, 'tStopRefresh')  # time at next scr refresh
            text_15.setAutoDraw(False)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > key_resp_10.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            key_resp_10.tStop = t  # not accounting for scr refresh
            key_resp_10.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_resp_10, 'tStopRefresh')  # time at next scr refresh
            key_resp_10.status = FINISHED
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PracticeReadyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "PracticeReady"-------
for thisComponent in PracticeReadyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_15.started', text_15.tStartRefresh)
thisExp.addData('text_15.stopped', text_15.tStopRefresh)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.nextEntry()

# set up handler to look after randomisation of conditions etc
Practice = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli\\Practice.csv'),
    seed=None, name='Practice')
thisExp.addLoop(Practice)  # add the loop to the experiment
thisPractice = Practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
if thisPractice != None:
    for paramName in thisPractice:
        exec('{} = thisPractice[paramName]'.format(paramName))

for thisPractice in Practice:
    currentLoop = Practice
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Prac"-------
    continueRoutine = True
    routineTimer.add(1.050000)
    # update component parameters for each repeat
    # assign correct keypress
    if pimage == 'Go':
        pcorrectKey = 1
    
    if pimage == 'NoGo':
        pcorrectKey = None
    
    thisExp.addData('pcorrectKey', pcorrectKey) #save correct key response
    
    Stim.setImage(ps1)
    Respond.keys = []
    Respond.rt = []
    _Respond_allKeys = []
    # keep track of which components have finished
    PracComponents = [Fxation, Stim, Respond]
    for thisComponent in PracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Prac"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = PracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PracClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Fxation* updates
        if Fxation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Fxation.frameNStart = frameN  # exact frame index
            Fxation.tStart = t  # local t and not account for scr refresh
            Fxation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Fxation, 'tStartRefresh')  # time at next scr refresh
            Fxation.setAutoDraw(True)
        if Fxation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Fxation.tStartRefresh + 0.3-frameTolerance:
                # keep track of stop time/frame for later
                Fxation.tStop = t  # not accounting for scr refresh
                Fxation.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Fxation, 'tStopRefresh')  # time at next scr refresh
                Fxation.setAutoDraw(False)
        
        # *Stim* updates
        if Stim.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            Stim.frameNStart = frameN  # exact frame index
            Stim.tStart = t  # local t and not account for scr refresh
            Stim.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Stim, 'tStartRefresh')  # time at next scr refresh
            Stim.setAutoDraw(True)
        if Stim.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Stim.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                Stim.tStop = t  # not accounting for scr refresh
                Stim.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Stim, 'tStopRefresh')  # time at next scr refresh
                Stim.setAutoDraw(False)
        
        # *Respond* updates
        waitOnFlip = False
        if Respond.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            Respond.frameNStart = frameN  # exact frame index
            Respond.tStart = t  # local t and not account for scr refresh
            Respond.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Respond, 'tStartRefresh')  # time at next scr refresh
            Respond.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(Respond.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(Respond.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if Respond.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Respond.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                Respond.tStop = t  # not accounting for scr refresh
                Respond.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Respond, 'tStopRefresh')  # time at next scr refresh
                Respond.status = FINISHED
        if Respond.status == STARTED and not waitOnFlip:
            theseKeys = Respond.getKeys(keyList=['1', '5', 'space'], waitRelease=False)
            _Respond_allKeys.extend(theseKeys)
            if len(_Respond_allKeys):
                Respond.keys = _Respond_allKeys[0].name  # just the first key pressed
                Respond.rt = _Respond_allKeys[0].rt
                # was this correct?
                if (Respond.keys == str(pcorrectKey)) or (Respond.keys == pcorrectKey):
                    Respond.corr = 1
                else:
                    Respond.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Prac"-------
    for thisComponent in PracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if pimage == 'NoGo':
        pnumnogo=pnumnogo+1
        
        if Respond.corr:
            paccnogo=paccnogo+1
            
    thisExp.addData('pnumnogo', pnumnogo)
    thisExp.addData('paccnogo', paccnogo)
    Practice.addData('Fxation.started', Fxation.tStartRefresh)
    Practice.addData('Fxation.stopped', Fxation.tStopRefresh)
    Practice.addData('Stim.started', Stim.tStartRefresh)
    Practice.addData('Stim.stopped', Stim.tStopRefresh)
    # check responses
    if Respond.keys in ['', [], None]:  # No response was made
        Respond.keys = None
        # was no response the correct answer?!
        if str(pcorrectKey).lower() == 'none':
           Respond.corr = 1;  # correct non-response
        else:
           Respond.corr = 0;  # failed to respond (incorrectly)
    # store data for Practice (TrialHandler)
    Practice.addData('Respond.keys',Respond.keys)
    Practice.addData('Respond.corr', Respond.corr)
    if Respond.keys != None:  # we had a response
        Practice.addData('Respond.rt', Respond.rt)
    Practice.addData('Respond.started', Respond.tStartRefresh)
    Practice.addData('Respond.stopped', Respond.tStopRefresh)
    
    # ------Prepare to start Routine "practiceWindow"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    practice_window.keys = []
    practice_window.rt = []
    _practice_window_allKeys = []
    # keep track of which components have finished
    practiceWindowComponents = [practice_window]
    for thisComponent in practiceWindowComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceWindowClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practiceWindow"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practiceWindowClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceWindowClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *practice_window* updates
        waitOnFlip = False
        if practice_window.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            practice_window.frameNStart = frameN  # exact frame index
            practice_window.tStart = t  # local t and not account for scr refresh
            practice_window.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practice_window, 'tStartRefresh')  # time at next scr refresh
            practice_window.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(practice_window.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(practice_window.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if practice_window.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > practice_window.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                practice_window.tStop = t  # not accounting for scr refresh
                practice_window.frameNStop = frameN  # exact frame index
                win.timeOnFlip(practice_window, 'tStopRefresh')  # time at next scr refresh
                practice_window.status = FINISHED
        if practice_window.status == STARTED and not waitOnFlip:
            theseKeys = practice_window.getKeys(keyList=['1', '5', 'space'], waitRelease=False)
            _practice_window_allKeys.extend(theseKeys)
            if len(_practice_window_allKeys):
                practice_window.keys = _practice_window_allKeys[0].name  # just the first key pressed
                practice_window.rt = _practice_window_allKeys[0].rt
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceWindowComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practiceWindow"-------
    for thisComponent in practiceWindowComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if practice_window.keys in ['', [], None]:  # No response was made
        practice_window.keys = None
    Practice.addData('practice_window.keys',practice_window.keys)
    if practice_window.keys != None:  # we had a response
        Practice.addData('practice_window.rt', practice_window.rt)
    thisExp.nextEntry()
    
# completed 1 repeats of 'Practice'

# get names of stimulus parameters
if Practice.trialList in ([], [None], None):
    params = []
else:
    params = Practice.trialList[0].keys()
# save data for this loop
Practice.saveAsText(filename + 'Practice.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "PracticeOut"-------
continueRoutine = True
# update component parameters for each repeat
pacc = Practice.data['Respond.corr'].sum()
pnum = Practice.nTotal

try:
    pmeanRt = Practice.data['Respond.rt'].mean()
except:
    print("no responses recorded!")
    pmeanRt = 0

if pnumnogo > 0:
    if (paccnogo/pnumnogo)*100 >= 90:
        pFeedback='Try to catch them even faster next time!'
    else:
        pFeedback='Keep watching out for the Orangutan friends!' 
else:
    pFeedback='This should not happen: numnogo = 0'

#[accnogo]/[numnogo] [acc]/[num] [meanrt]
pmsg = "%i/%i %i/%i %.2f" %(paccnogo,pnumnogo,pacc,pnum,pmeanRt) 

key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# keep track of which components have finished
PracticeOutComponents = [image, OutPrac, key_resp_11]
for thisComponent in PracticeOutComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PracticeOutClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "PracticeOut"-------
while continueRoutine:
    # get current time
    t = PracticeOutClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PracticeOutClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        image.setAutoDraw(True)
    
    # *OutPrac* updates
    if OutPrac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        OutPrac.frameNStart = frameN  # exact frame index
        OutPrac.tStart = t  # local t and not account for scr refresh
        OutPrac.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(OutPrac, 'tStartRefresh')  # time at next scr refresh
        OutPrac.setAutoDraw(True)
    
    # *key_resp_11* updates
    waitOnFlip = False
    if key_resp_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_11.frameNStart = frameN  # exact frame index
        key_resp_11.tStart = t  # local t and not account for scr refresh
        key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
        key_resp_11.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_11.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_11.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_11_allKeys.extend(theseKeys)
        if len(_key_resp_11_allKeys):
            key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
            key_resp_11.rt = _key_resp_11_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PracticeOutComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "PracticeOut"-------
for thisComponent in PracticeOutComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "PracticeOut" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "ZooMap1"-------
continueRoutine = True
# update component parameters for each repeat
maptmp=["Here is the map of the zoo and we are going to help Zookeeper Melissa in different areas.",
"Let’s begin at the Zoo entrance!"]
mapmsg = maptmp[mapmsgN]

text_zoomap1.setText(mapmsg)
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
ZooMap1Components = [zoomap, text_zoomap1, key_resp_7]
for thisComponent in ZooMap1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ZooMap1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "ZooMap1"-------
while continueRoutine:
    # get current time
    t = ZooMap1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ZooMap1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *zoomap* updates
    if zoomap.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        zoomap.frameNStart = frameN  # exact frame index
        zoomap.tStart = t  # local t and not account for scr refresh
        zoomap.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(zoomap, 'tStartRefresh')  # time at next scr refresh
        zoomap.setAutoDraw(True)
    
    # *text_zoomap1* updates
    if text_zoomap1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_zoomap1.frameNStart = frameN  # exact frame index
        text_zoomap1.tStart = t  # local t and not account for scr refresh
        text_zoomap1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_zoomap1, 'tStartRefresh')  # time at next scr refresh
        text_zoomap1.setAutoDraw(True)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ZooMap1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "ZooMap1"-------
for thisComponent in ZooMap1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
mapmsgN=1
# the Routine "ZooMap1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('stimuli\\BlockList.csv'),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Intro"-------
    continueRoutine = True
    routineTimer.add(3.000000)
    # update component parameters for each repeat
    key_resp_12.keys = []
    key_resp_12.rt = []
    _key_resp_12_allKeys = []
    # keep track of which components have finished
    IntroComponents = [intro, key_resp_12]
    for thisComponent in IntroComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    IntroClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Intro"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = IntroClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=IntroClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *intro* updates
        if intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            intro.frameNStart = frameN  # exact frame index
            intro.tStart = t  # local t and not account for scr refresh
            intro.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro, 'tStartRefresh')  # time at next scr refresh
            intro.setAutoDraw(True)
        if intro.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > intro.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                intro.tStop = t  # not accounting for scr refresh
                intro.frameNStop = frameN  # exact frame index
                win.timeOnFlip(intro, 'tStopRefresh')  # time at next scr refresh
                intro.setAutoDraw(False)
        
        # *key_resp_12* updates
        waitOnFlip = False
        if key_resp_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_12.frameNStart = frameN  # exact frame index
            key_resp_12.tStart = t  # local t and not account for scr refresh
            key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
            key_resp_12.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_12.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_12.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_12.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_12.tStop = t  # not accounting for scr refresh
                key_resp_12.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_12, 'tStopRefresh')  # time at next scr refresh
                key_resp_12.status = FINISHED
        if key_resp_12.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_12.getKeys(keyList=['space', 'return', 'num_enter'], waitRelease=False)
            _key_resp_12_allKeys.extend(theseKeys)
            if len(_key_resp_12_allKeys):
                key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
                key_resp_12.rt = _key_resp_12_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in IntroComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Intro"-------
    for thisComponent in IntroComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('intro.started', intro.tStartRefresh)
    blocks.addData('intro.stopped', intro.tStopRefresh)
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(trialFiles),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "BlockList"-------
        continueRoutine = True
        routineTimer.add(1.050000)
        # update component parameters for each repeat
        # assign correct keypress
        if image == 'Go':
            correctKey = 1
            trig = "1100101"
        
        if image == 'NoGo':
            correctKey = None
            trig = "1100110"
        
        thisExp.addData('correctKey', correctKey) #save correct key response
        Stim2.setImage(s1)
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        BlockListComponents = [Fixation2, Stim2, key_resp]
        for thisComponent in BlockListComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        BlockListClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "BlockList"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = BlockListClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=BlockListClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            if expInfo['eeg'] and Stim2.status == STARTED:
                port.setData( int(trig, 2) ) # send S 1; the 0's and 1's here reffer to if each pin is set to high(1) or low(0), which will consequently send out the trigger associated with the number that results from the pins set to high. Here my first pin (pin2) is set to send out 1 so sends out S1.     
                #core.wait(0.2) # need to wait before setting pin back to low in order to ensure the trigger is sent
                
            if expInfo['eeg'] and Stim2.status == STOPPED:
                port.setData(0) # set all pins back to low(0)
            
            # *Fixation2* updates
            if Fixation2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                Fixation2.frameNStart = frameN  # exact frame index
                Fixation2.tStart = t  # local t and not account for scr refresh
                Fixation2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Fixation2, 'tStartRefresh')  # time at next scr refresh
                Fixation2.setAutoDraw(True)
            if Fixation2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Fixation2.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    Fixation2.tStop = t  # not accounting for scr refresh
                    Fixation2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Fixation2, 'tStopRefresh')  # time at next scr refresh
                    Fixation2.setAutoDraw(False)
            
            # *Stim2* updates
            if Stim2.status == NOT_STARTED and tThisFlip >= .30-frameTolerance:
                # keep track of start time/frame for later
                Stim2.frameNStart = frameN  # exact frame index
                Stim2.tStart = t  # local t and not account for scr refresh
                Stim2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Stim2, 'tStartRefresh')  # time at next scr refresh
                Stim2.setAutoDraw(True)
            if Stim2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Stim2.tStartRefresh + 0.75-frameTolerance:
                    # keep track of stop time/frame for later
                    Stim2.tStop = t  # not accounting for scr refresh
                    Stim2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Stim2, 'tStopRefresh')  # time at next scr refresh
                    Stim2.setAutoDraw(False)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp.tStartRefresh + 0.75-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp.tStop = t  # not accounting for scr refresh
                    key_resp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                    key_resp.status = FINISHED
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['1', '5', 'space'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[0].name  # just the first key pressed
                    key_resp.rt = _key_resp_allKeys[0].rt
                    # was this correct?
                    if (key_resp.keys == str(correctKey)) or (key_resp.keys == correctKey):
                        key_resp.corr = 1
                    else:
                        key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in BlockListComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "BlockList"-------
        for thisComponent in BlockListComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # count number of nogos
        if gonogo == 102:
            numnogo=numnogo+1
            # count number of correct
            if key_resp.corr:
                accnogo=accnogo+1
        
        thisExp.addData('key_resp_rt', key_resp.rt)
        thisExp.addData('key_resp_corr', key_resp.corr)
        thisExp.addData('numnogo', numnogo)
        thisExp.addData('accnogo', accnogo)
        trials.addData('Fixation2.started', Fixation2.tStartRefresh)
        trials.addData('Fixation2.stopped', Fixation2.tStopRefresh)
        trials.addData('Stim2.started', Stim2.tStartRefresh)
        trials.addData('Stim2.stopped', Stim2.tStopRefresh)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
            # was no response the correct answer?!
            if str(correctKey).lower() == 'none':
               key_resp.corr = 1;  # correct non-response
            else:
               key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('key_resp.keys',key_resp.keys)
        trials.addData('key_resp.corr', key_resp.corr)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
        trials.addData('key_resp.started', key_resp.tStartRefresh)
        trials.addData('key_resp.stopped', key_resp.tStopRefresh)
        
        # ------Prepare to start Routine "blankWindow"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        response_window.keys = []
        response_window.rt = []
        _response_window_allKeys = []
        # keep track of which components have finished
        blankWindowComponents = [response_window]
        for thisComponent in blankWindowComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        blankWindowClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "blankWindow"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = blankWindowClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=blankWindowClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *response_window* updates
            waitOnFlip = False
            if response_window.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                response_window.frameNStart = frameN  # exact frame index
                response_window.tStart = t  # local t and not account for scr refresh
                response_window.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(response_window, 'tStartRefresh')  # time at next scr refresh
                response_window.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(response_window.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(response_window.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if response_window.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > response_window.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    response_window.tStop = t  # not accounting for scr refresh
                    response_window.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(response_window, 'tStopRefresh')  # time at next scr refresh
                    response_window.status = FINISHED
            if response_window.status == STARTED and not waitOnFlip:
                theseKeys = response_window.getKeys(keyList=['1', '5', 'space'], waitRelease=False)
                _response_window_allKeys.extend(theseKeys)
                if len(_response_window_allKeys):
                    response_window.keys = _response_window_allKeys[0].name  # just the first key pressed
                    response_window.rt = _response_window_allKeys[0].rt
                    # was this correct?
                    if (response_window.keys == str(correctKey)) or (response_window.keys == correctKey):
                        response_window.corr = 1
                    else:
                        response_window.corr = 0
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in blankWindowComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "blankWindow"-------
        for thisComponent in blankWindowComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if response_window.keys:
            thisExp.addData('key_resp_rt', (response_window.rt+0.75))
            thisExp.addData('key_resp_corr', response_window.corr)
            # remove accnogo if button pressed
            if gonogo == 102:
                accnogo=accnogo-1
                thisExp.addData('accnogo', accnogo)
        
        # check responses
        if response_window.keys in ['', [], None]:  # No response was made
            response_window.keys = None
            # was no response the correct answer?!
            if str(correctKey).lower() == 'none':
               response_window.corr = 1;  # correct non-response
            else:
               response_window.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('response_window.keys',response_window.keys)
        trials.addData('response_window.corr', response_window.corr)
        if response_window.keys != None:  # we had a response
            trials.addData('response_window.rt', response_window.rt)
        trials.addData('response_window.started', response_window.tStartRefresh)
        trials.addData('response_window.stopped', response_window.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    # get names of stimulus parameters
    if trials.trialList in ([], [None], None):
        params = []
    else:
        params = trials.trialList[0].keys()
    # save data for this loop
    trials.saveAsText(filename + 'trials.csv', delim=',',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "OutBlock1"-------
    continueRoutine = True
    # update component parameters for each repeat
    acc = trials.data['key_resp.corr'].sum()
    num = trials.nTotal
    
    try:
        meanRt = trials.data['key_resp.rt'].mean()
    except:
        print("no responses recorded!")
        meanRt = 0
    
    if numnogo > 0:
        if (accnogo/numnogo)*100 >= 90:
            Feedback='Try to catch them even faster next time!'
        else:
            Feedback='Keep watching out for the Orangutan friends!' 
    else:
        Feedback='This should not happen: numnogo = 0'
    
    #[accnogo]/[numnogo] [acc]/[num] [meanrt]
    msg = "%i/%i %i/%i %.2f" %(accnogo,numnogo,acc,num,meanRt)
    
    # rest variables
    accnogo=0
    numnogo=0
    image_2.setImage(OutBlockStim)
    Feedback_text.setText(Feedback)
    key_resp_15.keys = []
    key_resp_15.rt = []
    _key_resp_15_allKeys = []
    # keep track of which components have finished
    OutBlock1Components = [image_2, Feedback_text, key_resp_15]
    for thisComponent in OutBlock1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    OutBlock1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "OutBlock1"-------
    while continueRoutine:
        # get current time
        t = OutBlock1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=OutBlock1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_2* updates
        if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_2.frameNStart = frameN  # exact frame index
            image_2.tStart = t  # local t and not account for scr refresh
            image_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
            image_2.setAutoDraw(True)
        
        # *Feedback_text* updates
        if Feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Feedback_text.frameNStart = frameN  # exact frame index
            Feedback_text.tStart = t  # local t and not account for scr refresh
            Feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Feedback_text, 'tStartRefresh')  # time at next scr refresh
            Feedback_text.setAutoDraw(True)
        
        # *key_resp_15* updates
        waitOnFlip = False
        if key_resp_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_15.frameNStart = frameN  # exact frame index
            key_resp_15.tStart = t  # local t and not account for scr refresh
            key_resp_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_15, 'tStartRefresh')  # time at next scr refresh
            key_resp_15.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_15.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_15.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_15.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_15.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
            _key_resp_15_allKeys.extend(theseKeys)
            if len(_key_resp_15_allKeys):
                key_resp_15.keys = _key_resp_15_allKeys[-1].name  # just the last key pressed
                key_resp_15.rt = _key_resp_15_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in OutBlock1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "OutBlock1"-------
    for thisComponent in OutBlock1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    blocks.addData('image_2.started', image_2.tStartRefresh)
    blocks.addData('image_2.stopped', image_2.tStopRefresh)
    # the Routine "OutBlock1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    maps = data.TrialHandler(nReps=mapDur, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='maps')
    thisExp.addLoop(maps)  # add the loop to the experiment
    thisMap = maps.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMap.rgb)
    if thisMap != None:
        for paramName in thisMap:
            exec('{} = thisMap[paramName]'.format(paramName))
    
    for thisMap in maps:
        currentLoop = maps
        # abbreviate parameter names if possible (e.g. rgb = thisMap.rgb)
        if thisMap != None:
            for paramName in thisMap:
                exec('{} = thisMap[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "ZooMap2"-------
        continueRoutine = True
        # update component parameters for each repeat
        if Procedure == "Block2":
            breakMsg="You can take a short break now if you want. Once you are ready to continue heading to the panda palace, press the [ENTER] key!"
        elif Procedure == "Block4":
            breakMsg="You can take a short break now if you want. Once you are ready to continue heading to the monkey palace, press the [ENTER] key!"
        elif Procedure == "Block6":
            breakMsg="You can take a short break now if you want. Once you are ready to continue heading to the kangaroo palace, press the [ENTER] key!"
        else:
            breakMsg == "" 
        image_7.setImage(ZooMap)
        text_break.setText(breakMsg)
        key_resp_13.keys = []
        key_resp_13.rt = []
        _key_resp_13_allKeys = []
        # keep track of which components have finished
        ZooMap2Components = [image_7, text_break, key_resp_13]
        for thisComponent in ZooMap2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ZooMap2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ZooMap2"-------
        while continueRoutine:
            # get current time
            t = ZooMap2Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ZooMap2Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_7* updates
            if image_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_7.frameNStart = frameN  # exact frame index
                image_7.tStart = t  # local t and not account for scr refresh
                image_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_7, 'tStartRefresh')  # time at next scr refresh
                image_7.setAutoDraw(True)
            
            # *text_break* updates
            if text_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_break.frameNStart = frameN  # exact frame index
                text_break.tStart = t  # local t and not account for scr refresh
                text_break.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_break, 'tStartRefresh')  # time at next scr refresh
                text_break.setAutoDraw(True)
            
            # *key_resp_13* updates
            waitOnFlip = False
            if key_resp_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_13.frameNStart = frameN  # exact frame index
                key_resp_13.tStart = t  # local t and not account for scr refresh
                key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
                key_resp_13.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_13.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_13.getKeys(keyList=['return', 'num_enter'], waitRelease=False)
                _key_resp_13_allKeys.extend(theseKeys)
                if len(_key_resp_13_allKeys):
                    key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                    key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ZooMap2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ZooMap2"-------
        for thisComponent in ZooMap2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        maps.addData('text_break.started', text_break.tStartRefresh)
        maps.addData('text_break.stopped', text_break.tStopRefresh)
        # the Routine "ZooMap2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed mapDur repeats of 'maps'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'blocks'

# get names of stimulus parameters
if blocks.trialList in ([], [None], None):
    params = []
else:
    params = blocks.trialList[0].keys()
# save data for this loop
blocks.saveAsText(filename + 'blocks.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "Out"-------
continueRoutine = True
routineTimer.add(4.000000)
# update component parameters for each repeat
text_18.setText('Congratulations! All of the animals are back in their cages! You did a great job!\n\nPlease wait while we save the results...')
key_resp_14.keys = []
key_resp_14.rt = []
_key_resp_14_allKeys = []
# keep track of which components have finished
OutComponents = [text_18, key_resp_14]
for thisComponent in OutComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
OutClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Out"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = OutClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=OutClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_18* updates
    if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_18.frameNStart = frameN  # exact frame index
        text_18.tStart = t  # local t and not account for scr refresh
        text_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
        text_18.setAutoDraw(True)
    if text_18.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_18.tStartRefresh + 4-frameTolerance:
            # keep track of stop time/frame for later
            text_18.tStop = t  # not accounting for scr refresh
            text_18.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_18, 'tStopRefresh')  # time at next scr refresh
            text_18.setAutoDraw(False)
    
    # *key_resp_14* updates
    waitOnFlip = False
    if key_resp_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_14.frameNStart = frameN  # exact frame index
        key_resp_14.tStart = t  # local t and not account for scr refresh
        key_resp_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_14, 'tStartRefresh')  # time at next scr refresh
        key_resp_14.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_14.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_14.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_14.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > key_resp_14.tStartRefresh + 4-frameTolerance:
            # keep track of stop time/frame for later
            key_resp_14.tStop = t  # not accounting for scr refresh
            key_resp_14.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_resp_14, 'tStopRefresh')  # time at next scr refresh
            key_resp_14.status = FINISHED
    if key_resp_14.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_14.getKeys(keyList=['space', 'return', 'num_enter'], waitRelease=False)
        _key_resp_14_allKeys.extend(theseKeys)
        if len(_key_resp_14_allKeys):
            key_resp_14.keys = _key_resp_14_allKeys[-1].name  # just the last key pressed
            key_resp_14.rt = _key_resp_14_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in OutComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Out"-------
for thisComponent in OutComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
if expInfo['eeg']=='1':
    # Reset the port to its default state
    port.setData( int("00000001", 2) )
    core.wait(0.2)
    port.setData(0) # set all pins back to low(0) 
    # Close the serial port
    port.close()
if expInfo['eeg']=='1':
    # Reset the port to its default state
    port.setData( int("00000001", 2) )
    core.wait(0.2)
    port.setData(0) # set all pins back to low(0) 
    # Close the serial port
    port.close()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
