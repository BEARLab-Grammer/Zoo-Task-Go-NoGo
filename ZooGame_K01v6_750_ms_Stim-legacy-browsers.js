/**********************************
 * Zoogame_K01V6_750_Ms_Stim Test *
 **********************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'norm',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'ZooGame_K01v6_750_ms_Stim';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '01', 'eeg': false};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Welcome1RoutineBegin());
flowScheduler.add(Welcome1RoutineEachFrame());
flowScheduler.add(Welcome1RoutineEnd());
flowScheduler.add(OrangFamRoutineBegin());
flowScheduler.add(OrangFamRoutineEachFrame());
flowScheduler.add(OrangFamRoutineEnd());
flowScheduler.add(FredRoutineBegin());
flowScheduler.add(FredRoutineEachFrame());
flowScheduler.add(FredRoutineEnd());
flowScheduler.add(SallyRoutineBegin());
flowScheduler.add(SallyRoutineEachFrame());
flowScheduler.add(SallyRoutineEnd());
flowScheduler.add(MollyRoutineBegin());
flowScheduler.add(MollyRoutineEachFrame());
flowScheduler.add(MollyRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(ZooMap1RoutineBegin());
flowScheduler.add(ZooMap1RoutineEachFrame());
flowScheduler.add(ZooMap1RoutineEnd());
flowScheduler.add(Welcome2RoutineBegin());
flowScheduler.add(Welcome2RoutineEachFrame());
flowScheduler.add(Welcome2RoutineEnd());
flowScheduler.add(OrangFamRoutineBegin());
flowScheduler.add(OrangFamRoutineEachFrame());
flowScheduler.add(OrangFamRoutineEnd());
flowScheduler.add(PracticeReadyRoutineBegin());
flowScheduler.add(PracticeReadyRoutineEachFrame());
flowScheduler.add(PracticeReadyRoutineEnd());
const PracticeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeLoopBegin, PracticeLoopScheduler);
flowScheduler.add(PracticeLoopScheduler);
flowScheduler.add(PracticeLoopEnd);
flowScheduler.add(PracticeOutRoutineBegin());
flowScheduler.add(PracticeOutRoutineEachFrame());
flowScheduler.add(PracticeOutRoutineEnd());
flowScheduler.add(ZooMap1RoutineBegin());
flowScheduler.add(ZooMap1RoutineEachFrame());
flowScheduler.add(ZooMap1RoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(OutRoutineBegin());
flowScheduler.add(OutRoutineEachFrame());
flowScheduler.add(OutRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/Turtle1.bmp', 'path': 'stimuli/Turtle1.bmp'},
    {'name': 'stimuli/Manul2.bmp', 'path': 'stimuli/Manul2.bmp'},
    {'name': 'stimuli/Squirrel5.bmp', 'path': 'stimuli/Squirrel5.bmp'},
    {'name': 'stimuli/Giraffe8.bmp', 'path': 'stimuli/Giraffe8.bmp'},
    {'name': 'stimuli/Bear3.bmp', 'path': 'stimuli/Bear3.bmp'},
    {'name': 'stimuli/Trial3.csv', 'path': 'stimuli/Trial3.csv'},
    {'name': 'stimuli/Kangaroo4.bmp', 'path': 'stimuli/Kangaroo4.bmp'},
    {'name': 'stimuli/MapKangaroo.bmp', 'path': 'stimuli/MapKangaroo.bmp'},
    {'name': 'stimuli/Monkey7.bmp', 'path': 'stimuli/Monkey7.bmp'},
    {'name': 'stimuli/Kudu2.bmp', 'path': 'stimuli/Kudu2.bmp'},
    {'name': 'stimuli/Lemur4.bmp', 'path': 'stimuli/Lemur4.bmp'},
    {'name': 'stimuli/Kudu1.bmp', 'path': 'stimuli/Kudu1.bmp'},
    {'name': 'stimuli/Gorilla1.bmp', 'path': 'stimuli/Gorilla1.bmp'},
    {'name': 'stimuli/Seal1.bmp', 'path': 'stimuli/Seal1.bmp'},
    {'name': 'stimuli/Kangaroo3.bmp', 'path': 'stimuli/Kangaroo3.bmp'},
    {'name': 'stimuli/Trial6.csv', 'path': 'stimuli/Trial6.csv'},
    {'name': 'stimuli/Tortoise1.bmp', 'path': 'stimuli/Tortoise1.bmp'},
    {'name': 'stimuli/Rhino7.bmp', 'path': 'stimuli/Rhino7.bmp'},
    {'name': 'stimuli/Squirrel4.bmp', 'path': 'stimuli/Squirrel4.bmp'},
    {'name': 'stimuli/Rodent2.bmp', 'path': 'stimuli/Rodent2.bmp'},
    {'name': 'stimuli/Ostrich1.bmp', 'path': 'stimuli/Ostrich1.bmp'},
    {'name': 'stimuli/Zebra4.bmp', 'path': 'stimuli/Zebra4.bmp'},
    {'name': 'stimuli/Cheetah1.bmp', 'path': 'stimuli/Cheetah1.bmp'},
    {'name': 'stimuli/Nilgila2.bmp', 'path': 'stimuli/Nilgila2.bmp'},
    {'name': 'stimuli/PolarBear2.bmp', 'path': 'stimuli/PolarBear2.bmp'},
    {'name': 'stimuli/Guar1.bmp', 'path': 'stimuli/Guar1.bmp'},
    {'name': 'stimuli/Elephant6.bmp', 'path': 'stimuli/Elephant6.bmp'},
    {'name': 'stimuli/Leopard3.bmp', 'path': 'stimuli/Leopard3.bmp'},
    {'name': 'stimuli/Monkey2.bmp', 'path': 'stimuli/Monkey2.bmp'},
    {'name': 'stimuli/Creature3.bmp', 'path': 'stimuli/Creature3.bmp'},
    {'name': 'stimuli/PrarieDog1.bmp', 'path': 'stimuli/PrarieDog1.bmp'},
    {'name': 'stimuli/Deer3.bmp', 'path': 'stimuli/Deer3.bmp'},
    {'name': 'stimuli/Rhino1.bmp', 'path': 'stimuli/Rhino1.bmp'},
    {'name': 'stimuli/Elephant7.bmp', 'path': 'stimuli/Elephant7.bmp'},
    {'name': 'stimuli/Lizard4.bmp', 'path': 'stimuli/Lizard4.bmp'},
    {'name': 'stimuli/WhiteLion1.bmp', 'path': 'stimuli/WhiteLion1.bmp'},
    {'name': 'stimuli/MapStop_Start1.bmp', 'path': 'stimuli/MapStop_Start1.bmp'},
    {'name': 'stimuli/Elephant1.bmp', 'path': 'stimuli/Elephant1.bmp'},
    {'name': 'stimuli/Okapi3.bmp', 'path': 'stimuli/Okapi3.bmp'},
    {'name': 'stimuli/Elephant4.bmp', 'path': 'stimuli/Elephant4.bmp'},
    {'name': 'stimuli/Fox3.bmp', 'path': 'stimuli/Fox3.bmp'},
    {'name': 'stimuli/Lynx1.bmp', 'path': 'stimuli/Lynx1.bmp'},
    {'name': 'stimuli/Duiker1.bmp', 'path': 'stimuli/Duiker1.bmp'},
    {'name': 'stimuli/Flamingo5.bmp', 'path': 'stimuli/Flamingo5.bmp'},
    {'name': 'stimuli/Bear8.bmp', 'path': 'stimuli/Bear8.bmp'},
    {'name': 'stimuli/Meerkat1.bmp', 'path': 'stimuli/Meerkat1.bmp'},
    {'name': 'stimuli/Giraffe10.bmp', 'path': 'stimuli/Giraffe10.bmp'},
    {'name': 'stimuli/Panda12.bmp', 'path': 'stimuli/Panda12.bmp'},
    {'name': 'stimuli/Panda10.bmp', 'path': 'stimuli/Panda10.bmp'},
    {'name': 'stimuli/Lechwe1.bmp', 'path': 'stimuli/Lechwe1.bmp'},
    {'name': 'stimuli/Deer2.bmp', 'path': 'stimuli/Deer2.bmp'},
    {'name': 'stimuli/Cow1.bmp', 'path': 'stimuli/Cow1.bmp'},
    {'name': 'stimuli/Bear5.bmp', 'path': 'stimuli/Bear5.bmp'},
    {'name': 'stimuli/Bird8.bmp', 'path': 'stimuli/Bird8.bmp'},
    {'name': 'stimuli/Buffalo2.bmp', 'path': 'stimuli/Buffalo2.bmp'},
    {'name': 'stimuli/Lion8.bmp', 'path': 'stimuli/Lion8.bmp'},
    {'name': 'stimuli/Lemur1.bmp', 'path': 'stimuli/Lemur1.bmp'},
    {'name': 'stimuli/Bateng1.bmp', 'path': 'stimuli/Bateng1.bmp'},
    {'name': 'stimuli/Monkey3.bmp', 'path': 'stimuli/Monkey3.bmp'},
    {'name': 'stimuli/Rhino10.bmp', 'path': 'stimuli/Rhino10.bmp'},
    {'name': 'stimuli/BlockList.csv', 'path': 'stimuli/BlockList.csv'},
    {'name': 'stimuli/Bear4.bmp', 'path': 'stimuli/Bear4.bmp'},
    {'name': 'stimuli/Lion5.bmp', 'path': 'stimuli/Lion5.bmp'},
    {'name': 'stimuli/RedPanda1.bmp', 'path': 'stimuli/RedPanda1.bmp'},
    {'name': 'stimuli/Lion9.bmp', 'path': 'stimuli/Lion9.bmp'},
    {'name': 'stimuli/Sable1.bmp', 'path': 'stimuli/Sable1.bmp'},
    {'name': 'stimuli/Creature1.bmp', 'path': 'stimuli/Creature1.bmp'},
    {'name': 'stimuli/Lion2.bmp', 'path': 'stimuli/Lion2.bmp'},
    {'name': 'stimuli/Mouse1.bmp', 'path': 'stimuli/Mouse1.bmp'},
    {'name': 'stimuli/Rhino9.bmp', 'path': 'stimuli/Rhino9.bmp'},
    {'name': 'stimuli/Lizard2.bmp', 'path': 'stimuli/Lizard2.bmp'},
    {'name': 'stimuli/WhiteTiger1.bmp', 'path': 'stimuli/WhiteTiger1.bmp'},
    {'name': 'stimuli/Rabbit1.bmp', 'path': 'stimuli/Rabbit1.bmp'},
    {'name': 'stimuli/RedPanda3.bmp', 'path': 'stimuli/RedPanda3.bmp'},
    {'name': 'stimuli/Gazelle2.bmp', 'path': 'stimuli/Gazelle2.bmp'},
    {'name': 'stimuli/Peacock1.bmp', 'path': 'stimuli/Peacock1.bmp'},
    {'name': 'stimuli/RedPanda4.bmp', 'path': 'stimuli/RedPanda4.bmp'},
    {'name': 'stimuli/Flamingo1.bmp', 'path': 'stimuli/Flamingo1.bmp'},
    {'name': 'stimuli/Koala2.bmp', 'path': 'stimuli/Koala2.bmp'},
    {'name': 'stimuli/Fox1.bmp', 'path': 'stimuli/Fox1.bmp'},
    {'name': 'stimuli/MapStop5_ZooExit.bmp', 'path': 'stimuli/MapStop5_ZooExit.bmp'},
    {'name': 'stimuli/Squirrel10.bmp', 'path': 'stimuli/Squirrel10.bmp'},
    {'name': 'stimuli/Lizard1.bmp', 'path': 'stimuli/Lizard1.bmp'},
    {'name': 'stimuli/Leopard10.bmp', 'path': 'stimuli/Leopard10.bmp'},
    {'name': 'stimuli/Tiger3.bmp', 'path': 'stimuli/Tiger3.bmp'},
    {'name': 'stimuli/Trial8.csv', 'path': 'stimuli/Trial8.csv'},
    {'name': 'stimuli/Anoa1.bmp', 'path': 'stimuli/Anoa1.bmp'},
    {'name': 'stimuli/Trial5.csv', 'path': 'stimuli/Trial5.csv'},
    {'name': 'stimuli/MapStop4_Kangaroo.bmp', 'path': 'stimuli/MapStop4_Kangaroo.bmp'},
    {'name': 'stimuli/Kangaroo5.bmp', 'path': 'stimuli/Kangaroo5.bmp'},
    {'name': 'stimuli/RedPanda8.bmp', 'path': 'stimuli/RedPanda8.bmp'},
    {'name': 'stimuli/RedPanda6.bmp', 'path': 'stimuli/RedPanda6.bmp'},
    {'name': 'stimuli/PolarBear3.bmp', 'path': 'stimuli/PolarBear3.bmp'},
    {'name': 'stimuli/Creature10.bmp', 'path': 'stimuli/Creature10.bmp'},
    {'name': 'stimuli/Goat2.bmp', 'path': 'stimuli/Goat2.bmp'},
    {'name': 'stimuli/Bongo1.bmp', 'path': 'stimuli/Bongo1.bmp'},
    {'name': 'stimuli/Koala5.bmp', 'path': 'stimuli/Koala5.bmp'},
    {'name': 'stimuli/Fox4.bmp', 'path': 'stimuli/Fox4.bmp'},
    {'name': 'stimuli/Gemsbok1.bmp', 'path': 'stimuli/Gemsbok1.bmp'},
    {'name': 'stimuli/Bear2.bmp', 'path': 'stimuli/Bear2.bmp'},
    {'name': 'stimuli/RedPanda13.bmp', 'path': 'stimuli/RedPanda13.bmp'},
    {'name': 'stimuli/Bird6.bmp', 'path': 'stimuli/Bird6.bmp'},
    {'name': 'stimuli/Lioness1.bmp', 'path': 'stimuli/Lioness1.bmp'},
    {'name': 'stimuli/Rhino6.bmp', 'path': 'stimuli/Rhino6.bmp'},
    {'name': 'stimuli/Flamingo4.bmp', 'path': 'stimuli/Flamingo4.bmp'},
    {'name': 'stimuli/Sloth2.bmp', 'path': 'stimuli/Sloth2.bmp'},
    {'name': 'stimuli/Addax1.bmp', 'path': 'stimuli/Addax1.bmp'},
    {'name': 'stimuli/RedPanda12.bmp', 'path': 'stimuli/RedPanda12.bmp'},
    {'name': 'stimuli/Squirrel2.bmp', 'path': 'stimuli/Squirrel2.bmp'},
    {'name': 'stimuli/Antelope1.bmp', 'path': 'stimuli/Antelope1.bmp'},
    {'name': 'stimuli/Ibis2.bmp', 'path': 'stimuli/Ibis2.bmp'},
    {'name': 'stimuli/Llama2.bmp', 'path': 'stimuli/Llama2.bmp'},
    {'name': 'stimuli/Okapi5.bmp', 'path': 'stimuli/Okapi5.bmp'},
    {'name': 'stimuli/Kangaroo6.bmp', 'path': 'stimuli/Kangaroo6.bmp'},
    {'name': 'stimuli/Elephant3.bmp', 'path': 'stimuli/Elephant3.bmp'},
    {'name': 'stimuli/Lizard3.bmp', 'path': 'stimuli/Lizard3.bmp'},
    {'name': 'stimuli/Gorilla3.bmp', 'path': 'stimuli/Gorilla3.bmp'},
    {'name': 'stimuli/Snowcat1.bmp', 'path': 'stimuli/Snowcat1.bmp'},
    {'name': 'stimuli/Elk1.bmp', 'path': 'stimuli/Elk1.bmp'},
    {'name': 'stimuli/Gorilla2.bmp', 'path': 'stimuli/Gorilla2.bmp'},
    {'name': 'stimuli/Meerkat21.bmp', 'path': 'stimuli/Meerkat21.bmp'},
    {'name': 'stimuli/DikDik1.bmp', 'path': 'stimuli/DikDik1.bmp'},
    {'name': 'stimuli/RedPanda27.bmp', 'path': 'stimuli/RedPanda27.bmp'},
    {'name': 'stimuli/Cow2.bmp', 'path': 'stimuli/Cow2.bmp'},
    {'name': 'stimuli/Buffalo3.bmp', 'path': 'stimuli/Buffalo3.bmp'},
    {'name': 'stimuli/Lion3.bmp', 'path': 'stimuli/Lion3.bmp'},
    {'name': 'stimuli/Meerkat4.bmp', 'path': 'stimuli/Meerkat4.bmp'},
    {'name': 'stimuli/Trial1.csv', 'path': 'stimuli/Trial1.csv'},
    {'name': 'stimuli/Meerkat6.bmp', 'path': 'stimuli/Meerkat6.bmp'},
    {'name': 'stimuli/Meerkat5.bmp', 'path': 'stimuli/Meerkat5.bmp'},
    {'name': 'stimuli/Onager1.bmp', 'path': 'stimuli/Onager1.bmp'},
    {'name': 'stimuli/Orang2.bmp', 'path': 'stimuli/Orang2.bmp'},
    {'name': 'stimuli/RedPanda2.bmp', 'path': 'stimuli/RedPanda2.bmp'},
    {'name': 'stimuli/Impala1.bmp', 'path': 'stimuli/Impala1.bmp'},
    {'name': 'stimuli/Giraffe1.bmp', 'path': 'stimuli/Giraffe1.bmp'},
    {'name': 'stimuli/Lion1.bmp', 'path': 'stimuli/Lion1.bmp'},
    {'name': 'stimuli/RedPanda14.bmp', 'path': 'stimuli/RedPanda14.bmp'},
    {'name': 'stimuli/Llama1.bmp', 'path': 'stimuli/Llama1.bmp'},
    {'name': 'stimuli/Rhino3.bmp', 'path': 'stimuli/Rhino3.bmp'},
    {'name': 'stimuli/Lion10.bmp', 'path': 'stimuli/Lion10.bmp'},
    {'name': 'stimuli/Practice.csv', 'path': 'stimuli/Practice.csv'},
    {'name': 'stimuli/Elephant5.bmp', 'path': 'stimuli/Elephant5.bmp'},
    {'name': 'stimuli/Lemur3.bmp', 'path': 'stimuli/Lemur3.bmp'},
    {'name': 'stimuli/Tamarin10.bmp', 'path': 'stimuli/Tamarin10.bmp'},
    {'name': 'stimuli/Creature4.bmp', 'path': 'stimuli/Creature4.bmp'},
    {'name': 'stimuli/Orynx2.bmp', 'path': 'stimuli/Orynx2.bmp'},
    {'name': 'stimuli/Waterbuck3.bmp', 'path': 'stimuli/Waterbuck3.bmp'},
    {'name': 'stimuli/RedPanda26.bmp', 'path': 'stimuli/RedPanda26.bmp'},
    {'name': 'stimuli/Racoon1.bmp', 'path': 'stimuli/Racoon1.bmp'},
    {'name': 'stimuli/Squirrel3.bmp', 'path': 'stimuli/Squirrel3.bmp'},
    {'name': 'stimuli/Trial2.csv', 'path': 'stimuli/Trial2.csv'},
    {'name': 'stimuli/SeaLion1.bmp', 'path': 'stimuli/SeaLion1.bmp'},
    {'name': 'stimuli/Iguana5.bmp', 'path': 'stimuli/Iguana5.bmp'},
    {'name': 'stimuli/WildDog1.bmp', 'path': 'stimuli/WildDog1.bmp'},
    {'name': 'stimuli/Rhino12.bmp', 'path': 'stimuli/Rhino12.bmp'},
    {'name': 'stimuli/Fox11.bmp', 'path': 'stimuli/Fox11.bmp'},
    {'name': 'stimuli/Orang1.bmp', 'path': 'stimuli/Orang1.bmp'},
    {'name': 'stimuli/MapMonkey.bmp', 'path': 'stimuli/MapMonkey.bmp'},
    {'name': 'stimuli/Elephant8.bmp', 'path': 'stimuli/Elephant8.bmp'},
    {'name': 'stimuli/RedPanda17.bmp', 'path': 'stimuli/RedPanda17.bmp'},
    {'name': 'stimuli/Peacock2.bmp', 'path': 'stimuli/Peacock2.bmp'},
    {'name': 'stimuli/Zebra2.bmp', 'path': 'stimuli/Zebra2.bmp'},
    {'name': 'stimuli/Leopard13.bmp', 'path': 'stimuli/Leopard13.bmp'},
    {'name': 'stimuli/MapKoala.bmp', 'path': 'stimuli/MapKoala.bmp'},
    {'name': 'stimuli/Panda2.bmp', 'path': 'stimuli/Panda2.bmp'},
    {'name': 'stimuli/Trial7.csv', 'path': 'stimuli/Trial7.csv'},
    {'name': 'stimuli/Fox10.bmp', 'path': 'stimuli/Fox10.bmp'},
    {'name': 'stimuli/Elephant15.bmp', 'path': 'stimuli/Elephant15.bmp'},
    {'name': 'stimuli/Trial4.csv', 'path': 'stimuli/Trial4.csv'},
    {'name': 'stimuli/Elephant9.bmp', 'path': 'stimuli/Elephant9.bmp'},
    {'name': 'stimuli/Panda3.bmp', 'path': 'stimuli/Panda3.bmp'},
    {'name': 'stimuli/Rhino4.bmp', 'path': 'stimuli/Rhino4.bmp'},
    {'name': 'stimuli/SlothBear1.bmp', 'path': 'stimuli/SlothBear1.bmp'},
    {'name': 'stimuli/Kangaroo2.bmp', 'path': 'stimuli/Kangaroo2.bmp'},
    {'name': 'stimuli/Bird7.bmp', 'path': 'stimuli/Bird7.bmp'},
    {'name': 'stimuli/Rhino5.bmp', 'path': 'stimuli/Rhino5.bmp'},
    {'name': 'stimuli/Puma1.bmp', 'path': 'stimuli/Puma1.bmp'},
    {'name': 'stimuli/Panda11.bmp', 'path': 'stimuli/Panda11.bmp'},
    {'name': 'stimuli/Giraffe7.bmp', 'path': 'stimuli/Giraffe7.bmp'},
    {'name': 'stimuli/Giraffe9.bmp', 'path': 'stimuli/Giraffe9.bmp'},
    {'name': 'stimuli/Cheetah4.bmp', 'path': 'stimuli/Cheetah4.bmp'},
    {'name': 'stimuli/Lemur6.bmp', 'path': 'stimuli/Lemur6.bmp'},
    {'name': 'stimuli/Orynx1.bmp', 'path': 'stimuli/Orynx1.bmp'},
    {'name': 'stimuli/Zookeeper1.bmp', 'path': 'stimuli/Zookeeper1.bmp'},
    {'name': 'stimuli/Okapi1.bmp', 'path': 'stimuli/Okapi1.bmp'},
    {'name': 'stimuli/Buffalo1.bmp', 'path': 'stimuli/Buffalo1.bmp'},
    {'name': 'stimuli/MapStop2_Panda.bmp', 'path': 'stimuli/MapStop2_Panda.bmp'},
    {'name': 'stimuli/Moose1.bmp', 'path': 'stimuli/Moose1.bmp'},
    {'name': 'stimuli/Panda4.bmp', 'path': 'stimuli/Panda4.bmp'},
    {'name': 'stimuli/Bongo5.bmp', 'path': 'stimuli/Bongo5.bmp'},
    {'name': 'stimuli/Bear1.bmp', 'path': 'stimuli/Bear1.bmp'},
    {'name': 'stimuli/Koala11.bmp', 'path': 'stimuli/Koala11.bmp'},
    {'name': 'stimuli/Toucan1.bmp', 'path': 'stimuli/Toucan1.bmp'},
    {'name': 'stimuli/RedPanda19.bmp', 'path': 'stimuli/RedPanda19.bmp'},
    {'name': 'stimuli/Bird5.bmp', 'path': 'stimuli/Bird5.bmp'},
    {'name': 'stimuli/MapPanda.bmp', 'path': 'stimuli/MapPanda.bmp'},
    {'name': 'stimuli/MapFriends.bmp', 'path': 'stimuli/MapFriends.bmp'},
    {'name': 'stimuli/Koala8.bmp', 'path': 'stimuli/Koala8.bmp'},
    {'name': 'stimuli/Penguin5.bmp', 'path': 'stimuli/Penguin5.bmp'},
    {'name': 'stimuli/Meerkat20.bmp', 'path': 'stimuli/Meerkat20.bmp'},
    {'name': 'stimuli/PrarieDog2.bmp', 'path': 'stimuli/PrarieDog2.bmp'},
    {'name': 'stimuli/Eland1.bmp', 'path': 'stimuli/Eland1.bmp'},
    {'name': 'stimuli/Rodent5.bmp', 'path': 'stimuli/Rodent5.bmp'},
    {'name': 'stimuli/Parrot10.bmp', 'path': 'stimuli/Parrot10.bmp'},
    {'name': 'stimuli/Gazelle1.bmp', 'path': 'stimuli/Gazelle1.bmp'},
    {'name': 'stimuli/Hyena2.bmp', 'path': 'stimuli/Hyena2.bmp'},
    {'name': 'stimuli/Emu2.bmp', 'path': 'stimuli/Emu2.bmp'},
    {'name': 'stimuli/Squirrel1.bmp', 'path': 'stimuli/Squirrel1.bmp'},
    {'name': 'stimuli/Kangaroo1.bmp', 'path': 'stimuli/Kangaroo1.bmp'},
    {'name': 'stimuli/Dingo1.bmp', 'path': 'stimuli/Dingo1.bmp'},
    {'name': 'stimuli/Meerkat3.bmp', 'path': 'stimuli/Meerkat3.bmp'},
    {'name': 'stimuli/Cheetah2.bmp', 'path': 'stimuli/Cheetah2.bmp'},
    {'name': 'stimuli/Giraffe5.bmp', 'path': 'stimuli/Giraffe5.bmp'},
    {'name': 'stimuli/Bird9.bmp', 'path': 'stimuli/Bird9.bmp'},
    {'name': 'stimuli/Rodent1.bmp', 'path': 'stimuli/Rodent1.bmp'},
    {'name': 'stimuli/Tiger10.bmp', 'path': 'stimuli/Tiger10.bmp'},
    {'name': 'stimuli/MapStop1_KoalaKove.bmp', 'path': 'stimuli/MapStop1_KoalaKove.bmp'},
    {'name': 'stimuli/Hippo1.bmp', 'path': 'stimuli/Hippo1.bmp'},
    {'name': 'stimuli/Lemur2.bmp', 'path': 'stimuli/Lemur2.bmp'},
    {'name': 'stimuli/Monkey6.bmp', 'path': 'stimuli/Monkey6.bmp'},
    {'name': 'stimuli/Bird2.bmp', 'path': 'stimuli/Bird2.bmp'},
    {'name': 'stimuli/Giraffe4.bmp', 'path': 'stimuli/Giraffe4.bmp'},
    {'name': 'stimuli/Zebra1.bmp', 'path': 'stimuli/Zebra1.bmp'},
    {'name': 'stimuli/Impala2.bmp', 'path': 'stimuli/Impala2.bmp'},
    {'name': 'stimuli/RedPanda10.bmp', 'path': 'stimuli/RedPanda10.bmp'},
    {'name': 'stimuli/Ostrich2.bmp', 'path': 'stimuli/Ostrich2.bmp'},
    {'name': 'stimuli/PolarBear1.bmp', 'path': 'stimuli/PolarBear1.bmp'},
    {'name': 'stimuli/Wolf4.bmp', 'path': 'stimuli/Wolf4.bmp'},
    {'name': 'stimuli/Leopard2.bmp', 'path': 'stimuli/Leopard2.bmp'},
    {'name': 'stimuli/RedPanda20.bmp', 'path': 'stimuli/RedPanda20.bmp'},
    {'name': 'stimuli/RedPanda25.bmp', 'path': 'stimuli/RedPanda25.bmp'},
    {'name': 'stimuli/Peacock3.bmp', 'path': 'stimuli/Peacock3.bmp'},
    {'name': 'stimuli/Caracal1.bmp', 'path': 'stimuli/Caracal1.bmp'},
    {'name': 'stimuli/Nagila1.bmp', 'path': 'stimuli/Nagila1.bmp'},
    {'name': 'stimuli/Cougar2.bmp', 'path': 'stimuli/Cougar2.bmp'},
    {'name': 'stimuli/Sloth1.bmp', 'path': 'stimuli/Sloth1.bmp'},
    {'name': 'stimuli/Kangaroo7.bmp', 'path': 'stimuli/Kangaroo7.bmp'},
    {'name': 'stimuli/ArcticFox1.bmp', 'path': 'stimuli/ArcticFox1.bmp'},
    {'name': 'stimuli/Puffin1.bmp', 'path': 'stimuli/Puffin1.bmp'},
    {'name': 'stimuli/Creature7.bmp', 'path': 'stimuli/Creature7.bmp'},
    {'name': 'stimuli/RedPanda7.bmp', 'path': 'stimuli/RedPanda7.bmp'},
    {'name': 'stimuli/Heron1.bmp', 'path': 'stimuli/Heron1.bmp'},
    {'name': 'stimuli/Owl1.bmp', 'path': 'stimuli/Owl1.bmp'},
    {'name': 'stimuli/Lizard5.bmp', 'path': 'stimuli/Lizard5.bmp'},
    {'name': 'stimuli/Flamingo6.bmp', 'path': 'stimuli/Flamingo6.bmp'},
    {'name': 'stimuli/Ibis3.bmp', 'path': 'stimuli/Ibis3.bmp'},
    {'name': 'stimuli/Tiger1.bmp', 'path': 'stimuli/Tiger1.bmp'},
    {'name': 'stimuli/Chimp1.bmp', 'path': 'stimuli/Chimp1.bmp'},
    {'name': 'stimuli/Koala4.bmp', 'path': 'stimuli/Koala4.bmp'},
    {'name': 'stimuli/Waterbuck2.bmp', 'path': 'stimuli/Waterbuck2.bmp'},
    {'name': 'stimuli/Koala3.bmp', 'path': 'stimuli/Koala3.bmp'},
    {'name': 'stimuli/Balawat1.bmp', 'path': 'stimuli/Balawat1.bmp'},
    {'name': 'stimuli/Deer5.bmp', 'path': 'stimuli/Deer5.bmp'},
    {'name': 'stimuli/Zebra8.bmp', 'path': 'stimuli/Zebra8.bmp'},
    {'name': 'stimuli/Jackal1.bmp', 'path': 'stimuli/Jackal1.bmp'},
    {'name': 'stimuli/Rhino11.bmp', 'path': 'stimuli/Rhino11.bmp'},
    {'name': 'stimuli/Rhino8.bmp', 'path': 'stimuli/Rhino8.bmp'},
    {'name': 'stimuli/Koala1.bmp', 'path': 'stimuli/Koala1.bmp'},
    {'name': 'stimuli/Orang3.bmp', 'path': 'stimuli/Orang3.bmp'},
    {'name': 'stimuli/Giraffe2.bmp', 'path': 'stimuli/Giraffe2.bmp'},
    {'name': 'stimuli/Flamingo2.bmp', 'path': 'stimuli/Flamingo2.bmp'},
    {'name': 'stimuli/Tiger6.bmp', 'path': 'stimuli/Tiger6.bmp'},
    {'name': 'stimuli/Bear6.bmp', 'path': 'stimuli/Bear6.bmp'},
    {'name': 'stimuli/Leopard12.bmp', 'path': 'stimuli/Leopard12.bmp'},
    {'name': 'stimuli/Creature5.bmp', 'path': 'stimuli/Creature5.bmp'},
    {'name': 'stimuli/Giraffe3.bmp', 'path': 'stimuli/Giraffe3.bmp'},
    {'name': 'stimuli/Bear9.bmp', 'path': 'stimuli/Bear9.bmp'},
    {'name': 'stimuli/Deer1.bmp', 'path': 'stimuli/Deer1.bmp'},
    {'name': 'stimuli/Okapi2.bmp', 'path': 'stimuli/Okapi2.bmp'},
    {'name': 'stimuli/MapStop3_Monkey.bmp', 'path': 'stimuli/MapStop3_Monkey.bmp'},
    {'name': 'stimuli/Tiger2.bmp', 'path': 'stimuli/Tiger2.bmp'},
    {'name': 'stimuli/Fox5.bmp', 'path': 'stimuli/Fox5.bmp'},
    {'name': 'stimuli/Wolf1.bmp', 'path': 'stimuli/Wolf1.bmp'},
    {'name': 'stimuli/Bird1.bmp', 'path': 'stimuli/Bird1.bmp'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);

  return Scheduler.Event.NEXT;
}


var Welcome1Clock;
var thisExp;
var text;
var image_1;
var text_2;
var key_resp_2;
var OrangFamClock;
var fmsgN;
var image_3;
var image_4;
var image_5;
var text_orangfam;
var key_resp_3;
var FredClock;
var text_9;
var white_backgrnd1;
var image_13;
var key_resp_4;
var SallyClock;
var text_10;
var white_backgrnd2;
var image_14;
var key_resp_5;
var MollyClock;
var text_17;
var white_backgrnd3;
var image_15;
var key_resp_6;
var InstructionsClock;
var text_12;
var key_resp_8;
var ZooMap1Clock;
var mapmsgN;
var zoomap;
var text_zoomap1;
var key_resp_7;
var Welcome2Clock;
var image_6;
var text_14;
var key_resp_9;
var PracticeReadyClock;
var text_15;
var key_resp_10;
var PracClock;
var pnumnogo;
var paccnogo;
var Fxation;
var Stim;
var Respond;
var blankWindowClock;
var response_window;
var PracticeOutClock;
var image;
var OutPrac;
var psummary_text;
var key_resp_11;
var IntroClock;
var intro;
var key_resp_12;
var BlockListClock;
var accnogo;
var numnogo;
var Fixation2;
var Stim2;
var key_resp;
var OutBlock1Clock;
var image_2;
var Feedback_text;
var summary_text;
var key_resp_15;
var ZooMap2Clock;
var image_7;
var text_break;
var key_resp_13;
var OutClock;
var text_18;
var key_resp_14;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Welcome1"
  Welcome1Clock = new util.Clock();
  document.body.style.cursor='none';

  var sUsrAg;
  var nIdx;
  function getBrowserId () {
   var browsers = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
   sUsrAg = window.navigator.userAgent,
   nIdx = browsers.length - 1;
   for (nIdx; nIdx > -1 && sUsrAg.indexOf(browsers [nIdx]) === -1; nIdx--);

    return browsers[nIdx];
  }
  // save cpu & browser information
  thisExp=psychoJS.experiment;
  expInfo['OS'] = window.navigator.platform;
  expInfo['browser'] = getBrowserId();
  expInfo['xResolution'] = screen.width;
  expInfo['yResolution'] = screen.height;

  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome to the Zoo!',
    font: 'Arial',
    units: undefined,
    pos: [0, 0.72], height: 0.1,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0
  });

  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : 'height',
    image : 'stimuli/Zookeeper1.bmp', mask : undefined,
    ori : 0, pos : [0, 0.02], size : [0.75, 0.555],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.7)], height: 0.08,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });

  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "OrangFam"
  OrangFamClock = new util.Clock();
  fmsgN = 0;

  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : 'height',
    image : 'stimuli/Orang2.bmp', mask : undefined,
    ori : 0, pos : [(- 0.35), 0.25], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : 'height',
    image : 'stimuli/Orang1.bmp', mask : undefined,
    ori : 0, pos : [0.35, 0.25], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : 'height',
    image : 'stimuli/Orang3.bmp', mask : undefined,
    ori : 0, pos : [0, (- 0.18)], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0
  });
  text_orangfam = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_orangfam',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.855)], height: 0.068,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0
  });

  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Fred"
  FredClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Fred',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.6)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  white_backgrnd1 = new visual.Rect ({
    win: psychoJS.window, name: 'white_backgrnd1', units : 'height',
    width: [0.64, 0.48][0], height: [0.64, 0.48][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });

  image_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_13', units : 'height',
    image : 'stimuli/Orang2.bmp', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Sally"
  SallyClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Sally',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.6)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  white_backgrnd2 = new visual.Rect ({
    win: psychoJS.window, name: 'white_backgrnd2', units : 'height',
    width: [0.64, 0.48][0], height: [0.64, 0.48][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });

  image_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_14', units : 'height',
    image : 'stimuli/Orang1.bmp', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Molly"
  MollyClock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Molly',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.6)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  white_backgrnd3 = new visual.Rect ({
    win: psychoJS.window, name: 'white_backgrnd3', units : 'height',
    width: [0.64, 0.48][0], height: [0.64, 0.48][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });

  image_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_15', units : 'height',
    image : 'stimuli/Orang3.bmp', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0
  });

  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "ZooMap1"
  ZooMap1Clock = new util.Clock();
  mapmsgN = 0;

  zoomap = new visual.ImageStim({
    win : psychoJS.window,
    name : 'zoomap', units : 'height',
    image : 'stimuli/MapStop_Start1.bmp', mask : undefined,
    ori : 0, pos : [0, 0.02], size : [1.3, 0.78],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  text_zoomap1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_zoomap1',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.85)], height: 0.07,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Welcome2"
  Welcome2Clock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : 'height',
    image : 'stimuli/Zookeeper1.bmp', mask : undefined,
    ori : 0, pos : [0, 0.02], size : [0.75, 0.555],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0
  });
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Are you ready to help Zookeeper \nMelissa?',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.7)], height: 0.1,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0
  });

  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "OrangFam"
  OrangFamClock = new util.Clock();
  fmsgN = 0;

  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : 'height',
    image : 'stimuli/Orang2.bmp', mask : undefined,
    ori : 0, pos : [(- 0.35), 0.25], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : 'height',
    image : 'stimuli/Orang1.bmp', mask : undefined,
    ori : 0, pos : [0.35, 0.25], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : 'height',
    image : 'stimuli/Orang3.bmp', mask : undefined,
    ori : 0, pos : [0, (- 0.18)], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0
  });
  text_orangfam = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_orangfam',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.855)], height: 0.068,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0
  });

  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "PracticeReady"
  PracticeReadyClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: "Let's Practice!",
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: 2, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Prac"
  PracClock = new util.Clock();
  thisExp=psychoJS.experiment;
  pnumnogo = 0;
  paccnogo = 0;
  Fxation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Fxation', units : 'height',
    vertices: 'cross', size:[0.08, 0.08],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });

  Stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim', units : 'height',
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  Respond = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "blankWindow"
  blankWindowClock = new util.Clock();
  response_window = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "PracticeOut"
  PracticeOutClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'height',
    image : 'stimuli/MapFriends.bmp', mask : undefined,
    ori : 0, pos : [(- 0.5), 0], size : [0.4, 0.294],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  OutPrac = new visual.TextStim({
    win: psychoJS.window,
    name: 'OutPrac',
    text: 'Great job helping! ',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  psummary_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'psummary_text',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.8)], height: 0.1,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });

  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "ZooMap1"
  ZooMap1Clock = new util.Clock();
  mapmsgN = 0;

  zoomap = new visual.ImageStim({
    win : psychoJS.window,
    name : 'zoomap', units : 'height',
    image : 'stimuli/MapStop_Start1.bmp', mask : undefined,
    ori : 0, pos : [0, 0.02], size : [1.3, 0.78],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  text_zoomap1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_zoomap1',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.85)], height: 0.07,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro',
    text: 'Get Ready!',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "BlockList"
  BlockListClock = new util.Clock();
  accnogo = 0;
  numnogo = 0;

  Fixation2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Fixation2', units : 'height',
    vertices: 'cross', size:[0.08, 0.08],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });

  Stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim2', units : 'height',
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "blankWindow"
  blankWindowClock = new util.Clock();
  response_window = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "OutBlock1"
  OutBlock1Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'height',
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.65), 0], size : [0.294, 0.294],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  Feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback_text',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  summary_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'summary_text',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.8)], height: 0.1,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0
  });

  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "ZooMap2"
  ZooMap2Clock = new util.Clock();
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : 'height',
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.02], size : [1.3, 0.78],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0
  });
  text_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_break',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, (- 0.855)], height: 0.068,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0
  });

  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "Out"
  OutClock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'default text',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], height: 0.1,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0
  });

  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var wmsg1;
var _key_resp_2_allKeys;
var Welcome1Components;
function Welcome1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Welcome1'-------
    t = 0;
    Welcome1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wmsg1="This is Zookeeper Melissa.\nShe needs your help!\nPlease press the [ENTER] key to proceed."
    text_2.setText(wmsg1);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Welcome1Components = [];
    Welcome1Components.push(text);
    Welcome1Components.push(image_1);
    Welcome1Components.push(text_2);
    Welcome1Components.push(key_resp_2);

    Welcome1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Welcome1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Welcome1'-------
    // get current time
    t = Welcome1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index

      text.setAutoDraw(true);
    }


    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index

      image_1.setAutoDraw(true);
    }


    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index

      text_2.setAutoDraw(true);
    }


    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    Welcome1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcome1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Welcome1'-------
    Welcome1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Welcome1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var ftmp;
var fmsg;
var _key_resp_3_allKeys;
var OrangFamComponents;
function OrangFamRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'OrangFam'-------
    t = 0;
    OrangFamClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ftmp = ["These are Melissa\'s three orangutan friends, Fred, Sally and Molly.\n And they are going to be your helpers too.", "Please remember her orangutan friends because you don\'t want to put them in cages."];
    fmsg = ftmp[fmsgN];
    text_orangfam.setText(fmsg);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    OrangFamComponents = [];
    OrangFamComponents.push(image_3);
    OrangFamComponents.push(image_4);
    OrangFamComponents.push(image_5);
    OrangFamComponents.push(text_orangfam);
    OrangFamComponents.push(key_resp_3);

    OrangFamComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function OrangFamRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'OrangFam'-------
    // get current time
    t = OrangFamClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index

      image_3.setAutoDraw(true);
    }


    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index

      image_4.setAutoDraw(true);
    }


    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index

      image_5.setAutoDraw(true);
    }


    // *text_orangfam* updates
    if (t >= 0.0 && text_orangfam.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_orangfam.tStart = t;  // (not accounting for frame time here)
      text_orangfam.frameNStart = frameN;  // exact frame index

      text_orangfam.setAutoDraw(true);
    }


    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    OrangFamComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OrangFamRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'OrangFam'-------
    OrangFamComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fmsgN = 1;

    // the Routine "OrangFam" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var FredComponents;
function FredRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Fred'-------
    t = 0;
    FredClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    FredComponents = [];
    FredComponents.push(text_9);
    FredComponents.push(white_backgrnd1);
    FredComponents.push(image_13);
    FredComponents.push(key_resp_4);

    FredComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FredRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Fred'-------
    // get current time
    t = FredClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index

      text_9.setAutoDraw(true);
    }


    // *white_backgrnd1* updates
    if (t >= 0.0 && white_backgrnd1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      white_backgrnd1.tStart = t;  // (not accounting for frame time here)
      white_backgrnd1.frameNStart = frameN;  // exact frame index

      white_backgrnd1.setAutoDraw(true);
    }


    // *image_13* updates
    if (t >= 0.0 && image_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_13.tStart = t;  // (not accounting for frame time here)
      image_13.frameNStart = frameN;  // exact frame index

      image_13.setAutoDraw(true);
    }


    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    FredComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FredRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Fred'-------
    FredComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Fred" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var SallyComponents;
function SallyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Sally'-------
    t = 0;
    SallyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    SallyComponents = [];
    SallyComponents.push(text_10);
    SallyComponents.push(white_backgrnd2);
    SallyComponents.push(image_14);
    SallyComponents.push(key_resp_5);

    SallyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SallyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Sally'-------
    // get current time
    t = SallyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index

      text_10.setAutoDraw(true);
    }


    // *white_backgrnd2* updates
    if (t >= 0.0 && white_backgrnd2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      white_backgrnd2.tStart = t;  // (not accounting for frame time here)
      white_backgrnd2.frameNStart = frameN;  // exact frame index

      white_backgrnd2.setAutoDraw(true);
    }


    // *image_14* updates
    if (t >= 0.0 && image_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_14.tStart = t;  // (not accounting for frame time here)
      image_14.frameNStart = frameN;  // exact frame index

      image_14.setAutoDraw(true);
    }


    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    SallyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SallyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Sally'-------
    SallyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Sally" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var MollyComponents;
function MollyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Molly'-------
    t = 0;
    MollyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    MollyComponents = [];
    MollyComponents.push(text_17);
    MollyComponents.push(white_backgrnd3);
    MollyComponents.push(image_15);
    MollyComponents.push(key_resp_6);

    MollyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MollyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Molly'-------
    // get current time
    t = MollyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index

      text_17.setAutoDraw(true);
    }


    // *white_backgrnd3* updates
    if (t >= 0.0 && white_backgrnd3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      white_backgrnd3.tStart = t;  // (not accounting for frame time here)
      white_backgrnd3.frameNStart = frameN;  // exact frame index

      white_backgrnd3.setAutoDraw(true);
    }


    // *image_15* updates
    if (t >= 0.0 && image_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_15.tStart = t;  // (not accounting for frame time here)
      image_15.frameNStart = frameN;  // exact frame index

      image_15.setAutoDraw(true);
    }


    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    MollyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MollyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Molly'-------
    MollyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Molly" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var inmsg;
var _key_resp_8_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    inmsg="An accident happened in the zoo today and all animals have gotten out of their cages! What a mess!\n\
    You can help Zookeeper Melissa and her orangutan friends to put animals back in cages.\n\n\
    You can help by pressing the SPACE bar every time you see an animal.\n\
    However, the orangutans are helping you, so you don’t want to put them in cages. So DO NOT press the SPACE bar when you see an orangutan friend!"
    text_12.setText(inmsg);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text_12);
    InstructionsComponents.push(key_resp_8);

    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index

      text_12.setAutoDraw(true);
    }


    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var maptmp;
var mapmsg;
var _key_resp_7_allKeys;
var ZooMap1Components;
function ZooMap1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ZooMap1'-------
    t = 0;
    ZooMap1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    maptmp = ["Here is the map of the zoo and we are going to help Zookeeper Melissa in different areas.", "Let\'s begin at the Zoo entrance!"];
    mapmsg = maptmp[mapmsgN];
    text_zoomap1.setText(mapmsg);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    ZooMap1Components = [];
    ZooMap1Components.push(zoomap);
    ZooMap1Components.push(text_zoomap1);
    ZooMap1Components.push(key_resp_7);

    ZooMap1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ZooMap1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ZooMap1'-------
    // get current time
    t = ZooMap1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *zoomap* updates
    if (t >= 0.0 && zoomap.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zoomap.tStart = t;  // (not accounting for frame time here)
      zoomap.frameNStart = frameN;  // exact frame index

      zoomap.setAutoDraw(true);
    }


    // *text_zoomap1* updates
    if (t >= 0.0 && text_zoomap1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_zoomap1.tStart = t;  // (not accounting for frame time here)
      text_zoomap1.frameNStart = frameN;  // exact frame index

      text_zoomap1.setAutoDraw(true);
    }


    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    ZooMap1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ZooMap1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ZooMap1'-------
    ZooMap1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    mapmsgN = 1;
    // the Routine "ZooMap1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var Welcome2Components;
function Welcome2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Welcome2'-------
    t = 0;
    Welcome2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    Welcome2Components = [];
    Welcome2Components.push(image_6);
    Welcome2Components.push(text_14);
    Welcome2Components.push(key_resp_9);

    Welcome2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Welcome2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Welcome2'-------
    // get current time
    t = Welcome2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index

      image_6.setAutoDraw(true);
    }


    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index

      text_14.setAutoDraw(true);
    }


    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    Welcome2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Welcome2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Welcome2'-------
    Welcome2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Welcome2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var PracticeReadyComponents;
function PracticeReadyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'PracticeReady'-------
    t = 0;
    PracticeReadyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    PracticeReadyComponents = [];
    PracticeReadyComponents.push(text_15);
    PracticeReadyComponents.push(key_resp_10);

    PracticeReadyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function PracticeReadyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'PracticeReady'-------
    // get current time
    t = PracticeReadyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index

      text_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((text_15.status === PsychoJS.Status.STARTED || text_15.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      text_15.setAutoDraw(false);
    }

    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_10.status === PsychoJS.Status.STARTED || key_resp_10.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_10.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeReadyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeReadyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'PracticeReady'-------
    PracticeReadyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }

    key_resp_10.stop();
    return Scheduler.Event.NEXT;
  };
}


var Practice;
var currentLoop;
function PracticeLoopBegin(PracticeLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  Practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/Practice.csv',
    seed: undefined, name: 'Practice'
  });
  psychoJS.experiment.addLoop(Practice); // add the loop to the experiment
  currentLoop = Practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  Practice.forEach(function() {
    const snapshot = Practice.getSnapshot();

    PracticeLoopScheduler.add(importConditions(snapshot));
    PracticeLoopScheduler.add(PracRoutineBegin(snapshot));
    PracticeLoopScheduler.add(PracRoutineEachFrame(snapshot));
    PracticeLoopScheduler.add(PracRoutineEnd(snapshot));
    PracticeLoopScheduler.add(blankWindowRoutineBegin(snapshot));
    PracticeLoopScheduler.add(blankWindowRoutineEachFrame(snapshot));
    PracticeLoopScheduler.add(blankWindowRoutineEnd(snapshot));
    PracticeLoopScheduler.add(endLoopIteration(PracticeLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function PracticeLoopEnd() {
  psychoJS.experiment.removeLoop(Practice);

  return Scheduler.Event.NEXT;
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'stimuli/BlockList.csv',
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blocks.forEach(function() {
    const snapshot = blocks.getSnapshot();

    blocksLoopScheduler.add(importConditions(snapshot));
    blocksLoopScheduler.add(IntroRoutineBegin(snapshot));
    blocksLoopScheduler.add(IntroRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(IntroRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopScheduler);
    blocksLoopScheduler.add(trialsLoopEnd);
    blocksLoopScheduler.add(OutBlock1RoutineBegin(snapshot));
    blocksLoopScheduler.add(OutBlock1RoutineEachFrame(snapshot));
    blocksLoopScheduler.add(OutBlock1RoutineEnd(snapshot));
    const mapsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(mapsLoopBegin, mapsLoopScheduler);
    blocksLoopScheduler.add(mapsLoopScheduler);
    blocksLoopScheduler.add(mapsLoopEnd);
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: trialFiles,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(BlockListRoutineBegin(snapshot));
    trialsLoopScheduler.add(BlockListRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(BlockListRoutineEnd(snapshot));
    trialsLoopScheduler.add(blankWindowRoutineBegin(snapshot));
    trialsLoopScheduler.add(blankWindowRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(blankWindowRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var maps;
function mapsLoopBegin(mapsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  maps = new TrialHandler({
    psychoJS: psychoJS,
    nReps: mapDur, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'maps'
  });
  psychoJS.experiment.addLoop(maps); // add the loop to the experiment
  currentLoop = maps;  // we're now the current loop

  // Schedule all the trials in the trialList:
  maps.forEach(function() {
    const snapshot = maps.getSnapshot();

    mapsLoopScheduler.add(importConditions(snapshot));
    mapsLoopScheduler.add(ZooMap2RoutineBegin(snapshot));
    mapsLoopScheduler.add(ZooMap2RoutineEachFrame(snapshot));
    mapsLoopScheduler.add(ZooMap2RoutineEnd(snapshot));
    mapsLoopScheduler.add(endLoopIteration(mapsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function mapsLoopEnd() {
  psychoJS.experiment.removeLoop(maps);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var pcorrectKey;
var _Respond_allKeys;
var PracComponents;
function PracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Prac'-------
    t = 0;
    PracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.050000);
    // update component parameters for each repeat
    if ((pimage === "Go")) {
        pcorrectKey = "space";
    }
    if ((pimage === "NoGo")) {
        pcorrectKey = undefined;
    }
    thisExp.addData("pcorrectKey", pcorrectKey);

    Stim.setImage(ps1);
    Respond.keys = undefined;
    Respond.rt = undefined;
    _Respond_allKeys = [];
    // keep track of which components have finished
    PracComponents = [];
    PracComponents.push(Fxation);
    PracComponents.push(Stim);
    PracComponents.push(Respond);

    PracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Prac'-------
    // get current time
    t = PracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *Fxation* updates
    if (t >= 0.0 && Fxation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fxation.tStart = t;  // (not accounting for frame time here)
      Fxation.frameNStart = frameN;  // exact frame index

      Fxation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Fxation.status === PsychoJS.Status.STARTED || Fxation.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Fxation.setAutoDraw(false);
    }

    // *Stim* updates
    if (t >= 0.3 && Stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim.tStart = t;  // (not accounting for frame time here)
      Stim.frameNStart = frameN;  // exact frame index

      Stim.setAutoDraw(true);
    }

    frameRemains = 0.3 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Stim.status === PsychoJS.Status.STARTED || Stim.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Stim.setAutoDraw(false);
    }

    // *Respond* updates
    if (t >= 0.3 && Respond.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Respond.tStart = t;  // (not accounting for frame time here)
      Respond.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Respond.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Respond.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Respond.clearEvents(); });
    }

    frameRemains = 0.3 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Respond.status === PsychoJS.Status.STARTED || Respond.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Respond.status = PsychoJS.Status.FINISHED;
  }

    if (Respond.status === PsychoJS.Status.STARTED) {
      let theseKeys = Respond.getKeys({keyList: ['1', '5', 'space'], waitRelease: false});
      _Respond_allKeys = _Respond_allKeys.concat(theseKeys);
      if (_Respond_allKeys.length > 0) {
        Respond.keys = _Respond_allKeys[0].name;  // just the first key pressed
        Respond.rt = _Respond_allKeys[0].rt;
        // was this correct?
        if (Respond.keys == pcorrectKey) {
            Respond.corr = 1;
        } else {
            Respond.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    PracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Prac'-------
    PracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((pimage === "NoGo")) {
        pnumnogo = (pnumnogo + 1);
        if (((Respond.corr) || (Respond.keys === pcorrectKey))) {
            paccnogo = (paccnogo + 1);
        }
    }
    thisExp.addData("pnumnogo", pnumnogo);
    thisExp.addData("paccnogo", paccnogo);
    // was no response the correct answer?!
    if (Respond.keys === undefined) {
      if (['None','none',undefined].includes(pcorrectKey)) {
         Respond.corr = 1;  // correct non-response
      } else {
         Respond.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('Respond.keys', Respond.keys);
    psychoJS.experiment.addData('Respond.corr', Respond.corr);
    if (typeof Respond.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Respond.rt', Respond.rt);
        routineTimer.reset();
        }

    Respond.stop();
    return Scheduler.Event.NEXT;
  };
}


var _response_window_allKeys;
var blankWindowComponents;
function blankWindowRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blankWindow'-------
    t = 0;
    blankWindowClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    response_window.keys = undefined;
    response_window.rt = undefined;
    _response_window_allKeys = [];
    // keep track of which components have finished
    blankWindowComponents = [];
    blankWindowComponents.push(response_window);

    blankWindowComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blankWindowRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blankWindow'-------
    // get current time
    t = blankWindowClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *response_window* updates
    if (t >= 0.0 && response_window.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_window.tStart = t;  // (not accounting for frame time here)
      response_window.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_window.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_window.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_window.clearEvents(); });
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((response_window.status === PsychoJS.Status.STARTED || response_window.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      response_window.status = PsychoJS.Status.FINISHED;
  }

    if (response_window.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_window.getKeys({keyList: ['1', '5', 'space'], waitRelease: false});
      _response_window_allKeys = _response_window_allKeys.concat(theseKeys);
      if (_response_window_allKeys.length > 0) {
        response_window.keys = _response_window_allKeys[0].name;  // just the first key pressed
        response_window.rt = _response_window_allKeys[0].rt;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    blankWindowComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankWindowRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blankWindow'-------
    blankWindowComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('response_window.keys', response_window.keys);
    if (typeof response_window.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_window.rt', response_window.rt);
        }

    response_window.stop();
    return Scheduler.Event.NEXT;
  };
}


var presp;
var pacc;
var pnum;
var sumRt;
var pmeanRt;
var pFeedback;
var pmsg;
var _key_resp_11_allKeys;
var PracticeOutComponents;
function PracticeOutRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'PracticeOut'-------
    t = 0;
    PracticeOutClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Get list of responses
    presp = psychoJS.experiment._trialsData;
    // Filter data to get correct trials
    //pcorr = presp.filter((trial) => (trial['Respond.corr'] === 1))
    // Get count of correct trials
    pacc = presp.reduce((a, b) => a + b['Respond.corr'], 0);
    // Get Trial Length
    pnum = presp.length;

    // Mean RTs:
    sumRt = 0;
    for (let eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++)
    {
      if ('Respond.rt' in psychoJS.experiment._trialsData[eachResp]) {
        sumRt += psychoJS.experiment._trialsData[eachResp]['Respond.rt'];
      }
    }
    pmeanRt=sumRt/(pacc - paccnogo);
    //console.log(sumRt)

    if ((pnumnogo > 0)) {
        if ((((paccnogo / pnumnogo) * 100) >= 90)) {
            pFeedback = "Try to catch them even faster next time!";
        } else {
            pFeedback = "Keep watching out for the Orangutan friends!";
        }
    } else {
        pFeedback = "This should not happen: numnogo = 0";
    }
    //[accnogo]/[numnogo] [acc]/[num] [meanrt]
    pmsg = String(parseInt(paccnogo))+"/"+String(parseInt(pnumnogo))+" "+String(parseInt(pacc))+"/"+String(parseInt(pnum))+" "+String(parseFloat(pmeanRt).toFixed(2));
    psummary_text.setText(pmsg);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    PracticeOutComponents = [];
    PracticeOutComponents.push(image);
    PracticeOutComponents.push(OutPrac);
    PracticeOutComponents.push(psummary_text);
    PracticeOutComponents.push(key_resp_11);

    PracticeOutComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PracticeOutRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'PracticeOut'-------
    // get current time
    t = PracticeOutClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index

      image.setAutoDraw(true);
    }


    // *OutPrac* updates
    if (t >= 0.0 && OutPrac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      OutPrac.tStart = t;  // (not accounting for frame time here)
      OutPrac.frameNStart = frameN;  // exact frame index

      OutPrac.setAutoDraw(true);
    }


    // *psummary_text* updates
    if (t >= 0.0 && psummary_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      psummary_text.tStart = t;  // (not accounting for frame time here)
      psummary_text.frameNStart = frameN;  // exact frame index

      psummary_text.setAutoDraw(true);
    }


    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeOutComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeOutRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'PracticeOut'-------
    PracticeOutComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "PracticeOut" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Intro'-------
    t = 0;
    IntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(intro);
    IntroComponents.push(key_resp_12);

    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Intro'-------
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *intro* updates
    if (t >= 0.0 && intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro.tStart = t;  // (not accounting for frame time here)
      intro.frameNStart = frameN;  // exact frame index

      intro.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((intro.status === PsychoJS.Status.STARTED || intro.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      intro.setAutoDraw(false);
    }

    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp_12.status === PsychoJS.Status.STARTED || key_resp_12.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp_12.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space', 'return', 'num_enter'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Intro'-------
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }

    key_resp_12.stop();
    return Scheduler.Event.NEXT;
  };
}


var correctKey;
var _key_resp_allKeys;
var BlockListComponents;
function BlockListRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'BlockList'-------
    t = 0;
    BlockListClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.050000);
    // update component parameters for each repeat
    // assign correct keypress
    if ((gonogo === 101)) {
        correctKey = "space";
    }
    if ((gonogo === 102)) {
        correctKey = undefined;
    }
    thisExp.addData("correctKey", correctKey);

    Stim2.setImage(s1);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    BlockListComponents = [];
    BlockListComponents.push(Fixation2);
    BlockListComponents.push(Stim2);
    BlockListComponents.push(key_resp);

    BlockListComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BlockListRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'BlockList'-------
    // get current time
    t = BlockListClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *Fixation2* updates
    if (t >= 0 && Fixation2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixation2.tStart = t;  // (not accounting for frame time here)
      Fixation2.frameNStart = frameN;  // exact frame index

      Fixation2.setAutoDraw(true);
    }

    frameRemains = 0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Fixation2.status === PsychoJS.Status.STARTED || Fixation2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Fixation2.setAutoDraw(false);
    }

    // *Stim2* updates
    if (t >= 0.3 && Stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim2.tStart = t;  // (not accounting for frame time here)
      Stim2.frameNStart = frameN;  // exact frame index

      Stim2.setAutoDraw(true);
    }

    frameRemains = 0.3 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Stim2.status === PsychoJS.Status.STARTED || Stim2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Stim2.setAutoDraw(false);
    }

    // *key_resp* updates
    if (t >= 0.3 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.3 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp.status === PsychoJS.Status.STARTED || key_resp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '5', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        // was this correct?
        if (key_resp.keys == correctKey) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    BlockListComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockListRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'BlockList'-------
    BlockListComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // count number of nogos & correct responses
    if ((gonogo === 102)) {
        numnogo = (numnogo + 1);
        if (((key_resp.corr) || (key_resp.keys === correctKey))) {
            accnogo = (accnogo + 1);
        }
    }
    thisExp.addData("numnogo", numnogo);
    thisExp.addData("accnogo", accnogo);
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctKey)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }

    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var dataSoFar;
var acc;
var chunkLength;
var num;
var meanRt;
var Feedback;
var acctotal;
var msg;
var _key_resp_15_allKeys;
var OutBlock1Components;
function OutBlock1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'OutBlock1'-------
    t = 0;
    OutBlock1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // get list of responses
    dataSoFar = psychoJS.experiment._trialsData;
    acc = 0;
    chunkLength = 40;
    num = chunkLength;

    // Get Accurracy and Mean RT

    sumRt = 0;
    meanRt = 0;
    //for (let i=0; i<psychoJS.experiment._trialsData.length; i++)
    for (var i=(dataSoFar.length-chunkLength); i<dataSoFar.length; i++)
    {
        if ('key_resp.rt' in psychoJS.experiment._trialsData[i]) {
            sumRt += psychoJS.experiment._trialsData[i]['key_resp.rt'];
            acc += psychoJS.experiment._trialsData[i]['key_resp.corr'];
        }
    }
    //meanRt=sumRt/(acc - accnogo); // acc only contains accurate go trials
    meanRt=sumRt/acc;

    // Text Feedback
    if ((numnogo > 0)) {
        if ((((accnogo / numnogo) * 100) >= 90)) {
            Feedback = "Try to catch them even faster next time!";
        } else {
            Feedback = "Keep watching out for the Orangutan friends!";
        }
    } else {
        Feedback = "This should not happen: numnogo = 0";
    }
    acctotal=(accnogo + acc);
    msg = String(parseInt(accnogo))+"/"+String(parseInt(numnogo))+" "+String(parseInt(acctotal))+"/"+String(parseInt(num))+" "+String(parseFloat(meanRt).toFixed(2));

    accnogo = 0;
    numnogo = 0;
    image_2.setImage(OutBlockStim);
    Feedback_text.setText(Feedback);
    summary_text.setText(msg);
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    OutBlock1Components = [];
    OutBlock1Components.push(image_2);
    OutBlock1Components.push(Feedback_text);
    OutBlock1Components.push(summary_text);
    OutBlock1Components.push(key_resp_15);

    OutBlock1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function OutBlock1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'OutBlock1'-------
    // get current time
    t = OutBlock1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index

      image_2.setAutoDraw(true);
    }


    // *Feedback_text* updates
    if (t >= 0.0 && Feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback_text.tStart = t;  // (not accounting for frame time here)
      Feedback_text.frameNStart = frameN;  // exact frame index

      Feedback_text.setAutoDraw(true);
    }


    // *summary_text* updates
    if (t >= 0.0 && summary_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      summary_text.tStart = t;  // (not accounting for frame time here)
      summary_text.frameNStart = frameN;  // exact frame index

      summary_text.setAutoDraw(true);
    }


    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    OutBlock1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OutBlock1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'OutBlock1'-------
    OutBlock1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "OutBlock1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var breakMsg;
var _key_resp_13_allKeys;
var ZooMap2Components;
function ZooMap2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ZooMap2'-------
    t = 0;
    ZooMap2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((Procedure === "Block2")) {
        breakMsg = "You can take a short break now if you want. Once you are ready to continue heading to the panda palace, press the [ENTER] key!";
    } else {
        if ((Procedure === "Block4")) {
            breakMsg = "You can take a short break now if you want. Once you are ready to continue heading to the monkey palace, press the [ENTER] key!";
        } else {
            if ((Procedure === "Block6")) {
                breakMsg = "You can take a short break now if you want. Once you are ready to continue heading to the kangaroo palace, press the [ENTER] key!";
            } else {
                (breakMsg === "");
            }
        }
    }

    image_7.setImage(ZooMap);
    text_break.setText(breakMsg);
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    ZooMap2Components = [];
    ZooMap2Components.push(image_7);
    ZooMap2Components.push(text_break);
    ZooMap2Components.push(key_resp_13);

    ZooMap2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ZooMap2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ZooMap2'-------
    // get current time
    t = ZooMap2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index

      image_7.setAutoDraw(true);
    }


    // *text_break* updates
    if (t >= 0.0 && text_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_break.tStart = t;  // (not accounting for frame time here)
      text_break.frameNStart = frameN;  // exact frame index

      text_break.setAutoDraw(true);
    }


    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['return', 'num_enter'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    ZooMap2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ZooMap2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ZooMap2'-------
    ZooMap2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "ZooMap2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


var _key_resp_14_allKeys;
var OutComponents;
function OutRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Out'-------
    t = 0;
    OutClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_18.setText('Congratulations! All of the animals are back in their cages! You did a great job!');
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    OutComponents = [];
    OutComponents.push(text_18);
    OutComponents.push(key_resp_14);

    OutComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function OutRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Out'-------
    // get current time
    t = OutClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index

      text_18.setAutoDraw(true);
    }


    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index

      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['space', 'return', 'num_enter'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }

    continueRoutine = false;  // reverts to True if at least one component still running
    OutComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });

    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OutRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Out'-------
    OutComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Out" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }







  document.body.style.cursor='auto';











  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
